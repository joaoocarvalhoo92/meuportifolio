
// EFEITO PARALLAX
let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains_behind = document.getElementById('mountains_behind');
let mountains_front = document.getElementById('mountains_front');
let text = document.getElementById('text');
let btn = document.getElementById('btn');
let header = document.querySelector('header');

window.addEventListener('scroll',function(){
    let value = window.scrollY;
    stars.style.left = value * 0.25 + 'px';
    moon.style.top = value * 1.05 + 'px';
    mountains_behind.style.top = value * 0.5 + 'px';
    mountains_front.style.top = value * 0 + 'px';
    text.style.marginRight = value * 2 + 'px';
    text.style.marginTop = value * 1.5 + 'px';
    btn.style.marginTop = value * 1.5 + 'px';
    header.style.marginTop = value * 0.5 + 'px';
    
})

// CAROUSEL

$(".carousel").owlCarousel({
    margin: 80,
    loop: true,
    autoplay: true,
    autoplayTimeout: 8000,
    autoplayHoverpause: true,
    responsive: {
        0: {
            items: 1, // Em telas menores, mostra apenas 1 item por vez
            nav: false
        },
        768: {
            items: 2,
            nav: false
        },
        1100: {
            items: 2,
            nav: false
        },
        1300: {
            items: 4,
            nav: false
        },
        1500: {
            items: 4,
            nav: false
        },
        1800: {
            items: 4,
            nav: false
        }
    }
});


function menuOnClick() {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
    document.getElementById("nav").classList.toggle("show");
  

  //Adiciona ou remove a classe menu-open na página
  document.querySelector('.page-content').classList.toggle('menu-open');
  

}
  