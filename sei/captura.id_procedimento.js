javascript:(
	function(){
		var url_string = window.location.href;
		var url = new URL(url_string);
		var c = url.searchParams.get("id_procedimento");
		if(c == null){
			var c = url.searchParams.get("id_protocolo");
			var fullurl = "https://sei.mctic.gov.br/sei/controlador.php?acao=procedimento_trabalhar&id_procedimento="+c;
		}
		alert("link:\n"+fullurl+"\n\nid_procedimento:\n"+c+"\n\nLink copiado para a área de transferência");
		function copyToClipboard(text) {
			var dummy = document.createElement("textarea");
			document.body.appendChild(dummy);
			dummy.value = text;
			dummy.select();
			document.execCommand("copy");
			document.body.removeChild(dummy);
		}
		copyToClipboard(fullurl)
	}
)();
