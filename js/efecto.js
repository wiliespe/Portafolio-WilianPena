/*FIXED*/
$(document).ready(function() {
        var altura = $('.cabecera').offset().top;

        $(window).on('scroll', function() {
            if ($(window).scrollTop() > altura) {
                $('.cabecera').addClass('efecto-menu');
            } else {
                $('.cabecera').removeClass('efecto-menu');
            }
        });

    });
    
/*MENU*/
    var btnMenu = document.getElementById('btn-menu');
    var nav = document.getElementById('nav');
    var submenu = document.getElementById('submenu');
    btnMenu.addEventListener('click', function(){
      nav.classList.toggle('movimiento');
    });
    
$(document ).ready(function() {
		$('.menu_on').click(function(){ 
		   $('#btn-menu').toggleClass('visible_menu'); 
		 })
	});


var preloader = $('.preloader');
	$(window).load(function(){
		preloader.remove();
	});

