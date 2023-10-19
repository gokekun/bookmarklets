/*
----------------------------------------------------------
Configs e variáveis globais
----------------------------------------------------------
*/
var USUARIO = 'usuario'; // usuário para fazer filtro e destacar na lista de processos
var CHAT_ID = '000000000'; // Chat_id para envio da mensagem Telegram
var TOKEN = '5548230000:EEDo54jzUr-vd2ew4bv3sf5GEMTSS5wFD31C7dpI'; // Token Telegram


var elmnts = document.getElementById('tblProcessosRecebidos').querySelectorAll('tbody > tr');
var tr_array = [...elmnts];

/*
----------------------------------------------------------
Função deixa roxo todos processos no meu nome
----------------------------------------------------------
*/
function destacaProcessoUsuario(usuario){
	// var elmnts = document.getElementById('tblProcessosRecebidos').querySelectorAll('tbody > tr');
	// var tr_array = [...elmnts];
	for (var i=tr_array.length; i--; ) {
		try{
			var username = tr_array[i].getElementsByClassName("ancoraSigla")[0].innerHTML;
		} catch (error){
			var username = '';
		};
		try{
			var dldate = tr_array[i].querySelector('td:nth-child(5)').textContent;
			var fromdate = tr_array[i].querySelector('td:nth-child(6)').textContent;
		} catch (error){
			var dldate = '';
			var fromdate = '';
		};
		if (username == usuario){
			if (fromdate.length > 0){
				// elmnts[i].style.backgroundColor  = "#9B59B6";
				elmnts[i].style.backgroundColor  = "#C1A7CC";
			} else {
				// elmnts[i].style.backgroundColor  = "#C1A7CC";
				elmnts[i].style.backgroundColor  = "#9B59B6";
			}
		}
	}
}

/*
----------------------------------------------------------
Função para mandar mensagem de Telegram
----------------------------------------------------------
*/
function sendTelegram(content){
	// var CHAT_ID = '29951142';
	// var TOKEN = '5149796129:AAEo87jzUr-v9E4STqsf5GEMTSgWwZC7dpI';
	var url = 'https://api.telegram.org/bot' + TOKEN + '/sendMessage';
	var body = JSON.stringify({
	chat_id: CHAT_ID,
	parse_mode: 'html',
	text: content
	});
	var xhr = new XMLHttpRequest();
	xhr.open('POST', url, true);
	xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8'); //
	xhr.send(body);
};


/*
----------------------------------------------------------
Script para me avisar quando há processo recebido novo
----------------------------------------------------------
*/

function checarNovosProcessos(){
	for (var i=tr_array.length; i--; ) {
		try{
			var statusNaoRecebido = tr_array[i].getElementsByClassName("processoNaoVisualizado")[0].innerHTML;
		} catch (error){
			var statusNaoRecebido = null;
		};
		// alert( statusNaoRecebido + ': ' + sessionStorage.getItem(statusNaoRecebido) ); // 1
		if (statusNaoRecebido != null){
			// sessionStorage.removeItem(statusNaoRecebido);
			if (sessionStorage.getItem(statusNaoRecebido) == null){
				sessionStorage.setItem(statusNaoRecebido, 'novo');
				message += '* ' + statusNaoRecebido + '\n';
				// alert( statusNaoRecebido + ': ' + sessionStorage.getItem(statusNaoRecebido) ); // 1
			} else {
				sessionStorage.setItem(statusNaoRecebido, 'novo');
			}
		};
	}

}


/*
----------------------------------------------------------
EXECUÇÃO DOS SCRIPTS
----------------------------------------------------------
*/

var reloadflag = document.getElementById('tblProcessosRecebidos');
if (reloadflag != null){

	// Reload a página a cada 60 segundos
	window.setTimeout( function() {
	window.location.reload();
	}, 60000);

	// Função de destacar processo do usuario
	destacaProcessoUsuario(USUARIO);

	// Função checa processos novos e envia Telegram
	var message = '<b>Novos processos:</b>\n';
	checarNovosProcessos();
	if (message.length > 30){sendTelegram(message);}
}
