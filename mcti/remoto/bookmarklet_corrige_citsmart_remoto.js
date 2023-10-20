// O Citsmart do MCTI quando acessado pelo remoto não funciona. O motivo foi a configuração errada que a TI fez jogando você para um endereço equivocado. Para consertá-lo, deve-se corrigir o endereço.

// O Remoto lhe manda para um endereço similar a isso:
// https://remoto.mcti.gov.br/f5-w-2938409583833a2f2f1j3458965783696d656e746f2e6d6374692e676f762e6272$$/citsmart/pages/experienceCenter/experienceCenter.load#/ec?idExperienceCenter=1

// Enquanto o correto seria:
// https://remoto.mcti.gov.br/f5-w-2938409583833a2f2f1j3458965783696d656e746f2e6d6374692e676f762e6272$$/citsmart/pages/smartPortal/smartPortal.load#/portal

// O bookmarklet abaixo é absurdamente simples. Ele pega seu url atual, modifica ele e abre uma janela com o Citsmart funcional

// Primeiro apresento o js legível
let url = window.location.href;
let res = url.replace(/\/citsmart\/pages\/experienceCenter\/experienceCenter\.load\#\/ec\?idExperienceCenter\=1/g, "/citsmart/pages/smartPortal/smartPortal.load#/portal");
window.open(res, "_blank");

// Agora o código js para o Bookmarklet
javascript:(function()%7Blet%20url%20%3D%20window.location.href%3B%0Alet%20res%20%3D%20url.replace(%2F%5C%2Fcitsmart%5C%2Fpages%5C%2FexperienceCenter%5C%2FexperienceCenter%5C.load%5C%23%5C%2Fec%5C%3FidExperienceCenter%5C%3D1%2Fg%2C%20%22%2Fcitsmart%2Fpages%2FsmartPortal%2FsmartPortal.load%23%2Fportal%22)%3B%0Awindow.open(res%2C%20%22_blank%22)%3B%7D)()%3B
