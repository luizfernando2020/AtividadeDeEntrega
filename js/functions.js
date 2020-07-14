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

function setarAbaAtiva() {
  var variavel = window.location.href;
  var parametrosDaUrl = variavel.split("Site")[1];
  
    switch (parametrosDaUrl) {
    case "/index.html":
      document.getElementById("home").classList.add("active");
      break;
    case "/cs.html":
      document.getElementById("cs").classList.add("active");
      break;
    case "/fifa.html":
      document.getElementById("jnavbarDropdownogos").classList.add("active");
      break;
    case "/pes.html":
      document.getElementById("pes").classList.add("active");
      break;
    case "/cadastro.html":
      document.getElementById("cadastro").classList.add("active");
      break;
    case "/preco.html":
      document.getElementById("preco").classList.add("active");
      break;

  }
}


