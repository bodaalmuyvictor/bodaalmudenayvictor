(function ($) {
    "use strict";

    // Navbar on scrolling
    $(window).scrollTop(function () {
        $('.navbar').fadeIn('slow').css('display', 'flex');
    });


    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });


    // Scroll to Bottom
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scroll-to-bottom').fadeOut('slow');
        } else {
            $('.scroll-to-bottom').fadeIn('slow');
        }
    });

    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Gallery carousel
    $(".gallery-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1500,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:4
            },
            1200:{
                items:5
            }
        }
    });
	
	/*
	function protector() {
		var clave = prompt("Introduce la clave: ", " "); // pide la contraseña
		var url = clave + ".html"; // crea un URL a partir de la contraseña
		window.location = url; // esta es la línea más importante, que conduce al documento protegido si la contraseña es correcta
	}
	*/
})(jQuery);

function login(){
	var code = document.getElementById("codigo").value;

	if (code == "010923"){
		window.location = "main.html";
	} if else (code == "serdeluz") {
		window.location = "main.html";
	} if else (code == "carpincho") {
		window.location = "main.html";
	} if else (code == "aberroncholado") {
		window.location = "main.html";
	} if else (code == "lacuadraturadelcirculo") {
		window.location = "main.html";
	} else {
		alert("Código Erróneo");
	}
}
