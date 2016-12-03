
var video = function() {
  // todo
    // chciałbym aby to był obiekt, w którym podajemy nazwę pliku oraz rozszerzenie, a następnie nam to iteruję po tablicy po to aby wstawić wszystkie potrzebne formaty dla przeglądarek

  var videoContent = document.querySelector('.video__content');
  var btn = document.querySelector('.video__btn');
  var control = document.querySelector('.video__btn__turn');
  var video = document.querySelector(".video__content");

  // cover img
  videoContent.style.backgroundImage = "url('/images/cover_2.jpg')";

  // video button
    btn.addEventListener('click', function (e) {
      e.preventDefault();

      videoContent.removeAttribute("style");

      if ( control.classList.contains('video__btn__turn--active') ) {
        this.classList.remove("video__btn--active");
        control.classList.remove('video__btn__turn--active');
        video.pause();
      } else {
        this.classList.add("video__btn--active");
        control.classList.add('video__btn__turn--active');
        video.innerHTML = '<source src="video/city.mp4" type="video/mp4">';
        video.play();
      }

    });

};
