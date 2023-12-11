(function ($) {
  "use strict";

// counter up js 
$(".number").counterUp({time:3000});


$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $('.scrollToTop').css({
          'bottom': '2%',
          'opacity': '1',
          'transition': 'all .5s ease'
      });
    } else {
      $('.scrollToTop').css({
          'bottom': '-30%',
          'opacity': '0',
          'transition': 'all .5s ease'
      })
    }
  });
  
  $('.scrollToTop').on('click', function () {
      $('html, body').animate({
          scrollTop: 0
      }, 500);
      return false;
  });

});





// custom js for our preloader animation 
$(function () {

  var img = $('.bg-img');
  img.css('background-image', function () {
      var bg = ('url(' + $(this).data('background') + ')');
      return bg;
  });
  $('.preloader').fadeOut(1000);

});



}(jQuery)); 




// Hambergar menu for mobile
/* Open */
function openNav() {
document.getElementById("myNav").style.width = "300px";
}

/* Close */
function closeNav() {
document.getElementById("myNav").style.width = "0%";
}





 





