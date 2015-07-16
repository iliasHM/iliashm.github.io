/*!
 * Vitality v1.3.4 (http://themes.startbootstrap.com/vitality-v1.3.4)
 * Copyright 2013-2015 Start Bootstrap Themes
 * To use this theme you must have a license purchased at WrapBootstrap (https://wrapbootstrap.com)
 */

(function($) {
    "use strict"; // Start of use strict

    // Smooth Scrolling: Smooth scrolls to an ID on the current page.
    // To use this feature, add a link on your page that links to an ID, and add the .page-scroll class to the link itself. See the docs for more details.
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Activates floating label headings for the contact form.
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Owl Carousel Settings
    $(".about-carousel").owlCarousel({
        items: 3,
        navigation: true,
        pagination: false,
        navigationText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
        ],
    });

    $(".portfolio-carousel").owlCarousel({
        singleItem: true,
        navigation: true,
        pagination: false,
        navigationText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
        ],
        autoHeight: true,
        mouseDrag: false,
        touchDrag: false,
        transitionStyle: "fadeUp"
    });

    $(".testimonials-carousel").owlCarousel({
        singleItem: true,
        navigation: true,
        pagination: true,
        autoHeight: true,
        navigationText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
        ],
        transitionStyle: "backSlide"
    });

    $(".portfolio-gallery").owlCarousel({
        items: 3,
    });

    // // Collapse Manifeste

    // $(function() {
    //   $('div.expandCollapseContent').hide();
    //   $('#placeHolder').hide();
    //   $('.expandCollapse').hover(function() {
    //     var classe = '#' + this.id + 'Collapse';
    //     if ($('#placeHolder').is(':visible') ) {
    //       $('#placeHolder').slideUp(500);
    //     };
    //     if ($('#placeHolder').text() !== $(classe).text()){
    //       $('#placeHolder').slideUp(500, function() {
    //         $('#placeHolder').html($(classe).html());
    //         $('#placeHolder').slideDown(500);
    //       });
    //     }else if (!$('#placeHolder').is(':visible')) {
    //       $('#placeHolder').slideDown(500);
    //     };
    //   });
    // });

    // $('.caption-content').hide();
    // $('.item').hover(function() {
    //   jQuery(this).find($('.caption-title')).fadeToggle();
    //   jQuery(this).find($('.caption-img')).fadeToggle();
    //   jQuery(this).find($('.caption-content')).fadeToggle(); } );

    // $('#watch-video').hide();
    // $('.scroll-down').hover(function() {
    //   $('#play').stop().fadeToggle(200);
    //   $('#watch-video').stop().fadeToggle(2000);
    // },
    //   function() {

    //   $('#watch-video').stop().fadeToggle(200);
    //   $('#play').stop().fadeToggle(2000);
    //    } );

//animate cover CTA
// var fnHeaderPlayButton = function(){
//   var logo = jQuery('.scroll-down .btn-play'),
//   left = logo.find('.left'),
//   right = logo.find('.right'),
//   center = logo.find('.center'),
//   text = logo.find('.text'),
//   animationFinished = true;

//   //exclude feature on mobile
//   if(jQuery(window).width() > 640){
//     jQuery('.ynsect #ut-hero .hero-btn-holder .hero-btn').hover(function(){
//       logo.addClass('hover');

//       if(animationFinished === true){
//         animationFinished = false;
//         center.fadeOut(300,function(){
//           logo.stop().animate({
//           'width':300
//           },300,'swing');
//           left.stop().animate({
//             'width':300
//           },300,'swing');
//           right.stop().animate({
//             'width':300,
//             'background-position':'-305px'
//           },300,'swing');
//           text.delay(300).fadeIn(300,function(){
//             animationFinished = true;
//           });
//         });
//       }

//     },function(){
//       logo.removeClass('hover');
//       animationFinished = false;
//       text.stop().fadeOut(300,function(){
//         logo.stop().animate({
//           'width':95
//         },300,'swing');
//         left.stop().animate({
//           'width':95
//         },300,'swing');
//         right.stop().animate({
//           'width':95,
//           'background-position':'-505px'
//         },300,'swing');


//         text.stop().fadeOut(300);

//         center.delay(300).stop().fadeIn(300,function(){
//           animationFinished = true;
//         });
//       });
//     });
//   }

// }


    // Home switcher
    $(document).ready(function(){

      // window.setInterval(function(){
      //   window.setTimeout(function(){
      //       $('#header1').animate({opacity: 0}, 'slow', function() {
      //         $('.intro-quote').css('color', 'white');
      //         $('#header1 hr').css('border-top', 'white 2px solid');
      //         $('#header1 p').css('color', 'white');
      //         $('#header1 a').css('color', 'white').css('border-color', 'white');
      //         $(this)
      //             .css('background-image', "url('assets/img/visuels/paysage-filtre.png')")
      //             .animate({opacity: 1});
      //         });

      //       // $('#header1').css('background-image', "url('assets/img/visuels/paysage-filtre.png')");
      //       // $('#header1').stop().fadeIn();
      //   },5000);
      //     $('#header1').animate({opacity: 0}, 'slow', function() {
      //       $('.intro-quote').css('color', 'black');
      //       $('#header1 hr').css('border-top', 'black 2px solid');
      //       $('#header1 p').css('color', 'black');
      //       $('#header1 a').css('color', 'black').css('border-color', 'black');
      //       $(this)
      //           .css('background-image', "url('assets/img/visuels/foule-filtre.png')")
      //           .animate({opacity: 1});

      //       });
      //       // $('#header1').stop().css('background-image', "url('assets/img/visuels/foule-filtre.png')");
      //       // $('#header1').stop().fadeIn();

      //       // $('#header2').fadeIn();
      //   },10000);



      // Collapse Manifeste

      // $(function() {
      //   $('div.expandCollapseContent').hide();
      //   $('#placeHolder').hide();
      //   $('.expandCollapse').hover(function() {
      //     var classe = '#' + this.id + 'Collapse';
      //     if ($('#placeHolder').is(':visible') ) {
      //       $('#placeHolder').slideUp(500);
      //     };
      //     if ($('#placeHolder').text() !== $(classe).text()){
      //       $('#placeHolder').slideUp(500, function() {
      //         $('#placeHolder').html($(classe).html());
      //         $('#placeHolder').slideDown(500);
      //       });
      //     }else if (!$('#placeHolder').is(':visible')) {
      //       $('#placeHolder').slideDown(500);
      //     };
      //   });
      // });

      $(document).bind("scroll.myScroll", function(){
          if ($(document).scrollTop() >= $('#chiffres').offset().top - 100) {
            $('.timer').countTo({onComplete: function () {
              if (jQuery(this).hasClass("percent")) {
                jQuery(this).append("%");
              };
            }});
            $(document).unbind('.myScroll');
          }
      });






      $('.caption-content').hide();
      $('.item').hover(function() {
        jQuery(this).find($('.caption-title')).fadeToggle();
        jQuery(this).find($('.caption-img')).fadeToggle();
        jQuery(this).find($('.caption-content')).fadeToggle(); } );

      $('#watch-video').hide();
      $('.scroll-down').hover(function() {
        $('#play').stop().fadeToggle(200);
        $('#watch-video').stop().fadeToggle(2000);
      },
        function() {

        $('#watch-video').stop().fadeToggle(200);
        $('#play').stop().fadeToggle(2000);
         } );



    });



    // Magnific Popup jQuery Lightbox Gallery Settings
    $('.gallery-link').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        },
        image: {
            titleSrc: 'title'
        }
    });

    // Formstone Wallpaper - Video Background Settings
    $("header.video").wallpaper({
        source: {
            poster: "assets/img/bg-mobile-fallback.jpg",
            mp4: "assets/mp4/camera.mp4"
        }
    });

    // Scrollspy: Highlights the navigation menu items while scrolling.
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })

    // Portfolio Filtering Scripts & Hover Effect
    var filterList = {
        init: function() {

            // MixItUp plugin
            // http://mixitup.io
            $('#portfoliolist').mixitup({
                targetSelector: '.portfolio',
                filterSelector: '.filter',
                effects: ['fade'],
                easing: 'snap',
                // call the hover effect
                onMixEnd: filterList.hoverEffect()
            });

        },

        hoverEffect: function() {

            // Simple parallax effect
            $('#portfoliolist .portfolio').hover(
                function() {
                    $(this).find('.caption').stop().animate({
                        bottom: 0
                    }, 200, 'easeOutQuad');
                    $(this).find('img').stop().animate({
                        width: '120%'
                    }, 300, 'easeOutQuad');
                },
                function() {
                    $(this).find('.caption').stop().animate({
                        bottom: -75
                    }, 200, 'easeInQuad');
                    $(this).find('img').stop().animate({
                        width: '100%'
                    }, 300, 'easeOutQuad');
                }
            );

        }

    };

    filterList.init();

})(jQuery); // End of use strict

// Load WOW.js on non-touch devices
var isPhoneDevice = "ontouchstart" in document.documentElement;
$(document).ready(function() {
    if (isPhoneDevice) {
        //mobile
    } else {
        //desktop
        // Initialize WOW.js
        wow = new WOW({
            offset: 50
        })
        wow.init();
    }
});

// Analytics Tracking - DEMO ONLY!

(function(i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function() {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o),
        m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-38417733-23', 'auto');
ga('send', 'pageview');
