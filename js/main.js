function main() {

(function () {
   'use strict';

  // Hide .navbar first
  $(".navbar").hide();

  // Fade in .navbar
  $(function () {
    $(window).scroll(function () {
            // set distance user needs to scroll before we fadeIn navbar
      if ($(this).scrollTop() > 200) {
        $('.navbar').fadeIn();
      } else {
        $('.navbar').fadeOut();
      }
    });


  });

  // Preloader */
      $(window).on('load', function() {

     // will first fade out the loading animation
      $("#status").fadeOut("slow");

      // will fade out the whole DIV that covers the website.
      $("#preloader").delay(500).fadeOut("slow").remove();

    });

   // Page scroll
    $('a.page-scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 40
            }, 900);
            return false;
          }
        }
      });

    // Show Menu on Book
    $(window).on('scroll', function() {
        var navHeight = $(window).height() - 100;
        if ($(window).scrollTop() > navHeight) {
            $('.navbar-default').addClass('on');
        } else {
            $('.navbar-default').removeClass('on');
        }
    });

    $('body').scrollspy({
        target: '.navbar-default',
        offset: 80
    });

    /*
    $(document).ready(function() {
        $("#testimonial").owlCarousel({
        navigation : false, // Show next and prev buttons
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true
        });

    }); */

    // Portfolio Isotope Filter
    $(window).on('load', function() {
        var $container = $('.portfolio-items');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        $('.cat a').click(function() {
            $('.cat .active').removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });

    });



  // jQuery Parallax
  function initParallax() {
    $('#intro').parallax({ "imageSrc": "img/lovebirds.jpg", "speed": 0.3 });
    $('#services').parallax({ "speed": 0.3 });
    $('#aboutimg').parallax({ "speed": 0.3 });
    $('#testimonials').parallax({ "speed": 0.3 });

  }
  initParallax();

    // Pretty Photo
  $("a[rel^='prettyPhoto']").prettyPhoto({
    social_tools: false
  });

}());


}
main();
