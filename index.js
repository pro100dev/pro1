// import './node_modules/jquery/dist/jquery';
// import './node_modules/slick-carousel/slick/slick.min.js';

$(document).ready(function(){
    $('.features-slider').slick({
        prevArrow: '<button type="button" class="slick-prev btn">&#10094;</button>',
        nextArrow: '<button type="button" class="slick-next btn">&#10095;</button>',
        infinite: true,

  });

});

$(document).ready(function(){
    $('.testimonial-box').slick({
        infinite: true,
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        arrows: false
  });

});


$(document).ready(function(){
    $('.recent-articles').slick({
        infinite: true,
        dots: true,
        infinite: true,
        slidesToShow: 2,
        centerMode: true,
        variableWidth: true,
        arrows: false,
        swipeToSlide: true
  });

});