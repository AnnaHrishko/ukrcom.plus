

 $('.content').hide().eq(0).show();
  $('.accordion_sec').click(function() {
    $('.accordion_sec').removeClass('active')
    $(this).addClass('active')
    $(".content").hide();
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
    speed: 300,
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
  $('.call_mobile').magnificPopup({
    type: 'inline',
    preloader: false,
    focus: '#username',
    modal: true
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
    modal: true
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
    modal: true
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
    modal: true
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
    modal: true
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

$("body").on("click",".click_item_menu",function(event){event.preventDefault();
    var href = $(this).attr('href')
    var id ='#'+href.split('#')[1]
    if($(id).length > 0){
        $([document.documentElement, document.body]).animate({
      scrollTop: $(id).offset().top
    }, 1000);
    }  else{window.location.href = href}
});


$(document).ready(function() {
    $('.select').select2();
});


$(".popup").on("show", function () {
  $("body").addClass("modal-open");
}).on("hidden", function () {
  $("body").removeClass("modal-open")
});
