function opacidadeImageUp(id) {
  document.getElementById(id).style.opacity = 1;
}

function opacidadeImageDown(id) {
  document.getElementById(id).style.opacity = 0.5;
}

function autenticarEmail() {
  var obj = eval("document.forms[0].Email");
  var txt = obj.value;
  if (txt.length != 0 && (txt.indexOf("@") < 1 || txt.indexOf(".") < 7)) {
    alert("Email incorreto");
    obj.focus();
  }
}

$(document).ready(function () {
  $("#phone").mask("(00) 0.0000-0000");
});


