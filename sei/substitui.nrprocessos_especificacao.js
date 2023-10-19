javascript:(
  function(){
    var elements = document.querySelectorAll('.processoVisualizado');
    for ( var i=elements.length; i--; ) {
      var textomouse = document.getElementsByClassName("processoVisualizado")[i].getAttribute("onmouseover");
      var textomouseoverlimpo1 = textomouse.slice(28);
      var textomouseoverlimpo2 = textomouseoverlimpo1.replace(/\'\,\'\D+/,"");
      elements[i].textContent = textomouseoverlimpo2;
    }
  }
)();
