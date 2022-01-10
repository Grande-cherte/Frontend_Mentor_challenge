let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');
let headermain = document.getElementById('header-main');
let body_main = document.getElementById('body-main');
navBarToggle.addEventListener('click', function () {
    mainNav.classList.toggle('active');
    headermain.classList.toggle('active');
    body_main.classList.toggle('menu-open');
});

let bg = document.getElementById('bg-gradiant');
navBarToggle.addEventListener('click', function () {

});


$('.slide-latest-article').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
        {
            breakpoint: 1262,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

$('.slideWhy').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
        {
            breakpoint: 1262,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 1024,
            settings: "unslick"
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 568,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});
AOS.init();

