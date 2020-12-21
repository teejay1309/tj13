$(document).ready(function(){

    $('.carousel').carousel();
    $('.sidenav').sidenav();

    $('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
  });

  $('.carousel').carousel();
  setInterval(function() {
    $('.carousel').carousel('next');
  }, 3000); // every 2 seconds

  });
