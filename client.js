
// when document is loaded, run readyNow
$(document).ready(readyNow);

// readyNow function activated when document is ready
function readyNow() {
  // when Generate button is clicked - create a div element
  $( '#generateBtn' ).on( 'click', addDiv );
} // end readyNow

// function that creates a div element when generate button is clicked
function addDiv() {
  $('#newDivs').append( '<div></div>' );
} // end addDiv
