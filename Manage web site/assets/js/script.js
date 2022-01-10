$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 40,
    nav: true,
    autoHeight: true,
    transitionStyle: "fade",
    responsive: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})



let mainNav = document.getElementById('js-menu');
let headermain = document.getElementById('header-main');
let body_main = document.getElementById('body-main');
let navBarToggle = document.getElementById('js-navbar-toggle');
navBarToggle.addEventListener('click', function () {
    mainNav.classList.toggle('active');
    headermain.classList.toggle('active');
    body_main.classList.toggle('menu-open');
});

//$("#imgmenu").attr('src', 'assets/media/icons/icon-close.svg');

let bg = document.getElementById('bg-gradiant');
navBarToggle.addEventListener('click', function () {


});



AOS.init();
