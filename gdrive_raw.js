/**
* A script to convert Google Drive links to RAW Google Drive link to direct access to the file.
*/

// RAW JS
function rawjs() {
var link = window.prompt("Digite o link Google do Vídeo","");
var reg = /https\:\/\/drive\.google\.com\/file\/d\/(.*)\/view/g;
var match = reg.exec(link)
var newlink = 'https://drive.google.com/uc?id=' + match[1];
alert(newlink);
}

// BOOKMARKLET
javascript:var%20link%3Dwindow.prompt(%22Digite%20o%20link%20Google%20do%20V%5Cu00eddeo%22%2C%22%22)%2Creg%3D%2Fhttps%3A%5C%2F%5C%2Fdrive%5C.google%5C.com%5C%2Ffile%5C%2Fd%5C%2F(.*)%5C%2Fview%2Fg%2Cmatch%3Dreg.exec(link)%2Cnewlink%3D%22https%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D%22%2Bmatch%5B1%5D%3Balert(newlink)%3Bvoid+0
