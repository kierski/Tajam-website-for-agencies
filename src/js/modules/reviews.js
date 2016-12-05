
var reviews = function() {

  var arrow = {
    'right': $('.pager__link-right'),
    'left': $('.pager__link-left')
  },
  pos = 0,
  totalImgs = $('.reviews .slider .pager a').length,
  imgWidth = $('.reviews .slider .pager a img').width(),
  slides = $('.reviews .slider .pager .pager__link');



  var slide = {

    // init funstions
    init: function() {
      slide.moveRight();
      slide.moveLeft();
    },

    // move right slides
    moveRight: function() {
      $(arrow.right).on('click', function(){
        slideRight();
      });
    },

    // move left slides
    moveLeft: function() {
      $(arrow.left).on('click', function(){
        slideLeft();
      });
    }

  };

  slide.init();

  function slideRight(){
    pos++;

    if (pos == pos + 1) {
      pos = totalImgs - 1;
    }

    $(slides[pos]).addClass('pager__link-active');
    $(slides[pos - 1]).removeClass('pager__link-active');

    console.log('right');
  }

  function slideLeft(){
    pos++;

    if(pos == totalImgs) {
      pos = 0;
    }

    $(slides[pos]).addClass('pager__link-active');
    $(slides[pos - 1]).removeClass('pager__link-active');

    console.log('left');
  }

};
