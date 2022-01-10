let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function () {
    mainNav.classList.toggle('activemenu');
    $(".bd").toggleClass('body');

});


$('.warp-main-img').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    autoplay: true,
    asNavFor: '.warp-main-text',
});

$('.warp-main-text').slick({
    dots: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    asNavFor: '.warp-main-img',
    focusOnSelect: true,
});

$('a[data-slide]').click(function (e) {
    e.preventDefault();
    var slideno = $(this).data('slide');
    $('.warp-main-text').slick('slickGoTo', slideno - 1);
});

$('input[data-slide]').click(function (e) {
    e.preventDefault();
    var slideno = $(this).data('slide');
    console.log(slideno);
    $('.warp-main-text').slick('slickGoTo', slideno - 1);
});


$('.warp-main-text').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    var x = '#t' + currentSlide;
    var y = '#t' + nextSlide;
    $(x).removeClass('active-slide');
    $(y).addClass('active-slide');
    console.log(x);
});

$('.warp-main-img').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    var x = '#a' + currentSlide;
    var y = '#a' + nextSlide;
    console.log(x);
    $(x).removeClass('nav-slide');
    $(y).addClass('nav-slide');

});

