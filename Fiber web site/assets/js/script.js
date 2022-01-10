

let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');
navBarToggle.addEventListener('click', function () {
    mainNav.classList.toggle('activemenu');
});


$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 40,
    nav: true,
    autoHeight: true,
    autoplay: true,
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
