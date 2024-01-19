$(document).ready(function ($) {
  'use strict';


  /* ---------------------------------------------
      dropdown submenu 
       --------------------------------------------- */
  $('.dropdown-menu a.dropdown-toggle').on('hover', function (e) {
    if (!$(this).next().hasClass('show')) {
      $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
    }
    var $subMenu = $(this).next(".dropdown-menu");
    $subMenu.toggleClass('show');

    $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function (e) {
      $('.dropdown-submenu .show').removeClass("show");
    });

    return false;
  });


  /* ---------------------------------------------
 Search block
  --------------------------------------------- */

  $('a[href="#search"]').on('click', function (event) {
    event.preventDefault();
    $('#search').addClass('open');
    $('#search > form > input[type="search"]').focus();
  });

  $('#search button.close').on('click', function (event) {
    event.preventDefault();
    $('#search').removeClass('open');

  });


  $('#search, #search button.close').on('click keyup', function (event) {
    if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
      $(this).removeClass('open');
    }
  });


  //Do not include! This prevents the form from submitting for DEMO purposes only!
  $('#search form').submit(function (event) {
    event.preventDefault();
    return false;
  })


  /* ---------------------------------------------
sidebar navigation
  --------------------------------------------- */

$(document).on('click','.js-menu_toggle.closed',function(e){
	e.preventDefault(); $('.list_load, .list_item').stop();
	$(this).removeClass('closed').addClass('opened');

	$('.side_menu').addClass('open_sidemenu');

	var count = $('.list_item').length;
	$('.list_load').slideDown( (count*.6)*100 );
	$('.list_item').each(function(i){
		var thisLI = $(this);
    var	timeOut = 100*i;
		setTimeout(function(){
			thisLI.css({
				'opacity':'1',
				'margin-left':'0'
			});
		},100*i);
	});
});

$(document).on('click','.js-menu_toggle.opened',function(e){
	e.preventDefault(); $('.list_load, .list_item').stop();
	$(this).removeClass('opened').addClass('closed');

	$('.side_menu').removeClass('open_sidemenu')

	var count = $('.list_item').length;
	$('.list_item').css({
		'opacity':'0',
		'margin-left':'-20px'
	});
	$('.list_load').slideUp(300);
});

  /* ---------------------------------------------
   Accordion
  --------------------------------------------- */

  $(".collapse.in").each(function () {
    $(this).siblings(".panel-heading").find(".icon-accordion").addClass("fas fa-angle-down").removeClass("arrow_triangle-right_alt2");
  });

  $(".collapse").on('show.bs.collapse', function () {
    $(this).parent().find(".icon-accordion").removeClass("fas fa-angle-up").addClass("fas fa-angle-down");
  }).on('hide.bs.collapse', function () {
    $(this).parent().find(".icon-accordion").removeClass("fas fa-angle-down").addClass("fas fa-angle-up");
  });


  /* ---------------------------------------------
      Sticky header
      --------------------------------------------- */
  $(window).on('scroll', function () {
    var scroll_top = $(window).scrollTop();

    if (scroll_top > 40) {
      $('.navbar').addClass('sticky');

    }
    else {
      $('.navbar').removeClass('sticky');
    }

  });




  /*--------------------
  Slick  JS
  ----------------------*/

  $('.text-block-slider').slick({
    dots: true,
    padding: 0,
    infinite: false,
    slidesPerRow: 1,
    rows: 1,
    arrows: false,
    autoplay: true,
    centerMode: true,
    slidesToShow: 1,
    fade: true,
    cssEase: 'linear',
    slidesToScroll: 1,

  });


  $('.testimonial_block').slick({
    dots: false,
    padding: 0,
    slidesPerRow: 3,
    rows: 1,
    arrows: false,
    centerMode: true,
    margin: 20,
    slidesToShow: 3.21,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll:2,
          infinite: true,

        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]

  });



  $('.testimonial_block_3').slick({
    dots: false,
    padding: 0,
    slidesPerRow: 1,
    rows: 1,
    arrows: true,
    prevArrow: "<button type='button' class='slick-prev'><i class='uil uil-angle-left'></i></button>",
    nextArrow: "<button type='button' class='slick-next'><i class='uil uil-angle-right'></i></button>",
    centerMode: true,
    margin: 20,
    slidesToShow: 1,
    

  });
  $('.testimonial_block_4').slick({
    dots: true,
    padding: 0,
    slidesPerRow:2,
    rows: 1,
    arrows: false,
    centerMode: false,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll:2,
          infinite: true,

        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]

  });

  $('.testimonial_block_5').slick({
    dots: false,
    padding: 0,
    slidesPerRow:1,
    rows: 1,
    autoplay:true,
    arrows: false,
    centerMode: false,
    slidesToShow: 1,
    slidesToScroll:1,

  });

  $('.testimonial_block_6').slick({
    dots: false,
    padding: 0,
    slidesPerRow:1,
    rows: 1,
    autoplay:true,
    arrows: true,
    prevArrow: "<button type='button' class='slick-prev'><i class='uil uil-angle-left'></i></button>",
    nextArrow: "<button type='button' class='slick-next'><i class='uil uil-angle-right'></i></button>",
    slidesToShow: 1,
    slidesToScroll:1,

  });

  $('.blog-slider').slick({
    dots: true,
    padding: 0,
    slidesPerRow: 3,
    rows: 1,
    arrows: false,
    centerMode: true,
    margin: 20,
    slidesToShow:3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll:2,
          infinite: true,

        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]

    
  }); 

  $('.blog_slider_2').slick({
    dots: false,
    padding: 0,
    slidesPerRow: 2,
    rows: 1,
    arrows: true,
    prevArrow: "<button type='button' class='slick-prev'><i class='uil uil-angle-left'></i></button>",
    nextArrow: "<button type='button' class='slick-next'><i class='uil uil-angle-right'></i></button>",
    centerMode: true,
    margin: 20,
    slidesToShow:2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll:2,
          infinite: true,

        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }); 

  
  $('.blog_slider_3').slick({
    dots: true,
    padding: 0,
    slidesPerRow: 3,
    rows: 1,
    arrows: false,
    margin: 20,
    slidesToShow:3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll:1,
          infinite: true,

        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }); 

  $('.features_slider').slick({
    dots: false,
    padding: 0,
    slidesPerRow: 5,
    rows: 1,
    arrows: false,
    centerMode: true,
    margin: 20,
    slidesToShow:5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll:3,
          infinite: true,

        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]

  });

  $('.client_block').slick({
    dots: false,
    padding: 0,
    slidesPerRow: 6,
    rows: 1,
    arrows: false,
    centerMode: true,
    margin: 20,
    slidesToShow:6,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll:3,
          infinite: true,

        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll:2
        }
      }
    ]

  });

  $('.price-slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    margin: 15,
    padding: 0,
    slidesToShow: 2,
    autoplaySpeed: 3000,
    slidesToScroll: 2,
    centerMode: true,
    prevArrow: "<button type='button' class='slick-prev'><img src='assets/images/back.svg'></button>",
    nextArrow: "<button type='button' class='slick-next'><img src='assets/images/next_blog.svg'></button>",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,

        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.slider-product').slick({
    dots: false,
    padding: 0,
    slidesPerRow:2,
    rows: 1,
    margin:20,
    autoplay:true,
    arrows: true,
    prevArrow: "<button type='button' class='slick-prev'><i class='uil uil-angle-left'></i></button>",
    nextArrow: "<button type='button' class='slick-next'><i class='uil uil-angle-right'></i></button>",
    slidesToShow: 2,
    slidesToScroll:2,

  });
  $('.portfolio-slider').slick({
    dots: false,
    padding: 0,
    slidesPerRow:2,
    rows: 1,
    margin:20,
    autoplay:true,
    arrows: true,
    prevArrow: "<button type='button' class='slick-prev'><i class='uil uil-angle-left'></i></button>",
    nextArrow: "<button type='button' class='slick-next'><i class='uil uil-angle-right'></i></button>",
    slidesToShow: 2,
    slidesToScroll:2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,

        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]

  });

  $('.portfolio-slider-1').slick({
    dots: false,
    padding: 0,
    slidesPerRow:1,
    rows: 1,
    margin:20,
    autoplay:true,
    arrows: true,
    prevArrow: "<button type='button' class='slick-prev'><i class='uil uil-angle-left'></i></button>",
    nextArrow: "<button type='button' class='slick-next'><i class='uil uil-angle-right'></i></button>",
    slidesToShow: 1,
    slidesToScroll:1,

  });

  $('.product-slide').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    fade: false,
    asNavFor: '.slider-nav',
  });
 
  $('.slider-nav').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.product-slide',
    focusOnSelect: true
  });

 $('.product-slide-2').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    fade: false,
    asNavFor: '.slider-nav-2',
  });
 
  $('.slider-nav-2').slick({
    slidesToShow: 4,
    arrows: true,
    prevArrow: "<button type='button' class='slick-prev'><i class='uil uil-angle-up'></i></button>",
    nextArrow: "<button type='button' class='slick-next'><i class='uil uil-angle-down'></i></button>",
    vertical:true,
    slidesToScroll: 1,
    asNavFor: '.product-slide-2',
    focusOnSelect: true
  });
  $('.slider-nav .slick-slide').removeClass('slick-active');

  $('.slider-nav .slick-slide').eq(0).addClass('slick-active');
 
  // On before slide change match active thumbnail to current slide
  $('.product-slide').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    var mySlideNumber = nextSlide;
    $('.slider-nav.slick-slide').removeClass('slick-active');
    $('.slider-nav .slick-slide').eq(mySlideNumber).addClass('slick-active');
 });

  /* ---------------------------------------------
   circle progres bar
   --------------------------------------------- */ 


  $(".circle_progress_bar .progress-bar").loading();



  /*-------------------------------------------------

  filter block
  --------------------------*/

  $(".filter-button").click(function(){
    var value = $(this).attr('data-filter');
     
    if(value == "all")
    {
      $('.filter').fadeIn('2000');
    }
    else
    {
      $(".filter").not('.' + value).fadeOut('3000');
      $('.filter').filter('.' + value).fadeIn('3000');
     
    }
    $(".filter-button").removeClass("active"); 
    $(this).addClass("active");
});

 


  /* ---------------------------------------------
   Back top page scroll up
   --------------------------------------------- */


  $.scrollUp({
    scrollText: '<i class=" uil uil-arrow-up"></i>',
    easingType: 'linear',
    scrollSpeed: 900,
    animation: 'fade'
  });

 
  
  /* ---------------------------------------------
fullpage section 
   --------------------------------------------- */

  $('#fullpage').fullpage({
		//options here
     navigation: true,
    navigationPosition: 'right' 
	});
 

  
    /*--------------------
 MAGNIFIC POPUP IMAGE  JS
 ----------------------*/
$('.modal-image').magnificPopup({
  type: 'image',
  removalDelay:500,
  mainClass: 'mfp-fade',
  gallery: {
      enabled: true
  },
  zoom: {
      enabled: true,

      duration: 300,
      easing: 'ease-in-out',

      opener: function (openerElement) {

          return openerElement.is('img') ? openerElement : openerElement.find('img');
      }
  }
}); 
  /* ---------------------------------------------
   Smooth scroll
   --------------------------------------------- */

  $('a.section-scroll[href*="#"]:not([href="#"])').on('click', function (event) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') ||
      location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

      if (target.length) {
   // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 750);
        return false;
      }
    }

  });

/*----------------------------------------------------*/
/*  VIDEO POP PUP
/*----------------------------------------------------*/

$('.video-modal').magnificPopup({
  type: 'iframe',

  iframe: {
    patterns: {
      youtube: {

        index: 'youtube.com',
        src: 'https://www.youtube.com/embed/7e90gBu4pas'

      }
    }
  }
});

  /*----------------------------------------
   Newsletter Subscribe
   --------------------------------------*/

  $(".subscribe-mail").ajaxChimp({
    callback: mailchimpCallRep,
    url: "mailchimp-post-url" //Replace this with your own mailchimp post URL. Just paste the url inside "".
  });

  function mailchimpCallRep(resp) {
    if (resp.result === "success") {
      $(".sucess-message").html(resp.msg).fadeIn(1000);
      $(".error-message").fadeOut(500);
    } else if (resp.result === "error") {
      $(".error-message").html(resp.msg).fadeIn(1000);
    }
  }
 
/* ---------------------------------------------
        Panel Menu
  --------------------------------------------- */
    
     $(window).on('load', function () {

      $(".menu-btn, .panel-overlay, .panel li a").on('click', function() {
        $(".menu-btn, .panel-overlay, .panel").toggleClass("active");
     
        if ($(".panel-overlay").hasClass("active")) {
          $(".panel-overlay").fadeIn();
        } else {
          $(".panel-overlay").fadeOut();
        }
      }); 
      
    });
    
    
    $(window).on("load resize", function() {
      var menuHeightOffset = $(".panel").find("ul").height() /2;
    
      $(".panel").find("ul").css({
        "margin-top": -menuHeightOffset
      });
    });


   

   /*----------------------------------------
  Accordion with icons
   --------------------------------------*/
   
 
   var accordion_id=$('.accordion-1').attr('id');
    $(".collapse.show").each(function(){
  
      $(this).prev("#"+accordion_id+" .card-header").find(".uil").addClass("uil-angle-up").removeClass("uil-angle-down");
    });
   
    $("#"+accordion_id+" .collapse").on('show.bs.collapse', function(){
      $(this).prev("#"+accordion_id+" .card-header").find(".uil").removeClass("uil-angle-down").addClass("uil-angle-up");

    }).on('hide.bs.collapse', function(){
      $(this).prev("#"+accordion_id+" .card-header").find(".uil").removeClass("uil-angle-up").addClass("uil-angle-down");
    });
 
   /*----------------------------------------
  pricing table style 2
   --------------------------------------*/
 
      checkScrolling($('.cd-pricing-body'));
      $(window).on('resize', function() {
          window.requestAnimationFrame(function() {
              checkScrolling($('.cd-pricing-body'))
          });
      });
      $('.cd-pricing-body').on('scroll', function() {
          var selected = $(this);
          window.requestAnimationFrame(function() {
              checkScrolling(selected)
          });
      });
  
      function checkScrolling(tables) {
          tables.each(function() {
              var table = $(this),
                  totalTableWidth = parseInt(table.children('.cd-pricing-features').width()),
                  tableViewport = parseInt(table.width());
              if (table.scrollLeft() >= totalTableWidth - tableViewport - 1) {
                  table.parent('div').addClass('is-ended');
              } else {
                  table.parent('div').removeClass('is-ended');
              }
          });
      }
      bouncy_filter($('.pricing-table-2'));
  
      function bouncy_filter(container) {
          container.each(function() {
              var pricing_table = $(this);
              var filter_list_container = pricing_table.children('.pricing-switcher'),
                  filter_radios = filter_list_container.find('input[type="radio"]'),
                  pricing_table_wrapper = pricing_table.find('.pricing-wrapper');
              var table_elements = {};
              filter_radios.each(function() {
                  var filter_type = $(this).val();
                  table_elements[filter_type] = pricing_table_wrapper.find('div[data-type="' + filter_type + '"]');
              });
              filter_radios.on('change', function(event) {
                  event.preventDefault();
                  var selected_filter = $(event.target).val();
                  show_selected_items(table_elements[selected_filter]);
                  if (!Modernizr.cssanimations) {
                      hide_not_selected_items(table_elements, selected_filter);
                      pricing_table_wrapper.removeClass('is-switched');
                  } else {
                      pricing_table_wrapper.addClass('is-switched').eq(0).one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() {
                          hide_not_selected_items(table_elements, selected_filter);
                          pricing_table_wrapper.removeClass('is-switched');
                          if (pricing_table.find('.pricing-table-list').hasClass('bounce-invert')) pricing_table_wrapper.toggleClass('reverse-animation');
                      });
                  }
              });
          });
      }
  
      function show_selected_items(selected_elements) {
          selected_elements.addClass('is-selected');
      }
  
      function hide_not_selected_items(table_containers, filter) {
          $.each(table_containers, function(key, value) {
              if (key != filter) {
                  $(this).removeClass('is-visible is-selected').addClass('is-hidden');
              } else {
                  $(this).addClass('is-visible').removeClass('is-hidden is-selected');
              }
          });
      }
 


});