

 $('.content').hide().eq(0).show();
  $('.name_sec').click(function() {
    $('.name_sec').removeClass('active')
    $(this).addClass('active')
    $(".content").hide();
    $(this).next().slideDown();
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
        slidesToShow: 1,
        slidesToScroll: 1,
});

$(".slider_sec").slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
});

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
