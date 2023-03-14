function menuOnClick() {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
    document.getElementById("nav").classList.toggle("show");
  

  //Adiciona ou remove a classe menu-open na página
  document.querySelector('.page-content').classList.toggle('menu-open');
  

}


var modal = document.getElementById("modal");
var btn = document.getElementById("budget");
var closeBtn = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

closeBtn.onclick = function() {
  modal.style.display = "none";
}



const curriculoBtn = document.getElementById("curriculo-btn");

curriculoBtn.addEventListener("click", () => {
  window.open(curriculoBtn.querySelector("a").href);
});




/*   ------------------------ CALCULANDO TAXA METABOLICA BASAL---------------- */

// Obtém a janela modal
var modalTmb = document.getElementById("myModalTmb");

// Obtém o botão que abre a janela modal
var btnTmb = document.getElementById("myBtnTmb");

// Obtém o elemento <span> que fecha a janela modal
var spanTmb = document.getElementsByClassName("closeTmb")[0];

// Quando o usuário clicar no botão, abre a janela modal
btnTmb.onclick = function() {
  modalTmb.style.display = "block";
}

// Quando o usuário clicar no <span> (x), fecha a janela modal
spanTmb.onclick = function() {
  modalTmb.style.display = "none";
}

// Quando o usuário clicar fora da janela modal, fecha-a
window.onclick = function(event) {
  if (event.target == modalTmb) {
    modalTmb.style.display = "none";
  }
}

// Quando o usuário envia o formulário, calcula a TMB e exibe o resultado
document.getElementById("myFormTmb").addEventListener("submit", function(event) {
  event.preventDefault(); // previne o envio padrão do formulário
  var gender = document.getElementById("gender").value;
  var weight = parseFloat(document.getElementById("weight").value);
  var height = parseFloat(document.getElementById("height").value);
  var age = parseInt(document.getElementById("age").value);

  if (!gender || !weight || !height || !age) {
    alert("Por favor, preencha todos os campos.");
    return;
    }
    
    if (gender === "male") {
    var tmb = 88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age);
    } else if (gender === "female") {
    var tmb = 447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age);
    }
    
    document.getElementById("result").innerHTML = "Sua Taxa Metabólica Basal é " + tmb.toFixed(2) + " kcal/dia.";
    });



