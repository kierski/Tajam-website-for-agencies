
var headerSlider = function() {

  var slides = $('.header__slider__slide'),
      pager = $('.header__pager__link');

  $(pager).on('click', function(){
    number = $(this).index();
    item = $(slides[number]);
    slides.removeClass('header__slider__slide-active');
    item.addClass('header__slider__slide-active');
  });

};
