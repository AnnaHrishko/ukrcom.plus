

 $('.content').hide().eq(0).show();
  $('.accordion_sec').click(function() {
    $('.accordion_sec').removeClass('active')
    $(this).addClass('active')
    $(".content").slideUp();
    $(this).find('.content').slideDown();
    return false;
  });


$('.gumb').click(function(){
  $(this).toggleClass('active')
  $('.menu').toggleClass('active')
})

$(".tariff_plans_wraper.mobile").slick({
    dots: false,
    infinite: true,
    speed: 300,
    autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
});

$(".slider_sec").slick({
    dots: false,
    infinite: true,
    speed: 1200,
    // autoplay: true,
    adaptiveHeight: true,
    fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
});

// var swiper = new Swiper('.swiper', {
//   slidesPerView: 1,
//   spaceBetween: 10,
//   autoplay: true,
//   speed: 2000,
//   autoplay: false;
//   // navigation: true;
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
//     autoplay: {
//      delay: 2000,
//     },
// })


$(function () {
  $('.orange_btn1').magnificPopup({
    type: 'inline',
    preloader: false,
    focus: '#username',
    modal: true,
    callbacks: {
    open: function() {
       jQuery('body').addClass('magnificpopupnoscroll');
    },
    close: function() {
       jQuery('body').removeClass('magnificpopupnoscroll');
    }
}
  });
  $(document).on('click', '.close_popup', function (e) {
    e.preventDefault();
    $.magnificPopup.close();
  });
});


$(function () {
  $('.orange_btn2').magnificPopup({
    type: 'inline',
    preloader: false,
    focus: '#username',
    modal: true,
    callbacks: {
    open: function() {
       jQuery('body').addClass('magnificpopupnoscroll');
    },
    close: function() {
       jQuery('body').removeClass('magnificpopupnoscroll');
    }
}
  });
  $(document).on('click', '.close_popup', function (e) {
    e.preventDefault();
    $.magnificPopup.close();
  });
});


$(function () {
  $('.call_mobile').magnificPopup({
    type: 'inline',
    preloader: false,
    focus: '#username',
    modal: true,
    callbacks: {
    open: function() {
       jQuery('body').addClass('magnificpopupnoscroll');
    },
    close: function() {
       jQuery('body').removeClass('magnificpopupnoscroll');
    }
}
  });
  $(document).on('click', '.close_popup', function (e) {
    e.preventDefault();
    $.magnificPopup.close();
  });
});


$(function () {
  $('.call_desktop').magnificPopup({
    type: 'inline',
    preloader: false,
    focus: '#username',
    modal: true,
    callbacks: {
    open: function() {
       jQuery('body').addClass('magnificpopupnoscroll');
    },
    close: function() {
       jQuery('body').removeClass('magnificpopupnoscroll');
    }
}
  });
  $(document).on('click', '.close_popup', function (e) {
    e.preventDefault();
    $.magnificPopup.close();
  });
});


$(function () {
  $('.btn_connection').magnificPopup({
    type: 'inline',
    preloader: false,
    focus: '#username',
    modal: true,
    callbacks: {
    open: function() {
       jQuery('body').addClass('magnificpopupnoscroll');
    },
    close: function() {
       jQuery('body').removeClass('magnificpopupnoscroll');
    }
}
  });
  $(document).on('click', '.close_popup', function (e) {
    e.preventDefault();
    $.magnificPopup.close();
  });
});

$(function () {
  $('.conection_with_us').magnificPopup({
    type: 'inline',
    preloader: false,
    focus: '#username',
    modal: true,
    callbacks: {
    open: function() {
       jQuery('body').addClass('magnificpopupnoscroll');
    },
    close: function() {
       jQuery('body').removeClass('magnificpopupnoscroll');
    }
}
  });
  $(document).on('click', '.close_popup', function (e) {
    e.preventDefault();
    $.magnificPopup.close();
  });
});


$(function () {
  $('.detali_link').magnificPopup({
    type: 'inline',
    preloader: false,
    focus: '#username',
    modal: true,
    callbacks: {
    open: function() {
       jQuery('body').addClass('magnificpopupnoscroll');
    },
    close: function() {
       jQuery('body').removeClass('magnificpopupnoscroll');
    }
}
  });
  $(document).on('click', '.close_detail', function (e) {
    e.preventDefault();
    $.magnificPopup.close();
  });
});


$(function() {
    $.validator.addMethod("emailRegex", function(value, element) {
        return this.optional(element) || /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/i.test(value);
    }, "Недійсний формат входу");
});

jQuery(function($){
   
   $(".phoneInput").mask("+ 38 (999) 999-99-99");
});

$(function() {
    $(".form_connection").validate({
        ignore: [],
        rules: {
            "first_name": {
                required: true,
                minlength: 3,
            },
            "phone": {
                required: true,
            },
            "email":{
                required: true,
                emailRegex: true,
            },
            "locality":{
                required: true,
            }

        },
        messages: {
            "email": {
                required: "Ви повинні ввести ім'я електронної пошти",
                emailRegex: "Недійсний формат входу",
            },
            "first_name": {
                required: "Обов'язковие поле для заповнювання",
                minlength: "Введіть Ваше повне ім'я",
            },
            "phone": {
                required: "Обов'язковие поле для заповнювання",
            },
            "locality":{
                required: "Обов'язковие поле для заповнювання",
            }
        },
    });
});

$(".select").on('change', function () {
  $('.form').valid();
});

$("#receiver_name").select2().change(function() {
    $(this).valid();
});

$(function() {
    $(".form_call").validate({
        rules: {
            "first_name": {
                required: true,
                minlength: 3,
            },
            "phone": {
                required: true,
            },

        },
        messages: {
            "first_name": {
                required: "Обов'язковие поле для заповнювання",
                minlength: "Введіть Ваше повне ім'я",
            },
            "phone": {
                required: "Обов'язковие поле для заповнювання",

            },
        },
    });
});

if ($(window).width() < 900) {
   $("body").on("click",".click_item_menu",function(event){event.preventDefault(); 
        $('.gumb').trigger('click') 
        $('.menu.mobile').removeClass('active')
   });  
}

$("body").on("click",".click_item_menu",function(event){event.preventDefault();
    var href = $(this).attr('href')
    var id ='#'+href.split('#')[1]
    if($(id).length > 0){
        $([document.documentElement, document.body]).animate({
      scrollTop: $(id).offset().top
    }, 1000);
    }  else{window.location.href = href}
});

$("body").on("click","#faq_click",function(event){event.preventDefault();
    var id=$(this).attr('href'),top=$(id).offset().top;
    $('body,html').animate({scrollTop:top},1000);});


$(document).ready(function() {
    $('.select').select2();
});

