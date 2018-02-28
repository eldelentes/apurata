// $(document).ready(function() {
//   function _responsiveMenu() {
//     var screen = $(window);
//     if (screen.width() < 900) {
//       $('.main-header').addClass('is-responsive');
//     }
//     else {
//       $('.main-header').removeClass('is-responsive');
//     }
//   }

//   _responsiveMenu();

//   $(window).resize(function() {
//    _responsiveMenu();
//   });

// });

var flagTooltip = false;

$(document).scroll(function(){
  if ( $(this).scrollTop() > 100 ) {
    $('.main-header').addClass('is-scrolling');
  } else {
    $('.main-header').removeClass('is-scrolling');
  }
});

$(document).scroll(function(){
  if ( $(this).scrollTop() > 100  && flagTooltip == false ) {
    $('.tooltip').addClass('is-active');
  } else {
    $('.tooltip').removeClass('is-active');
  }
});

$('.tooltip .close').click(function(){
  $('.tooltip').removeClass('is-active');
  flagTooltip = true;
});

$(function() {
  var handle = $( "#custom-handle" );
  $( "#slider" ).slider({
    range: "min",
    value: 650,
    min: 0,
    step: 50,
    max: 1000,
    create: function() {
      handle.text( $( this ).slider( "value" ) );
    },
    slide: function( event, ui ) {
      handle.text( ui.value );
    }
  });
});