
// menu animated
var scrollNav = function() {

  var nav = document.querySelector('.nav');
      headerHeight = document.querySelector('header').offsetHeight;

  var navScroll = {
    init: function() {
      window.addEventListener('scroll', function(e) {
        navScroll.navFixed();
      });
    },
    navFixed: function() {
      var scrollTop = document.body.scrollTop;

      if ( document.body.clientWidth > 768 ) {
        if(scrollTop > headerHeight){
          nav.classList.add('nav--fixed');
        } else if(scrollTop < headerHeight) {
          nav.classList.remove('nav--fixed');
        }
      }

    }
  };

  navScroll.init();

};

// scroll to section
var scrollToSection = function() {
  var links = document.querySelectorAll('.nav__item .nav__link'),
      mobileLinks = document.querySelectorAll('.nav__mobile__item .nav__link'),
      linksArr = [],
      mobileLinksArr = [],
      navHeight = document.querySelector('nav').offsetHeight;
      navMobile = document.querySelector('.nav__mobile__overlay');

    var linkClick = function(arr) {
      arr.addEventListener("click", scrollTo());
    };

    for (var i = 0; i < links.length; i++) {
      linksArr.push(links[i]);
      mobileLinksArr.push(mobileLinks[i]);
      linkClick(linksArr[i]);
      linkClick(mobileLinksArr[i]);
    }

    function scrollTo() {
      return function(e){
        e.preventDefault();
        var hash = this.getAttribute('href');
        var section = document.querySelector('' + hash + '');
        var mobileOffset = section.offsetTop;
        var desktopOffset = section.offsetTop - navHeight;

        if (this.parentNode.getAttribute('class') === 'nav__item') {
          $('html, body').animate({
            scrollTop: desktopOffset
          }, 500);
          return false;
        }

        if (this.parentNode.getAttribute('class') === 'nav__mobile__item') {
          var mobileBar = document.querySelector('.nav__mobile__bar'),
              mobileOverlay = document.querySelector('.nav__mobile__overlay');
              mobileBar.classList.remove('nav__mobile__bar__animate');

            if (mobileOverlay.classList.contains('nav__mobile__overlay--visibility')) {
              mobileOverlay.classList.remove('nav__mobile__overlay--visibility');
              mobileOverlay.classList.add('nav__mobile__overlay--hidden');
            }
            setTimeout(function(){
              $('html, body').animate({
                scrollTop: mobileOffset
              }, 500);
              return false;
            }, 900);
        }

      };
    }
};

// mobile menu - animation hamburger & animation of menu conetnt & copy from nav to mobile links
var mobileMenu = function() {

  // functions
  mobileMenuContent();
  animatedHamburgerMenu();

  // animation hamburger
  function animatedHamburgerMenu() {
    var hamburgerMenu = document.querySelector('.nav__mobile__hamburger'),
        navMobileOverlay = document.querySelector('.nav__mobile__overlay');

    hamburgerMenu.addEventListener('click', function(e){
      e.preventDefault();
      var bar = this.children, // klasa może być rozna, nie chcemy uzalezniac od klasy. Ale zawsze ma to byc pierwsze dziecko elementu kliknietego
          that = bar[0];

      if ( that.classList.contains('nav__mobile__bar__animate') ) {
        that.classList.remove("nav__mobile__bar__animate");
        hiddenMobileMenu(that);
      } else {
        that.classList.add("nav__mobile__bar__animate");
        showMobileMenu(that);
      }
    });

    // animation of menu conetnt
    function showMobileMenu(that) {
      navMobileOverlay.classList.remove('nav__mobile__overlay--hidden');
      navMobileOverlay.classList.add('nav__mobile__overlay--visibility');
    }

    function hiddenMobileMenu(that) {
      navMobileOverlay.classList.remove('nav__mobile__overlay--visibility');
      navMobileOverlay.classList.add('nav__mobile__overlay--hidden');
    }

  }

  // clone items of nav menu to mobile menu
  function mobileMenuContent() {
    var nav__list = document.querySelector('.nav__list'),
        items = nav__list.querySelectorAll('li'),
        nav__mobile__overlay = document.createElement('div'),
        nav__mobile__list = document.createElement('ul'),
        link = null,
        mobile__item = null;

    nav__mobile__overlay.classList.add('nav__mobile__overlay', 'nav__mobile__overlay--hidden');
    nav__mobile__list.classList.add('nav__mobile__list');
    nav__mobile__overlay.appendChild(nav__mobile__list);
    document.body.insertBefore(nav__mobile__overlay, document.body.firstChild);

    items.forEach(function(li) {
      link = li.firstChild;
      link = link.cloneNode(true);
      mobile__item = document.createElement('li');
      mobile__item.classList.add('nav__mobile__item');
      mobile__item.appendChild(link);
      nav__mobile__list.appendChild(mobile__item);
    });

  }

};
