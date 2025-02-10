let menuMobile = document.querySelector('#menu-mobile');
let main = document.querySelector('#main');
let footer = document.querySelector('#footer');

function menuOn() {
    menuMobile.classList.toggle('d-none');
    menuMobile.classList.toggle('d-flex');
    main.classList.toggle("d-none");
    footer.classList.toggle("d-none");
}