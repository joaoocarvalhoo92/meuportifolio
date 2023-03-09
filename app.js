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







