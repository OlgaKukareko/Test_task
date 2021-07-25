$(document).on('ready', function() {
    $('.slider').slick({ //подключение slick slider
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1500,
        speed: 500,
        dots: true,
        arrows: false,
        fade: true,
        cssEase: 'linear'
    });

    // добавление класс для навигации

    $('.nav-link').click(function(){
        $(this).addClass("active");
        $(".nav-link").not(this).removeClass("active");
        });
  });