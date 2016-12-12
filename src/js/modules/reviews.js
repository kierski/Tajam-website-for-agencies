
var reviews = function() {

  var arrow = {
    right: $('.pager__link-right'),
    left: $('.pager__link-left')
  };

  var pager = {
    el: $('.reviews .slider .pager .pager__link'),
    active: null
  };

  var imgs = {
    all: $('.reviews .slider .pager a').length,
    central: Math.floor($('.reviews .slider .pager a').length/2),
    last: $('.reviews .slider .pager a').length - 1
  };

  var pos = {
    current: null
  };

  $(pager.el).each(function(i){

    if ( $(this).hasClass('pager__link-active') === true) {
      pager.active = $(this);
      pos.current = i;
    }

  });

function transformRight() {

    if ( pos.current >= 0 && pos.current < imgs.all ) {
      pos.current++;
      pager.active = pager.el[pos.current];
      that = $( pager.active );
      that.prev().removeClass('pager__link-active');
      that.addClass('pager__link-active');
      if (pos.current >= 5) {
        return;
      } else {
        pagerImg(that);
      }
    }

    if ( pos.current >= imgs.all ) {
      $(pager.el[imgs.last]).removeClass('pager__link-active');
      that = $(pager.el[0]);
      that.addClass('pager__link-active');
      pos.current = 0;
      pagerImg(that);
    }

}

function transformLeft() {

  if ( pos.current >= 0 && pos.current < imgs.all ) {
    pos.current--;
    pager.active = pager.el[pos.current];
    that = $( pager.active );
    that.next().removeClass('pager__link-active');
    that.addClass('pager__link-active');
    pagerImg(that);
  }

  if ( pos.current < 0 ) {
    $(pager.el[0]).removeClass('pager__link-active');
    that = $(pager.el[imgs.last]);
    that.addClass('pager__link-active');
    pos.current = imgs.last;
    pagerImg(that);
  }

}

// template slide
var configCitat = {
mark: '<span class="quotation_marks">“</span>',
txt: null,
person: null,
company: null
};

function pagerImg(that) {

  $('.reviews .slider .pager a').removeClass('pager__link-active');
  $(that).addClass('pager__link-active');
  pos.current = $(that).index();

  configCitat.txt = $(that).data('txt');
  configCitat.person = $(that).data('person');
  configCitat.company = $(that).data('company');

  var citat = [
      '<div class="slider__slide">',
          '<p>',
            configCitat.mark,
            configCitat.txt,
            '<span class="signature">',
              '<b>' + configCitat.person + '</b>',
              configCitat.company,
            '</span>',
          '</p>',
      '</div>'
  ].join("\n");

  $('.slider__slides').animate({opacity: 0}, 400).promise().done(function(){
    $(".slider__slides").html(citat);
    $(".slider__slides").animate({opacity: 1}, 400);
});

}

  // init slide
  var slideReviews = {
    init: function() {
      // move right
      $(arrow.right).on('click', function(e){
        e.preventDefault();
        transformRight();
      });
      // move left
      $(arrow.left).on('click', function(e){
        e.preventDefault();
        transformLeft();
      });
      // click pager
      $(pager.el).on('click', function(e){
        e.preventDefault();
        pagerImg(this);
      });
    }
  };

  slideReviews.init();

};
