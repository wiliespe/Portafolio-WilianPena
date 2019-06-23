/* eslint-disable */
/*SCROLL UP*/
$(window).scroll(function() {
    if ($(this).scrollTop() > 50 ) {
        $('.scrolltop:hidden').stop(true, true).fadeIn();
        
        
    } else {
        $('.scrolltop').stop(true, true).fadeOut();
    }
 
});

/*SCROLL MENU*/
    $('#inicio').on('click', function () {
        $('html, body').animate({
            scrollTop: $('#section-inicio').offset().top
        }, 2000);
    });

    $('#sobre-mi').on('click', function () {
        $('html, body').animate({
            scrollTop: $('#section-sobre-mi').offset().top-70
        }, 2000);
    });

    $('#speach').on('click', function () {
        $('html, body').animate({
            scrollTop: $('#section-contacto').offset().top-70
        }, 2000);
    });

    $('#arrow1').on('click', function () {
        $('html, body').animate({
            scrollTop: $('#section-sobre-mi').offset().top-70
        }, 2000);
    });

    $('#servicios').on('click', function () {
        $('html, body').animate({
            scrollTop: $('#section-servicios').offset().top-30
        }, 2000);
    });

    $('#portafolio').on('click', function () {
        $('html, body').animate({
            scrollTop: $('#section-portafolio').offset().top-70
        }, 2000);
    });

    $('#contacto').on('click', function () {
        $('html, body').animate({
            scrollTop: $('#section-contacto').offset().top
        }, 2000);
    });
  
    $('#scroll').on('click', function () {
        $('html, body').animate({
            scrollTop: $('#section-inicio').offset().top
        }, 2000);
    });
