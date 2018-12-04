

$(document).ready(function() {
  $("#button").click(function(e) {
    e.stopPropagation();
    $("#triangle-down, #triangle-up").addClass("usenand");
    $('content').addClass('krassInefade');
    $("#triangle-up, #triangle-down").delay(1500).fadeOut();
    $("#title").fadeOut(500);
/*    $("#button").addClass("toMenu");
    $("#button").text('Go Back to Login');*/
/*    setTimeout(function() {
      $("#button").attr("id", "menu");
    }, 1);*/
  });

$('.footable').footable({
  calculateWidthOverride: function() {
    return { width: $(window).width() };
  }
}); 

// See:
// http://www.sitepoint.com/responsive-data-tables-comprehensive-list-solutions


//trigger next modal
$("#signin").on( "click", function() {
        $('#myModal2').modal('show');  
});
//trigger next modal
$("#signin2").on( "click", function() {
        $('#myModal3').modal('show');  
});
//trigger next modal
$("#signin3").on( "click", function() {
        $('#myModal4').modal('show');  
});
//trigger next modal
$("#signin4").on( "click", function() {
        $('#myModal5').modal('show');  
});

//trigger next modal
$("#clearr").on( "click", function() {
        $('.modal').modal('hide');  
});

$('.editr').click(function () {
    $('.formprof').removeClass("blur");
  });


$('.blur input').focus(function(){
  $('.blur input').blur();
});


/*      $(".search-btn").click(function(e) {
          e.stopPropagation();
        });
*/
        $(".reqform, .modal-header a, .modal-footer a, .shop__item .tool-box a.reqform2").click(function(e) {
          e.stopPropagation();
          $('.soluted').toggleClass('showluted'); 
        });
/*
        $(" .modal-header a, .modal-footer a").click(function() {
          $('.soluted2').toggleClass('showluted2'); 
        });*/
  /*      $(".modal-header a, .modal-footer a").click(function() {
          $('.soluted').toggleClass('showluted'); 
        });*/

/*        $(".risto.showtrigd").on('hover', function (e) {
            alert();
          $(this).removeClass('showtrigd');
        });*/


$('.collapse').collapse();

  $("#menuClose, #menuContent a").click(function() {
    $("#menu").removeClass("menuTransition");
    $("#menuContent").fadeOut(300);
    $("#menu").text('+');
    $("#menu.toMenu").css('transition', '.5s ease-in-out');
  });

  $('a').click(function() {
    $('html, body').delay(500).animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 1000);
    return false;
  });

});

$(document).on("click", "#menu", function() {
  $("#menu").addClass("menuTransition");
  $("#menuContent").delay(500).fadeIn(1);
  $("#menu").text(' ');
});

(function ($) {
  // USE STRICT
  "use strict";
  
  var js_addcart = $('.js-addcart');
  if (js_addcart) {
    $('.js-addcart').each(function () {
      var nameProduct = $(this).parent().parent().parent().find('.js-name').html();
      $(this).on('click', function (e) {
        e.preventDefault();
        swal(nameProduct, "is added to cart !", "success");
      });
    });
  }


})(jQuery);
(function ($) {
  // USE STRICT
  "use strict";
  $(".animsition").animsition({
    inClass: 'fade-in',
    outClass: 'fade-out',
    inDuration: 900,
    outDuration: 900,
    linkElement: 'a:not([target="_blank"]):not([href^="#"]):not([class^="chosen-single"])',
    loading: true,
    loadingParentElement: 'html',
    loadingClass: 'page-loader',
    loadingInner: '<div class="page-loader__inner"></div>',
    timeout: false,
    timeoutCountdown: 5000,
    onLoadEvent: true,
    browser: ['animation-duration', '-webkit-animation-duration'],
    overlay: false,
    overlayClass: 'animsition-overlay-slide',
    overlayParentElement: 'html',
    transition: function (url) {
      window.location.href = url;
    }
  });


})(jQuery);
(function ($) {
  // USE STRICT
  "use strict";

  try {
    if ($('.countdown100') !== null) {
      $('.countdown100').each(function () {
        if ($(this).data('year') != null) {
          var year = Number($(this).data('year'));
        }
        else { var year = 0; }

        if ($(this).data('month') != null) {
          var month = Number($(this).data('month'));
        }
        else { var month = 0; }

        if ($(this).data('date') != null) {
          var date = Number($(this).data('date'));
        }
        else { var date = 0; }

        if ($(this).data('hours') != null) {
          var hours = Number($(this).data('hours'));
        }
        else { var hours = 0 }

        if ($(this).data('minutes') != null) {
          var minutes = Number($(this).data('minutes'));
        }
        else { var minutes = 0; }

        if ($(this).data('seconds') != null) {
          var seconds = Number($(this).data('seconds'));
        }
        else { var seconds = 0; }

        if ($(this).data('timezone') != null && $(this).data('timezone') != "auto") {
          var timeZ = $(this).data('timezone');
        }
        else { var timeZ = ""; }


        $(this).countdown100({
          /*Set Endtime here*/
          /*Endtime must be > current time*/
          endtimeYear: year,
          endtimeMonth: month,
          endtimeDate: date,
          endtimeHours: hours,
          endtimeMinutes: minutes,
          endtimeSeconds: seconds,
          timeZone: timeZ
          // ex:  timeZone: "America/New_York"
          //go to " http://momentjs.com/timezone/ " to get timezone
        });
      });
    }


  } catch (er) { console.log(er); }

})(jQuery);
(function ($) {
  // USE STRICT
  "use strict";
  try {
    var js_counter = $('.js-counter-up');

    if(js_counter) {
      $('.js-counter-up').counterUp();
    }
      

  } catch (error) {
    console.log(error);
  }



})(jQuery);
(function ($) {
  // USE STRICT
  "use strict";
  try {
    function initFlowSlider() {
      $('.flipster-slider').each(function (index) {

        var that = $(this);

        var sliderIndex = 'flipster-slider-unique-id-' + index;

        that.addClass(sliderIndex + ' initialized').attr('id', sliderIndex);

        var VarKeyboardControl = parseInt(that.attr('data-keyboard'), 10);
        var VarMousewheel = parseInt(that.attr('data-mousewheel'), 10);
        var VarNavButtons = parseInt(that.attr('data-controls'), 10);

        that.flipster({
          style: 'carousel',
          enableKeyboard: VarKeyboardControl || false,
          enableMousewheel: VarMousewheel || false,
          enableNavButtons: VarNavButtons || false
        })
      })
    }


    initFlowSlider();
  } catch (error) {
    console.log(error);
  }



})(jQuery);
(function ($) {
    'use strict';

    /*[ Isotope ]
    ===========================================================*/

    try {

        var $isotopeWrapper = $('.js-isotope-wrapper');

        if ($isotopeWrapper) {
            $isotopeWrapper.each(function () {
                var that = $(this);
                var isotopeFilter = that.find('.isotope-filter');
                var isotopeContent = that.find('.isotope-content');

                // init Isotope
                $(window).on('load', function () {
                    var $iso = isotopeContent.isotope({
                        itemSelector: '.isotope-item',
                        percentPosition: true,
                        animationEngine: 'best-available',
                        masonry: {
                            columnWidth: '.isotope-item-sizer',
                            horizontalOrder: true
                        }
                    });

                });

                isotopeFilter.on('click', 'li span', function () {
                    isotopeContent.isotope({ filter: $(this).attr('data-filter') });
                });

                isotopeFilter.on('click', 'li', function () {
                    isotopeFilter.find('.active').removeClass('active');
                    $(this).addClass('active');
                });
            });
        }


    } catch (err) {
        console.log(err)
    }
})(jQuery);
(function ($) {
  // USE STRICT
  "use strict";

  var isotopeContent = $('#home-creative-grid');

  
  // init Isotope
  var home_cre_intro = $('#home-creative__intro');
  var home_cre_contact = $('#home-creative__contact');
  var item_height = $('#home-creative-grid .grid-sizer > img').height();
  home_cre_intro.css('height', item_height);
  home_cre_contact.css('height', item_height);

  $(window).on('load', function () {

    var $iso = isotopeContent.isotope({
      itemSelector: '.grid-item',
      percentPosition: true,
      animationEngine: 'best-available',
      masonry: {
        columnWidth: '.grid-sizer',
        horizontalOrder: true
      }
    });


  });
  $(window).on('resize', function () {
    var item_height = $('#home-creative-grid .grid-sizer > img').height();
    home_cre_intro.css('height', item_height);
    home_cre_contact.css('height', item_height);
  });


  /*ISOTOPE*/
  var $topeContainer = $('#isotope-grid');
  var $filter = $('#filter');

  // filter items on button click
  $filter.each(function () {
    $filter.on('click', 'li span', function () {
      var filterValue = $(this).attr('data-filter');
      $topeContainer.isotope({
        filter: filterValue
      });
    });
    var $buttonGroup = $('#filter');
    $buttonGroup.on('click', 'li', function () {
      $buttonGroup.find('.active').removeClass('active');
      $(this).addClass('active');
    });
  });

  // init Isotope
  $(window).on('load', function () {
    var $grid = $topeContainer.each(function () {
      $(this).isotope({
        itemSelector: '.item',
        percentPosition: true,
        animationEngine: 'best-available',
        filter:'.new',
        masonry: {
          columnWidth: '.item'
        }
      });
    });
  });

})(jQuery);
(function ($) {
  'use strict';

  /*[ Revolution ]
  ===========================================================*/

  try {
    var revControl = $('.js-rev');
    if (revControl[0]) {
      revControl.each(function () {
        var that = $(this);
        var option = {
          layout: 'auto',
          arrows: true,
          stylearrow: 'uranus',
          hideonleavearrow: true,
          bullets: true,
          stylebullet: 'hermes',
          hideonleavebullet: false,
          hoffbullet: 0,
          voffbullet: 20,
          spacebullet: 5,
          delay: 5000,
          height: 500,
          noprogressbar: "on",
          thumbnails: false,
          fulloffset: '0px'
        };

        for (var k in option) {
          if (option.hasOwnProperty(k)) {
            if (that.attr('data-rev-' + k) != null) {
              option[k] = that.data('rev-' + k);
            }
          }
        }

        var wW = $(window).width();
        var thumb_option = {
          direction: "vertical",
          valign: "top",
          position: "outer-left",
          space: 10,
          padding: 25
        };


        if (wW < 992) {
          thumb_option = {
            direction: "horizontal",
            valign: "bottom",
            position: "inner-bottom",
            space: 5,
            padding: 10
          }
        }

        that.show().revolution({
          sliderLayout: option.layout,
          responsiveLevels: [1201, 1200, 992, 768, 576],
          visibilityLevels:[1201, 1200, 992, 768, 576],
          gridwidth: [1170, 930, 690, 510, 576],
          gridheight: [option.height, option.height, option.height, option.height],
          delay: option.delay,
          fullScreenOffsetContainer: 'header-mobile',
          fullScreenOffset: option.fulloffset,
          disableProgressBar: option.noprogressbar,
          navigation: {
            onHoverStop: "off",
            arrows: {
              enable: option.arrows,
              style: option.stylearrow,
              hide_onleave: option.hideonleavearrow
            },
            bullets: {
              enable: option.bullets,
              style: option.stylebullet,
              hide_onleave: option.hideonleavebullet,
              h_align: 'center',
              v_align: 'bottom',
              h_offset: option.hoffbullet,
              v_offset: option.voffbullet,
              space: option.spacebullet
            },
            thumbnails: {
              style: "gyges",
              enable: option.thumbnails,
              width: 197,
              height: 136,
              min_width: 140,
              wrapper_padding: thumb_option.padding,
              wrapper_color: "#fff",
              wrapper_opacity: "1",
              tmp: '<span class="tp-thumb-img-wrap"><span class="tp-thumb-image"></span></span>',
              visibleAmount: 7,
              hide_onmobile: true,
              hide_onleave: false,
              direction: thumb_option.direction,
              position: thumb_option.position,
              span: true,
              space: thumb_option.space,
              h_align: "left",
              v_align: thumb_option.valign,
              h_offset: 0,
              v_offset: 0
            }
          }
        });
      });
    }

  } catch (err) {
    console.log(err);
  }


})(jQuery);
(function ($) {
  // USE STRICT
  "use strict";
  try {
    var scroll = $('.fullscreen-section');
    if(scroll[0]) {
      $.scrollify({
        section:".fullscreen-section",
        sectionName:false,
        easing: "linear",
        scrollbars: false,
        scrollSpeed: 500,
        interstitialSection:".header--scrollify,.footer"
      });
    }
    

  } catch (error) {
    console.log(error);
  }
  

  
})(jQuery);
(function ($) {
  // USE STRICT
  "use strict";

  //-------------------------------------------------------
  // Config Slick
  //-------------------------------------------------------

  try {

    var slick_object = $('.js-slick-wrapper');

    slick_object.each(function () {
      var that = $(this);
      var slick_content = that.find('.js-slick-content');

      var arrow_left = that.find('.js-slick-arrow-left');
      var arrow_right = that.find('.js-slick-arrow-right');

      var option = {
        accessibility: true,
        adaptiveheight: false,
        autoplay: false,
        autoplayspeed: 6000,
        arrows: false,
        asnavfor: null,
        appendarrows: $(this),
        appenddots: $(this),
        prevarrow: '<i class="slick-prev"></i>',
        nextarrow: '<i class="slick-next"></i>',
        centermode: false,
        centerpadding: '50px',
        cssease: 'linear',
        dots: false,
        dotsclass: 'slick-dots',
        draggable: false,
        fade: false,
        speed: 5000,
        pauseonhover: false,
        slidetoscroll: 1,
        xl: 1,
        lg: this.xl,
        md: this.lg,
        sm: this.md,
        xs: this.sm,
        vertical: false,
        loop: true,
        thumb: false,
        focusonselect: false,
        swipe: false,
      };

      for (var k in option) {
        if (option.hasOwnProperty(k)) {
          if ($(this).attr('data-slick-' + k) != null) {
            option[k] = $(this).data('slick-' + k);
          }
        }
      }

      slick_content.on('init', function () {
        var $firstAnimatingElements = $('.slide__content .slide-item:first-child').find('[data-animation]');
        doAnimations($firstAnimatingElements);
        textfx();
      });

      if (option.thumb)
        var slickAPI = slick_content.slick({
          accessibility: option.accessibility,
          adaptiveHeight: option.adaptiveheight,
          autoplay: option.autoplay,
          autoplaySpeed: option.autoplayspeed,
          arrows: option.arrows,
          asNavFor: option.asnavfor,
          appendArrows: option.appendarrows,
          appendDots: option.appenddots,
          prevArrow: option.prevarrow,
          nextArrow: option.nextarrow,
          centerMode: option.centermode,
          centerPadding: option.centerpadding,
          cssease: option.cssease,
          dots: option.dots,
          dotsClass: option.dotsclass,
          draggable: option.draggable,
          pauseOnHover: option.pauseonhover,
          fade: option.fade,
          vertical: option.vertical,
          slidesToShow: option.xl,
          slidesToScroll: option.slidetoscroll,
          infinite: option.loop,
          swipeToSlide: option.swipe,
          focusOnSelect: option.focusonselect,
          customPaging: function (slick, index) {
            var portrait = $(slick.$slides[index]).data('thumb');
            return '<img src=" ' + portrait + ' "/><div class="bg-overlay"></div>';
          },

          responsive: [{
            breakpoint: 1201,
            settings: {
              slidesToShow: option.lg
            }
          },
          {
            breakpoint: 993,
            settings: {
              slidesToShow: option.md
            }
          },
          {
            breakpoint: 769,
            settings: {
              slidesToShow: option.sm
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: option.xs,
              fade: false
            }
          }
          ]
        });
      else
        var slickAPI = slick_content.slick({
          accessibility: option.accessibility,
          adaptiveHeight: option.adaptiveheight,
          autoplay: option.autoplay,
          autoplaySpeed: option.autoplayspeed,
          arrows: option.arrows,
          asNavFor: option.asnavfor,
          appendArrows: option.appendarrows,
          appendDots: option.appenddots,
          prevArrow: option.prevarrow,
          nextArrow: option.nextarrow,
          centerMode: option.centermode,
          centerPadding: option.centerpadding,
          cssease: option.cssease,
          dots: option.dots,
          dotsClass: option.dotsclass,
          draggable: option.draggable,
          pauseOnHover: option.pauseonhover,
          fade: option.fade,
          vertical: option.vertical,
          slidesToShow: option.xl,
          slidesToScroll: option.slidetoscroll,
          infinite: option.loop,
          swipeToSlide: option.swipe,
          focusOnSelect: option.focusonselect,
          responsive: [{
            breakpoint: 1201,
            settings: {
              slidesToShow: option.lg
            }
          },
          {
            breakpoint: 993,
            settings: {
              slidesToShow: option.md
            }
          },
          {
            breakpoint: 769,
            settings: {
              slidesToShow: option.sm
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: option.xs,
              fade: false
            }
          }
          ]
        });

      slickAPI.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
        var $animatingElements = slick_content.find('[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
        doAnimations($animatingElements);
        resetTextfx();
      });

      slickAPI.on('afterChange', function (e, slick, currentSlide) {
        var progress_wrap = slick_content.find('[data-slick-index="' + currentSlide + '"]').find('.js-special-progress');
        progress_wrap.each(function () {
          $(this).find('.js-progressbar-slick').progressbar({
            update: function (current_percentage, $this) {
              $this.find(".js-value").html(current_percentage);
            }
          });
        });

        var counter_wrap = slick_content.find('[data-slick-index="' + currentSlide + '"]').find('.js-counter-wrap');
        counter_wrap.each(function () {
          $(this).find('.js-counter').counterUp({
            delay: 0.2,
            time: 25
          });
        });

        textfx();
      })

      function doAnimations(elements) {
        var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        elements.each(function () {
          var $this = $(this);
          var $animationDelay = $this.data('animation-delay');
          var $animationType = 'animated ' + $this.data('animation');
          $this.css({
            'animation-delay': $animationDelay,
            '-webkit-animation-delay': $animationDelay
          });
          $this.addClass($animationType).one(animationEndEvents, function () {
            $this.removeClass($animationType);
          });
        });
      }

      function textfx() {
        $('.js-caption .letters').each(function () {
          $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
        });

        anime.timeline().add({
          targets: '.js-caption',
          opacity: [0, 1],
          duration: 5,
          easing: "easeOutExpo",
          delay: 0
        }).add({
          targets: '.js-caption .letter',
          translateY: ["1.1em", 0],
          translateX: ["0.55em", 0],
          translateZ: 0,
          rotateZ: [180, 0],
          duration: 500,
          easing: "easeOutExpo",
          delay: function (el, i) {
            return 60 * i;
          }
        });
      }

      function resetTextfx() {
        anime.timeline().add({
          targets: '.js-caption',
          opacity: 0,
          duration: 1,
          easing: "easeOutExpo"
        })
      }

      arrow_left.on('click', function () {
        slick_content.slick('slickPrev');
      });

      arrow_right.on('click', function () {
        slick_content.slick('slickNext');
      });
    });

  } catch (err) {
    console.log(err)
  }

})(jQuery);
(function ($) {
  // USE STRICT
  "use strict";

  new WOW().init();

})(jQuery);

try {

  var progressbarCircle = $('.js-progress-circle');
  progressbarCircle.each(function () {
    var that = $(this);
    var executed = false;

    var percentage = that.data("value");
    var color = that.data("color");
    var circle_wrap = that.find('.js-circle');
    var progress = percentage / 100;

    var empty_fill = '#f6f6f6';
    if($('body').hasClass("black")) empty_fill = "#111";

    that.find('.js-dot').css('background',color);

    var circle = circle_wrap.circleProgress({
      size: 174,
      thickness: 7,
      animation: {
        duration: 1600
      },
      fill: color,
      emptyFill: empty_fill,
      reverse: true
    });

    $(window).on('load', function () {
      that.waypoint(function () {
        if (!executed) {
          executed = true;
          circle = circle_wrap.circleProgress({
            value: progress
          });

          circle.on('circle-animation-progress', function (e, p, v) {
            var $this = $(this),
              instance = $this.data('circle-progress'),
              size = instance.size,
              thickness = instance.getThickness(),
              radius = size / 2 - thickness / 2,
              angle = -2 * v * Math.PI + instance.startAngle,
              x = radius * Math.cos(angle),
              y = radius * Math.sin(angle);

            $this.find('.dot').css({
              left: x + size / 2,
              top: y + size / 2
            });
          });
        }
      }, { offset: 'bottom-in-view' });
    })
  })

} catch (error) {
  console.log(error);
}

(function ($) {
  // USE STRICT
  "use strict";
  try {
    var videoPlayerHandle = $('.js-video-player');

    videoPlayerHandle.each(function () {
      var that = $(this);
      var videoPlayerBtn = that.find('.video__overlay');
      var videoPlayerContent = that.find('.video__content');

      // var imagesURLs = that.find('.video__cover').attr('src');
      // that.css('background-image', 'url(' + imagesURLs + ')');

      videoPlayerBtn.on('click', function (e) {
        videoPlayerContent.children('iframe')[0].src += "&autoplay=1";
        videoPlayerContent.css('opacity', 1);
        $(this).fadeOut('fast');
        e.preventDefault();

      })

    });


  } catch (error) {
    console.log(error);
  }

})(jQuery);
(function ($) {
  // USE STRICT
  "use strict";
  try {
    // Mini Cart
    $('.mini-cart-btn').on('click', function () {
      $('.mini-cart').slideToggle("500");
    });

    // Hamburger Menu
    $('.hamburger').on('click', function () {
      $(this).toggleClass('is-active');
      $('.navbar-mobile').slideToggle('500');
    });
    $('.navbar-mobile__list li.has-dropdown > a').on('click', function () {
      var dropdown = $(this).siblings('ul.navbar-mobile__dropdown');
      $(this).toggleClass('active');
      $(dropdown).slideToggle('500');
      return false;
    });

    // Sticky Header 
    $(window).on('scroll', function(){
      $(window).scrollTop() > 0 ? $('header.header-desktop').addClass('header--fixed animated slideInDown') : $('header.header-desktop').removeClass('header--fixed animated slideInDown');      
    });

    // Pull Header
    $('.navbar-pull-list li.has-dropdown > a').on('click', function () {
      var dropdown = $(this).siblings('ul.navbar-pull__dropdown');
      $(dropdown).slideToggle('500');
      return false;
    });

    // Right Pull Header
    $('.header-pull--right > .au-btn-menu-right').on('click', function (e) {
      e.stopPropagation();      
      $('.header-pull--right').toggleClass("show");
    });
    $('.header-pull--right .header-pull').on('click', function (e) {
      // e.stopPropagation();
    });
    $('body,html').on('click', function () {
      $('.header-pull--right').removeClass('show');
    });

  } catch (error) {
    console.log(error);
  }

})(jQuery);
(function ($) {
  // USE STRICT
  "use strict";

  // Load more
  try {
    var list_load = $('.js-list-load');
    if (list_load[0]) {
      list_load.each(function () {
        var that = $(this);
        that.find('.js-load-item').hide();
        var load_btn = that.find('.js-load-btn');
        load_btn.on('click', function (e) {
          $(this).text("Loading...").delay(1500).queue(function (next) {
            $(this).hide();
            that.find(".js-load-item").fadeToggle("slow", 'swing');
          });
          e.preventDefault();
        });
      })

    }
  } catch (error) {
    console.log(error);
  }
  // Scroll Bar
  try {
    var scroll_bar = $('.js-scroll-bar');
    if (scroll_bar[0]) {
      const ps = new PerfectScrollbar('.js-scroll-bar', {
        wheelSpeed: 0.4,
        wheelPropagation: true,
        minScrollbarLength: 20
      });
    }
  } catch (error) {
    console.log(error);
  }

  // Config fullscreen
  try {
    var max_height = $(window).height();
    $('.js-fullscreen').css('height', max_height);
    $(window).on('resize', function () {
      max_height = $(window).height();
      $('.js-fullscreen').css('height', max_height);
    });
  } catch (error) {
    console.log(error);
  }

  
})(jQuery);
(function ($) {
  'use strict';

  /*[ Parallax ]
  ===========================================================*/

  try {
    var bgParallax = $('.js-parallax-scroll');
    var posWindow = $(window).scrollTop();
    var hWindow = $(window).height();
    var x = 0;
    var y = 3;

    bgParallax.each(function () {
      var that = $(this);
      var posParallax = that.offset().top;
      var hParallax = that.outerHeight();
      var setPosParallax = function () {
        if ($(window).width() > 992) {
          if (bgParallax.outerHeight() < $(window).height()) {

            x = that.offset().top - $(window).scrollTop();

            $(that).css('background-position', 'center ' + (x / y) + 'px');
          }
          else {
            $(that).css('background-position', 'center', 'center');
          }
        } else {
          $(that).css('background-attachment', 'scroll');
        }
      };

      setPosParallax();

      $(window).on('resize', function () {
        setPosParallax();
      });

      $(window).on('scroll', function () {
        setPosParallax();
      });
    });
  } catch (err) {
    console.log(err);
  }

})(jQuery);
(function ($) {
  // USE STRICT
  "use strict";

  // Show Line
  try {
    var line = $('.js-line');

    if (line) {
      line.each(function () {
        var that = $(this);
        var executed = false;

        $(window).on('load', function () {
          that.waypoint(function () {
            if (!executed) {
              executed = true;
              that.addClass('line--show');
            }
          }, {
              offset: 'bottom-in-view'
            });
        })
      })
    }


  } catch (error) {
    console.log(err);
  }

})(jQuery);
(function ($) {
  // USE STRICT
  "use strict";
  try {
    $('.quantity').each(function () {
      var spinner = $(this),
        input = spinner.find('input[type="number"]'),
        btnUp = spinner.find('.quantity-up'),
        btnDown = spinner.find('.quantity-down'),
        min = input.attr('min'),
        max = input.attr('max');

      btnUp.on('click', function(){
        var oldValue = parseFloat(input.val());
        var newVal = oldValue + 1;
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

      btnDown.on('click', function(){
        var oldValue = parseFloat(input.val());
        if (oldValue <= min) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue - 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });


    });
  } catch (error) {
    console.log(error);
  }


})(jQuery);
(function ($) {
  // USE STRICT
  "use strict";

  try {
    var text_container = $(".js-text-trans");

    text_container.each(function () {
      var that = $(this);
      var bg = that.data("background");
      var text = that.find("span");
      text.css("background-image", "url('" + bg + "')");

      text.css("background-position", "center center");
    });
  } catch (error) {
    console.log(error);
  }

})(jQuery);









!function(e,t,a){t.footable={options:{delay:100,breakpoints:{phone:480,tablet:1024},parsers:{alpha:function(t){return e(t).data("value")||e.trim(e(t).text())},numeric:function(t){var a=e(t).data("value")||e(t).text().replace(/[^0-9.\-]/g,"");return a=parseFloat(a),isNaN(a)&&(a=0),a}},addRowToggle:!0,calculateWidthOverride:null,toggleSelector:" > tbody > tr:not(.footable-row-detail)",columnDataSelector:"> thead > tr:last-child > th, > thead > tr:last-child > td",detailSeparator:":",toggleHTMLElement:"<span />",createGroupedDetail:function(e){for(var t={_none:{name:null,data:[]}},a=0;a<e.length;a++){var i=e[a].group;null!==i?(i in t||(t[i]={name:e[a].groupName||e[a].group,data:[]}),t[i].data.push(e[a])):t._none.data.push(e[a])}return t},createDetail:function(t,a,i,o,n){var r=i(a);for(var l in r)if(0!==r[l].data.length){"_none"!==l&&t.append('<div class="'+n.detailInnerGroup+'">'+r[l].name+"</div>");for(var d=0;d<r[l].data.length;d++){var s=r[l].data[d].name?o:"";t.append(e("<div></div>").addClass(n.detailInnerRow).append(e("<div></div>").addClass(n.detailInnerName).append(r[l].data[d].name+s)).append(e("<div></div>").addClass(n.detailInnerValue).attr("data-bind-value",r[l].data[d].bindName).append(r[l].data[d].display)))}}},classes:{main:"footable",loading:"footable-loading",loaded:"footable-loaded",toggle:"footable-toggle",disabled:"footable-disabled",detail:"footable-row-detail",detailCell:"footable-row-detail-cell",detailInner:"footable-row-detail-inner",detailInnerRow:"footable-row-detail-row",detailInnerGroup:"footable-row-detail-group",detailInnerName:"footable-row-detail-name",detailInnerValue:"footable-row-detail-value",detailShow:"footable-detail-show"},triggers:{initialize:"footable_initialize",resize:"footable_resize",redraw:"footable_redraw",toggleRow:"footable_toggle_row",expandFirstRow:"footable_expand_first_row",expandAll:"footable_expand_all",collapseAll:"footable_collapse_all"},events:{alreadyInitialized:"footable_already_initialized",initializing:"footable_initializing",initialized:"footable_initialized",resizing:"footable_resizing",resized:"footable_resized",redrawn:"footable_redrawn",breakpoint:"footable_breakpoint",columnData:"footable_column_data",rowDetailUpdating:"footable_row_detail_updating",rowDetailUpdated:"footable_row_detail_updated",rowCollapsed:"footable_row_collapsed",rowExpanded:"footable_row_expanded",rowRemoved:"footable_row_removed",reset:"footable_reset"},debug:!1,log:null},version:{major:0,minor:5,toString:function(){return t.footable.version.major+"."+t.footable.version.minor},parse:function(e){var t=/(\d+)\.?(\d+)?\.?(\d+)?/.exec(e);return{major:parseInt(t[1],10)||0,minor:parseInt(t[2],10)||0,patch:parseInt(t[3],10)||0}}},plugins:{_validate:function(a){if(!e.isFunction(a))return!0===t.footable.options.debug&&console.error('Validation failed, expected type "function", received type "{0}".',typeof a),!1;var i=new a;return"string"!=typeof i.name?(!0===t.footable.options.debug&&console.error('Validation failed, plugin does not implement a string property called "name".',i),!1):e.isFunction(i.init)?(!0===t.footable.options.debug&&console.log('Validation succeeded for plugin "'+i.name+'".',i),!0):(!0===t.footable.options.debug&&console.error('Validation failed, plugin "'+i.name+'" does not implement a function called "init".',i),!1)},registered:[],register:function(a,i){t.footable.plugins._validate(a)&&(t.footable.plugins.registered.push(a),"object"==typeof i&&e.extend(!0,t.footable.options,i))},load:function(e){var a,i,o=[];for(i=0;i<t.footable.plugins.registered.length;i++)try{a=t.footable.plugins.registered[i],o.push(new a(e))}catch(e){!0===t.footable.options.debug&&console.error(e)}return o},init:function(e){for(var a=0;a<e.plugins.length;a++)try{e.plugins[a].init(e)}catch(e){!0===t.footable.options.debug&&console.error(e)}}}};var i=0;function o(){var e=this;e.id=null,e.busy=!1,e.start=function(t,a){e.busy||(e.stop(),e.id=setTimeout(function(){t(),e.id=null,e.busy=!1},a),e.busy=!0)},e.stop=function(){null!==e.id&&(clearTimeout(e.id),e.id=null,e.busy=!1)}}e.fn.footable=function(a){a=a||{};var n=e.extend(!0,{},t.footable.options,a);return this.each(function(){var a=new function(a,i,n){var r=this;r.id=n,r.table=a,r.options=i,r.breakpoints=[],r.breakpointNames="",r.columns={},r.plugins=t.footable.plugins.load(r);var l=r.options,d=l.classes,s=l.events,u=l.triggers,f=0;return r.timers={resize:new o,register:function(e){return r.timers[e]=new o,r.timers[e]}},r.init=function(){var a=e(t),i=e(r.table);if(t.footable.plugins.init(r),i.hasClass(d.loaded))r.raise(s.alreadyInitialized);else{r.raise(s.initializing),i.addClass(d.loading),i.find(l.columnDataSelector).each(function(){var e=r.getColumnData(this);r.columns[e.index]=e});for(var o in l.breakpoints)r.breakpoints.push({name:o,width:l.breakpoints[o]}),r.breakpointNames+=o+" ";r.breakpoints.sort(function(e,t){return e.width-t.width}),i.unbind(u.initialize).bind(u.initialize,function(){i.removeData("footable_info"),i.data("breakpoint",""),i.trigger(u.resize),i.removeClass(d.loading),i.addClass(d.loaded).addClass(d.main),r.raise(s.initialized)}).unbind(u.redraw).bind(u.redraw,function(){r.redraw()}).unbind(u.resize).bind(u.resize,function(){r.resize()}).unbind(u.expandFirstRow).bind(u.expandFirstRow,function(){i.find(l.toggleSelector).first().not("."+d.detailShow).trigger(u.toggleRow)}).unbind(u.expandAll).bind(u.expandAll,function(){i.find(l.toggleSelector).not("."+d.detailShow).trigger(u.toggleRow)}).unbind(u.collapseAll).bind(u.collapseAll,function(){i.find("."+d.detailShow).trigger(u.toggleRow)}),i.trigger(u.initialize),a.bind("resize.footable",function(){r.timers.resize.stop(),r.timers.resize.start(function(){r.raise(u.resize)},l.delay)})}},r.addRowToggle=function(){if(l.addRowToggle){var t=e(r.table),a=!1;t.find("span."+d.toggle).remove();for(var i in r.columns){var o=r.columns[i];if(o.toggle){a=!0;var n="> tbody > tr:not(."+d.detail+",."+d.disabled+") > td:nth-child("+(parseInt(o.index,10)+1)+"),> tbody > tr:not(."+d.detail+",."+d.disabled+") > th:nth-child("+(parseInt(o.index,10)+1)+")";return void t.find(n).not("."+d.detailCell).prepend(e(l.toggleHTMLElement).addClass(d.toggle))}}a||t.find("> tbody > tr:not(."+d.detail+",."+d.disabled+") > td:first-child").add("> tbody > tr:not(."+d.detail+",."+d.disabled+") > th:first-child").not("."+d.detailCell).prepend(e(l.toggleHTMLElement).addClass(d.toggle))}},r.setColumnClasses=function(){var t=e(r.table);for(var a in r.columns){var i=r.columns[a];if(null!==i.className){var o="",n=!0;e.each(i.matches,function(e,t){n||(o+=", "),o+="> tbody > tr:not(."+d.detail+") > td:nth-child("+(parseInt(t,10)+1)+")",n=!1}),t.find(o).not("."+d.detailCell).addClass(i.className)}}},r.bindToggleSelectors=function(){var t=e(r.table);r.hasAnyBreakpointColumn()&&(t.find(l.toggleSelector).unbind(u.toggleRow).bind(u.toggleRow,function(t){var a=e(this).is("tr")?e(this):e(this).parents("tr:first");r.toggleDetail(a)}),t.find(l.toggleSelector).unbind("click.footable").bind("click.footable",function(a){t.is(".breakpoint")&&e(a.target).is("td,th,."+d.toggle)&&e(this).trigger(u.toggleRow)}))},r.parse=function(e,t){return(l.parsers[t.type]||l.parsers.alpha)(e)},r.getColumnData=function(t){var a=e(t),i=a.data("hide"),o=a.index();i=i||"",i=jQuery.map(i.split(","),function(e){return jQuery.trim(e)});var n={index:o,hide:{},type:a.data("type")||"alpha",name:a.data("name")||e.trim(a.text()),ignore:a.data("ignore")||!1,toggle:a.data("toggle")||!1,className:a.data("class")||null,matches:[],names:{},group:a.data("group")||null,groupName:null,isEditable:a.data("editable")};if(null!==n.group){var d=e(r.table).find('> thead > tr.footable-group-row > th[data-group="'+n.group+'"], > thead > tr.footable-group-row > td[data-group="'+n.group+'"]').first();n.groupName=r.parse(d,{type:"alpha"})}var u=parseInt(a.prev().attr("colspan")||0,10);f+=u>1?u-1:0;var p=parseInt(a.attr("colspan")||0,10),c=n.index+f;if(p>1){var b=a.data("names");b=(b=b||"").split(",");for(var g=0;g<p;g++)n.matches.push(g+c),g<b.length&&(n.names[g+c]=b[g])}else n.matches.push(c);n.hide.default="all"===a.data("hide")||e.inArray("default",i)>=0;var h=!1;for(var m in l.breakpoints)n.hide[m]="all"===a.data("hide")||e.inArray(m,i)>=0,h=h||n.hide[m];return n.hasBreakpoint=h,r.raise(s.columnData,{column:{data:n,th:t}}).column.data},r.getViewportWidth=function(){return window.innerWidth||(document.body?document.body.offsetWidth:0)},r.calculateWidth=function(e,t){return jQuery.isFunction(l.calculateWidthOverride)?l.calculateWidthOverride(e,t):(t.viewportWidth<t.width&&(t.width=t.viewportWidth),t.parentWidth<t.width&&(t.width=t.parentWidth),t)},r.hasBreakpointColumn=function(e){for(var t in r.columns)if(r.columns[t].hide[e]){if(r.columns[t].ignore)continue;return!0}return!1},r.hasAnyBreakpointColumn=function(){for(var e in r.columns)if(r.columns[e].hasBreakpoint)return!0;return!1},r.resize=function(){var t=e(r.table);if(t.is(":visible"))if(r.hasAnyBreakpointColumn()){var a={width:t.width(),viewportWidth:r.getViewportWidth(),parentWidth:t.parent().width()};a=r.calculateWidth(t,a);var i=t.data("footable_info");if(t.data("footable_info",a),r.raise(s.resizing,{old:i,info:a}),!i||i&&i.width&&i.width!==a.width){for(var o,n=null,l=0;l<r.breakpoints.length;l++)if((o=r.breakpoints[l])&&o.width&&a.width<=o.width){n=o;break}var d=null===n?"default":n.name,f=r.hasBreakpointColumn(d),p=t.data("breakpoint");t.data("breakpoint",d).removeClass("default breakpoint").removeClass(r.breakpointNames).addClass(d+(f?" breakpoint":"")),d!==p&&(t.trigger(u.redraw),r.raise(s.breakpoint,{breakpoint:d,info:a}))}r.raise(s.resized,{old:i,info:a})}else t.trigger(u.redraw)},r.redraw=function(){r.addRowToggle(),r.bindToggleSelectors(),r.setColumnClasses();var t=e(r.table),a=t.data("breakpoint"),i=r.hasBreakpointColumn(a);t.find("> tbody > tr:not(."+d.detail+")").data("detail_created",!1).end().find("> thead > tr:last-child > th").each(function(){var i=r.columns[e(this).index()],o="",n=!0;e.each(i.matches,function(e,t){n||(o+=", ");var a=t+1;o+="> tbody > tr:not(."+d.detail+") > td:nth-child("+a+")",o+=", > tfoot > tr:not(."+d.detail+") > td:nth-child("+a+")",o+=", > colgroup > col:nth-child("+a+")",n=!1}),o+=', > thead > tr[data-group-row="true"] > th[data-group="'+i.group+'"]';var l=t.find(o).add(this);if(""!==a&&(!1===i.hide[a]?l.addClass("footable-visible").show():l.removeClass("footable-visible").hide()),1===t.find("> thead > tr.footable-group-row").length){var s=t.find('> thead > tr:last-child > th[data-group="'+i.group+'"]:visible, > thead > tr:last-child > th[data-group="'+i.group+'"]:visible'),u=t.find('> thead > tr.footable-group-row > th[data-group="'+i.group+'"], > thead > tr.footable-group-row > td[data-group="'+i.group+'"]'),f=0;e.each(s,function(){f+=parseInt(e(this).attr("colspan")||1,10)}),f>0?u.attr("colspan",f).show():u.hide()}}).end().find("> tbody > tr."+d.detailShow).each(function(){r.createOrUpdateDetailRow(this)}),t.find("[data-bind-name]").each(function(){r.toggleInput(this)}),t.find("> tbody > tr."+d.detailShow+":visible").each(function(){var t=e(this).next();t.hasClass(d.detail)&&(i?t.show():t.hide())}),t.find("> thead > tr > th.footable-last-column, > tbody > tr > td.footable-last-column").removeClass("footable-last-column"),t.find("> thead > tr > th.footable-first-column, > tbody > tr > td.footable-first-column").removeClass("footable-first-column"),t.find("> thead > tr, > tbody > tr").find("> th.footable-visible:last, > td.footable-visible:last").addClass("footable-last-column").end().find("> th.footable-visible:first, > td.footable-visible:first").addClass("footable-first-column"),r.raise(s.redrawn)},r.toggleDetail=function(t){var a=t.jquery?t:e(t),i=a.next();a.hasClass(d.detailShow)?(a.removeClass(d.detailShow),i.hasClass(d.detail)&&i.hide(),r.raise(s.rowCollapsed,{row:a[0]})):(r.createOrUpdateDetailRow(a[0]),a.addClass(d.detailShow).next().show(),r.raise(s.rowExpanded,{row:a[0]}))},r.removeRow=function(t){var a=t.jquery?t:e(t);a.hasClass(d.detail)&&(a=a.prev());var i=a.next();!0===a.data("detail_created")&&i.remove(),a.remove(),r.raise(s.rowRemoved)},r.appendRow=function(t){var a=t.jquery?t:e(t);e(r.table).find("tbody").append(a),r.redraw()},r.getColumnFromTdIndex=function(t){var a=null;for(var i in r.columns)if(e.inArray(t,r.columns[i].matches)>=0){a=r.columns[i];break}return a},r.createOrUpdateDetailRow=function(t){var a,i=e(t),o=i.next(),n=[];if(!0===i.data("detail_created"))return!0;if(i.is(":hidden"))return!1;if(r.raise(s.rowDetailUpdating,{row:i,detail:o}),i.find("> td:hidden").each(function(){var t=e(this).index(),a=r.getColumnFromTdIndex(t),i=a.name;if(!0===a.ignore)return!0;t in a.names&&(i=a.names[t]);var o,l=e(this).attr("data-bind-name");if(null!=l&&e(this).is(":empty")){var s=e("."+d.detailInnerValue+'[data-bind-value="'+l+'"]');e(this).html(e(s).contents().detach())}return!1!==a.isEditable&&(a.isEditable||e(this).find(":input").length>0)&&(null==l&&(l="bind-"+e.now()+"-"+t,e(this).attr("data-bind-name",l)),o=e(this).contents().detach()),o||(o=e(this).contents().clone(!0,!0)),n.push({name:i,value:r.parse(this,a),display:o,group:a.group,groupName:a.groupName,bindName:l}),!0}),0===n.length)return!1;var u=i.find("> td:visible").length,f=o.hasClass(d.detail);return f||(o=e('<tr class="'+d.detail+'"><td class="'+d.detailCell+'"><div class="'+d.detailInner+'"></div></td></tr>'),i.after(o)),o.find("> td:first").attr("colspan",u),a=o.find("."+d.detailInner).empty(),l.createDetail(a,n,l.createGroupedDetail,l.detailSeparator,d),i.data("detail_created",!0),r.raise(s.rowDetailUpdated,{row:i,detail:o}),!f},r.raise=function(t,a){!0===r.options.debug&&e.isFunction(r.options.log)&&r.options.log(t,"event"),a=a||{};var i={ft:r};e.extend(!0,i,a);var o=e.Event(t,i);return o.ft||e.extend(!0,o,i),e(r.table).trigger(o),o},r.reset=function(){var t=e(r.table);t.removeData("footable_info").data("breakpoint","").removeClass(d.loading).removeClass(d.loaded),t.find(l.toggleSelector).unbind(u.toggleRow).unbind("click.footable"),t.find("> tbody > tr").removeClass(d.detailShow),t.find("> tbody > tr."+d.detail).remove(),r.raise(s.reset)},r.toggleInput=function(t){var a=e(t).attr("data-bind-name");if(null!=a){var i=e("."+d.detailInnerValue+'[data-bind-value="'+a+'"]');null!=i&&(e(t).is(":visible")?e(i).is(":empty")||e(t).html(e(i).contents().detach()):e(t).is(":empty")||e(i).html(e(t).contents().detach()))}},r.init(),r}(this,n,++i);e(this).data("footable",a)})}}(jQuery,window);





(function ($, w, undefined) {
  if (w.footable == undefined || w.footable == null)
    throw new Error('Please check and make sure footable.js is included in the page and is loaded prior to this script.');

  var jQversion = w.footable.version.parse($.fn.jquery);
  if (jQversion.major == 1 && jQversion.minor < 8) { // For older versions of jQuery, anything below 1.8
    $.expr[':'].ftcontains = function(a, i, m) {
      return $(a).html().toUpperCase().indexOf(m[3].toUpperCase()) >= 0;
    };
  } else { // For jQuery 1.8 and above
    $.expr[":"].ftcontains = $.expr.createPseudo(function(arg) {
      return function(elem) {
        return $(elem).html().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
      };
    });
  }

  var defaults = {
    filter: {
      enabled: true,
      input: '.footable-filter',
      timeout: 300,
      minimum: 2,
      disableEnter: false
    }
  };

  function Filter() {
    var p = this;
    p.name = 'Footable Filter';
    p.init = function(ft) {
      if (ft.options.filter.enabled == true) {
        ft.timers.register('filter');
        $(ft.table).bind({
          'footable_initialized': function(e) {
            var $table = $(e.ft.table);
            var data = {
              'input': $table.data('filter') || e.ft.options.filter.input,
              'timeout': $table.data('filter-timeout') || e.ft.options.filter.timeout,
              'minimum': $table.data('filter-minimum') || e.ft.options.filter.minimum,
              'disableEnter': $table.data('filter-disable-enter') || e.ft.options.filter.disableEnter
            };
            if (data.disableEnter) {
                $(data.input).keypress(function(event){
                    if (window.event)
                        return (window.event.keyCode!=13);
                    else
                        return (event.which!=13);
                });
            }
            $(data.input).keyup(function () {
              e.ft.timers.filter.stop();
              e.ft.timers.filter.start(function() {
                var val = $(data.input).val() || '';
                if (val.length < data.minimum) {
                  $table.find("> tbody > tr:not(.footable-row-detail)").each(function() {
                    p.showRow(this, e.ft);
                  });
                } else {
                  var filters = val.split(" ");
                  $table.find("> tbody > tr").hide();
                  var rows = $table.find("> tbody > tr:not(.footable-row-detail)");
                  $.each(filters, function(i, f) {
                    if (f && f.length)
                      rows = rows.filter("*:ftcontains('" + f + "')");
                  });
                  rows.each(function() {
                    p.showRow(this, e.ft);
                  });
                }
              }, data.timeout);
            });
          }
        });
      }
    };
    
    p.showRow = function(row, ft) {
      var $row = $(row), $next = $row.next(), $table = $(ft.table);
      if ($row.is(':visible')) return; //already visible - do nothing
      if ($table.hasClass('breakpoint') && $row.hasClass('footable-detail-show') && $next.hasClass('footable-row-detail')) {
        $row.add($next).show();
        ft.createOrUpdateDetailRow(row);
      }
      else $row.show();
    };
  };
  
  w.footable.plugins.register(new Filter(), defaults);
  
})(jQuery, window);




(function($, w, undefined) {
  if (w.footable == undefined || w.footable == null)
    throw new Error('Please check and make sure footable.js is included in the page and is loaded prior to this script.');

  var defaults = {
    sort: true,
    sorters: {
      alpha: function(a, b) {
        if (a == b) return 0;
        if (a < b) return -1;
        return 1;
      },
      numeric: function(a, b) {
        return a - b;
      }
    },
    parsers: {
      numeric: function(cell) {
        var val = $(cell).data('value') || $(cell).text().replace(/[^0-9.-]/g, '');
        val = parseFloat(val);
        if (isNaN(val)) val = 0;
        return val;
      }
    },
    classes: {
      sort: {
        sortable: 'footable-sortable',
        sorted: 'footable-sorted',
        descending: 'footable-sorted-desc',
        indicator: 'footable-sort-indicator'
      }
    }
  };

  function Sortable() {
    var p = this;
    p.name = 'Footable Sortable';
    p.init = function(ft) {
      if (ft.options.sort == true) {
        $(ft.table).bind({
          'footable_initialized': function(e) {
            var cls = ft.options.classes.sort, column;

            var $table = $(e.ft.table), $tbody = $table.find('> tbody'), $th;

            $table.find('> thead > tr:last-child > th, > thead > tr:last-child > td').each(function(ec) {
              $th = $(this), column = e.ft.columns[$th.index()];
              if (column.sort.ignore != true) {
                $th.addClass(cls.sortable);
                $('<span />').addClass(cls.indicator).appendTo($th);
              }
            });

            $table.find('> thead > tr:last-child > th.' + cls.sortable + ', > thead > tr:last-child > td.' + cls.sortable).click(function(ec) {
              $th = $(this), column = e.ft.columns[$th.index()];
              if (column.sort.ignore == true) return true;
              ec.preventDefault();

              $table.find('> thead > tr:last-child > th, > thead > tr:last-child > td').not($th).removeClass(cls.sorted + ' ' + cls.descending);

              if ($th.hasClass(cls.sorted)) {
                p.reverse(e.ft, $tbody);
                $th.removeClass(cls.sorted).addClass(cls.descending);
              } else if ($th.hasClass(cls.descending)) {
                p.reverse(e.ft, $tbody);
                $th.removeClass(cls.descending).addClass(cls.sorted);
              } else {
                p.sort(e.ft, $tbody, column);
                $th.removeClass(cls.descending).addClass(cls.sorted);
              }
              e.ft.bindToggleSelectors();
              return false;
            });

            var didSomeSorting = false;
            for (var c in e.ft.columns) {
              column = e.ft.columns[c];
              if (column.sort.initial) {
                p.sort(e.ft, $tbody, column);
                didSomeSorting = true;
                $th = $table.find('> thead > tr:last-child > th:eq(' + c + '), > thead > tr:last-child > td:eq(' + c + ')');

                if (column.sort.initial == "descending") {
                  p.reverse(e.ft, $tbody);
                  $th.addClass(cls.descending);
                } else {
                  $th.addClass(cls.sorted);
                }

                break;
              } else if (column.sort.ignore != true) {

              }
            }
            if (didSomeSorting) {
              e.ft.bindToggleSelectors();
            }
          },
          'footable_column_data': function(e) {
            var $th = $(e.column.th);
            e.column.data.sort = e.column.data.sort || {};
            e.column.data.sort.initial = $th.data('sort-initial') || false;
            e.column.data.sort.ignore = $th.data('sort-ignore') || false;
            e.column.data.sort.selector = $th.data('sort-selector') || null;

            var match = $th.data('sort-match') || 0;
            if (match >= e.column.data.matches.length) match = 0;
            e.column.data.sort.match = e.column.data.matches[match];
          }
        });
      }
    };
    
    p.rows = function(ft, tbody, column) {
      var rows = [];
      tbody.find('> tr').each(function() {
        var $row = $(this), $next = null;
        if ($row.hasClass('footable-row-detail')) return true;
        if ($row.next().hasClass('footable-row-detail')) {
          $next = $row.next().get(0);
        }
        var row = { 'row': $row, 'detail': $next };
        if (column != undefined) {
          row.value = ft.parse(this.cells[column.sort.match], column);
        }
        rows.push(row);
        return true;
      }).remove();
      return rows;
    };

    p.sort = function(ft, tbody, column) {
      var rows = p.rows(ft, tbody, column);
      var sorter = ft.options.sorters[column.type] || ft.options.sorters.alpha;
      rows.sort(function(a, b) { return sorter(a.value, b.value); });
      for (var j = 0; j < rows.length; j++) {
        tbody.append(rows[j].row);
        if (rows[j].detail != null) {
          tbody.append(rows[j].detail);
        }
      }
    };

    p.reverse = function(ft, tbody) {
      var rows = p.rows(ft, tbody);
      for (var i = rows.length - 1; i >= 0; i--) {
        tbody.append(rows[i].row);
        if (rows[i].detail != null) {
          tbody.append(rows[i].detail);
        }
      }
    };
  }

  ;

  w.footable.plugins.register(new Sortable(), defaults);

})(jQuery, window);





(function ($, w, undefined) {
    if (w.footable === undefined || w.footable === null)
        throw new Error('Please check and make sure footable.js is included in the page and is loaded prior to this script.');

    var defaults = {
        paginate: true,
        pageSize: 10,
        pageNavigation: '.pagination',
        firstText: '&laquo;',
    previousText: '&lsaquo;',
    nextText: '&rsaquo;',
        lastText: '&raquo;'
    };

    function pageInfo(ft) {
        var $table = $(ft.table), $tbody = $table.find('> tbody');
        this.pageNavigation = $table.data('page-navigation') || ft.options.pageNavigation;
        this.pageSize = $table.data('page-size') || ft.options.pageSize;
        this.firstText = $table.data('page-first-text') || ft.options.firstText;
    this.previousText = $table.data('page-previous-text') || ft.options.previousText;
    this.nextText = $table.data('page-next-text') || ft.options.nextText;
        this.lastText = $table.data('page-last-text') || ft.options.lastText;
        this.currentPage = 0;
        this.pages = [];
        this.control = false;
    }

    function Paginate() {
        var p = this;
        p.name = 'Footable Paginate';

        p.init = function (ft) {
            if (ft.options.paginate === true) {
                $(ft.table).bind({
                    'footable_initialized': function () {
                        ft.pageInfo = new pageInfo(ft);
            ft.raise('footable_setup_paging');
                    },
                    'footable_sorted footable_filtered footable_setup_paging': function () {
                        p.setupPaging(ft);
                    }
                });
            }
        };
    
    p.setupPaging = function(ft) {
      var $tbody = $(ft.table).find('> tbody');
      p.createPages(ft, $tbody);
      p.createNavigation(ft, $tbody);
      p.fillPage(ft, $tbody, ft.pageInfo.currentPage);
    };

        p.createPages = function (ft, tbody) {
            var pages = 1;
            var info = ft.pageInfo;
            var pageCount = pages * info.pageSize;
            var page = [];
            var lastPage = [];
            info.pages = [];
            var rows = tbody.find('> tr:not(.footable-filtered,.footable-row-detail)');
            rows.each(function (i, row) {
                page.push(row);
                if (i === pageCount - 1) {
                    info.pages.push(page);
                    pages++;
                    pageCount = pages * info.pageSize;
                    page = [];
                } else if (i >= rows.length - (rows.length % info.pageSize)) {
                    lastPage.push(row);
                }
            });
            if (lastPage.length > 0) info.pages.push(lastPage);
            if (info.currentPage >= info.pages.length) info.currentPage = info.pages.length - 1;
            if (info.currentPage < 0) info.currentPage = 0;
        };

        p.createNavigation = function (ft, tbody) {
            var $nav = $(ft.table).find(ft.pageInfo.pageNavigation);
      //if we cannot find the navigation control within the table, then try find it outside
      if ($nav.length === 0) {
        $nav = $(ft.pageInfo.pageNavigation);
        //if the navigation control is inside another table, then get out
        if ($nav.parents('table:first') !== $(ft.table)) return;
        //if we found more than one navigation control, write error to console
        if ($nav.length > 1 && ft.options.debug === true) console.error('More than one pagination control was found!');
      }
      //if we still cannot find the control, then don't do anything
            if ($nav.length === 0) return;
      //if the nav is not a UL, then find or create a UL
      if (!$nav.is('ul')) { 
        if ($nav.find('ul:first').length === 0) { $nav.append('<ul />'); }
        $nav = $nav.find('ul');
      }
            $nav.find('li').remove();
            var info = ft.pageInfo;
            info.control = $nav;
            if (info.pages.length > 0) {
                $nav.append('<li class="footable-page-arrow"><a data-page="first" href="#first">'+ft.pageInfo.firstText+'</a>');
                $nav.append('<li class="footable-page-arrow"><a data-page="prev" href="#prev">'+ft.pageInfo.previousText+'</a></li>');
                $.each(info.pages, function (i, page) {
                    if (page.length > 0) {
                        $nav.append('<li class="footable-page"><a data-page="' + i + '" href="#">' + (i + 1) + '</a></li>');
                    }
                });
                $nav.append('<li class="footable-page-arrow"><a data-page="next" href="#next">'+ft.pageInfo.nextText+'</a></li>');
                $nav.append('<li class="footable-page-arrow"><a data-page="last" href="#last">'+ft.pageInfo.lastText+'</a></li>');
            }
            $nav.find('a').click(function (e) {
                e.preventDefault();
                var page = $(this).data('page');
                var newPage = info.currentPage;
                if (page === 'first') {
                    newPage = 0;
                } else if (page === 'prev') {
                    if (newPage > 0) newPage--;
                } else if (page === 'next') {
                    if (newPage < info.pages.length - 1) newPage++;
                } else if (page === 'last') {
                    newPage = info.pages.length - 1;
                } else {
                    newPage = page;
                }
                p.paginate(ft, newPage);
            });
      p.setPagingClasses($nav, info.currentPage, info.pages.length);
        };

        p.paginate = function (ft, newPage) {
            var info = ft.pageInfo;
            if (info.currentPage !== newPage) {
                var $tbody = $(ft.table).find('> tbody');

                //raise a pre-pagin event so that we can cancel the paging if needed
                var event = ft.raise('footable_paging', { page: newPage, size: info.pageSize });
                if (event && event.result === false) return;

                p.fillPage(ft, $tbody, newPage);
                info.control.find('li').removeClass('active disabled');
                p.setPagingClasses(info.control, info.currentPage, info.pages.length);
            }
        };
    
    p.setPagingClasses = function(nav, currentPage, pageCount) {
            nav.find('li.footable-page > a[data-page=' + currentPage + ']').parent().addClass('active');
      if (currentPage >= pageCount - 1) {
        nav.find('li.footable-page-arrow > a[data-page="next"]').parent().addClass('disabled');
                nav.find('li.footable-page-arrow > a[data-page="last"]').parent().addClass('disabled');
      }
      if (currentPage < 1) {
                nav.find('li.footable-page-arrow > a[data-page="first"]').parent().addClass('disabled');
        nav.find('li.footable-page-arrow > a[data-page="prev"]').parent().addClass('disabled');
      }
    };

        p.fillPage = function (ft, tbody, pageNumber) {
            ft.pageInfo.currentPage = pageNumber;
            tbody.find('> tr').hide();
            $(ft.pageInfo.pages[pageNumber]).each(function () {
                p.showRow(this, ft);
            });
        };

        p.showRow = function (row, ft) {
            var $row = $(row), $next = $row.next(), $table = $(ft.table);
            if ($table.hasClass('breakpoint') && $row.hasClass('footable-detail-show') && $next.hasClass('footable-row-detail')) {
                $row.add($next).show();
                ft.createOrUpdateDetailRow(row);
            }
            else $row.show();
        };
    }

    w.footable.plugins.register(new Paginate(), defaults);

})(jQuery, window);




