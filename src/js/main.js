
//=require bower/jquery/dist/jquery.min.js

//=require modules/menu.js
//=require modules/video.js
//=require modules/portfolio.js
//=require modules/reviews.js

window.onload = function() {

  // menu
  // mobileMenu();
  // scrollNav();
  // scrollToSection();

  // video
  video();

  // portfolio
  var imgName = [ '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '9.jpg', '2.jpg', '1.jpg', '10.jpg', '11.jpg', '12.jpg', '7.jpg' ];
  loadPortfolio(imgName);

  // reviews
  reviews();

};
