(function ($) {
	"use strict";

    jQuery(document).ready(function($){

     $('select').niceSelect();
         // preloader
		$(window).on("load", function (){
			$('#loading').fadeOut(500);
		});
    
        // hero-slider
        $(".hero-area").owlCarousel({
            items:1,
            loop:true,
            autoplay:false,
        }); 

    // feture-slider
    $(".feture-slider").owlCarousel({
        items:1,
        dots:true,
        loop:true, 
        autoplay:true,
    });

    // testimonial-slider  
    $(".testimonial-slider").owlCarousel({
        items:1,
        loop:true, 
        autoplay:false,
        nav:true,
        navText:['<i class="fal fa-long-arrow-left"></i>','<i class="fal fa-long-arrow-right"></i>']
    }); 
    $(".main-testimonial-sliders").owlCarousel({
        items:1,
        loop:true, 
        autoplay:false,
        dots:true
    });
    // testimonial-slider 
    $(".blog-slider").owlCarousel({
        items:3,
        loop:true, 
        autoplay:false, 
        dots:true,
        margin:30, 
        responsive : { 
            0 : {
                items:1,
                dots:true,
            }, 
            560 : {
                items:2,
                dots:true,
            }, 
            768 : {
                items:2,
                dots:true, 
            }, 
            992 : {
                items:3,
                dots:true,
            }

        }
    });

  $(".testimonial-slider-FOUR").owlCarousel({
          items:3,
          loop:true, 
          autoplay:false, 
          dots:true,
          margin:30, 
          responsive : { 
              0 : {
                  items:1,
                  dots:true,
              }, 
              560 : {
                  items:2,
                  dots:true,
              }, 
              768 : {
                  items:2,
                  dots:true, 
              }, 
              992 : {
                  items:3,
                  dots:true,
              }

          }
      });

    // aos animation js
    AOS.init();
 /*--------------------------------------
  mixitup Active
----------------------------------------*/
var mixer = mixitup('.portfolio-item',{
  animation:{
    effectsOut:'fade translateX(-100%)',
  }
});
    // magnific poup
    $('.popup-btn').magnificPopup({
        type: 'image' 
      });
    $('.video-play-BTN').magnificPopup({
        type: 'iframe',
         
      });
        
        // responsive menu
        $('#main-nav').hcMobileNav();  
   
      





        

    });
 
}(jQuery));	