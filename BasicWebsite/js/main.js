$(document).ready(function(){ // After my document has loaded succesfully
    $('h1').css("color", "red") // Do this!
});

    $('a').on(function(){
        $(this).preventDefault();
        $(this).css('background','green');
});

$( "li" ).hover(
    function() {
      $( this ).append( $( "<span> ***</span>" ) );
    }, function() {
      $( this ).find( "span:last" ).remove();
    }
  );

  $( "li.fade" ).hover(function() {
    $( this ).fadeOut( 100 );
    $( this ).fadeIn( 500 );
  });