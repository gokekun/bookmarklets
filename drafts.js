// ----------------------------------------
// DOCUMENT
// Get current url
let url = window.location.href;

// Open a new window using url
window.open(url, "_blank");

// Click
document.getElementById("yt0").click()

// Get getElementsByName
document.getElementById("id") // 1 element
document.getElementsByName("name") // array of elements
document.getElementsByClassName("classname") // array of elements
document.getElementsByTagName("tag") // array of elements

// ----------------------------------------
// LOOPS
var array = [1, 2, 3]
var array_len = array.length;
for (var i = 0; i < array_len; i++) {
  console.log(array[i])
}

// ----------------------------------------
// REGEX
// REGEX: match
let text = "Visit W3Schools";
let pattern = /w3schools/i; //i means ignore captalization
let result = text.match(pattern);
// result = W3School

// REGEX: replace
let text = "Mr Blue has a blue house and a blue car";
let result = text.replace(/blue/g, "red"); //g means global
// result = Mr Blue has a red house and a red car.

// ----------------------------------------
// sessionStorage - remember that the sessionStorage have, for each variable, a value.
sessionStorage.getItem(variable)
sessionStorage.setItem(variable, value);
if (sessionStorage.getItem(variable) === null){
  console.log(variable)
}

// ----------------------------------------
// Sleep
window.setTimeout(
  function (){
  // Acha o botão editar e abre uma nova janela com ele.
  var url = "https://www.google.com";
  window.open(url, "_blank");
  }
