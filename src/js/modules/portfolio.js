
// fake loading AJAX files

var loadPortfolio = function(params) {

  var btn = $('.works__btn'),
      img = null,
      imgArray = [],
      divWorks = $('.works__projects'),
      i;

  var portfolio = {
    init: function() {
      btn.on('click', function(e){
        e.preventDefault();
        portfolio.load();
      });
    },
    load: function() {
      for (i = 0; i < params.length; i++) {
        var img = '<div class="works__projects_item" style="background-image: url(images/works/' + params[i] + ')"></div>';
        imgArray.push(img);
      }

      function addElems() {
        $(divWorks).append(imgArray);
      }

      btn.addClass('works__btn--animation');
      setTimeout(function(){
        addElems();
        btn.removeClass('works__btn--animation');
      }, 2000);

    }
  };

  portfolio.init();

};
