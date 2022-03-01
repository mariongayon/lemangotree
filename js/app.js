// SMOOTH SCROLL
smoothScroll.init();

// TOGGLE NAVBAR STATE ON SCROLL
$(document).ready(function(){
  var scroll_start = 0;
  var startchange = $('.nav');
  var offset = startchange.offset();
  $(document).scroll(function() {
    scroll_start = $(this).scrollTop();
    if(scroll_start > offset.top) {
      $('.nav').addClass('scrolled');
      $('.container-logo').addClass('scrolled');
    } else {
      $('.nav').removeClass('scrolled');
      $('.container-logo').removeClass('scrolled');
    }
  });
});

// TOGGLE NAVBAR STATE ON SCROLL
$(document).ready(function(){
  $('.menu-icon').click(function(e) {
    $(this).toggleClass('menu-opened');
    $('#menu-mobile').toggleClass('menu-hidden');
    $('#menu-overlay').toggleClass('hidden');
    e.preventDefault() /*ignores actual link*/
  });

  $('.nav-mobile ul li a').click(function(e) {
    $('#menu-mobile').toggleClass('menu-hidden');
  });

  $('#menu-overlay').click(function(e) {
    $('#menu-mobile').toggleClass('menu-hidden');
    $('#menu-overlay').toggleClass('hidden');
  });
});

// SLICK
$('.carousel').slick({
  dots: true,
  arrows: false,
  autoPlay: false,
  speed: 700,
  initialSlide: 0,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true
});

// INSTAFEED
var userFeed = new Instafeed({
  get: 'user',
  clientID: '3ac2f5cc133c4d25abb04f4e033199da',
  accessToken:'1802227604.3ac2f5c.1e1314e961e24d7e8f36f4057be38d68',
  userId: 1802227604,
  limit: 10,
  link: false,
  resolution: 'standard_resolution',
  sortBy: 'most-recent',
});

userFeed.run();



