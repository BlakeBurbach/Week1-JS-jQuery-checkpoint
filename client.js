
// when document is loaded, run readyNow
$(document).ready(readyNow);

// global variable for how many times button has been clicked
// able to use in any function
let numberOfButtonClicks = 0;

// readyNow function activated when document is ready
function readyNow() {
  // when Generate button is clicked - create a div element
  $( '#generateBtn' ).on( 'click', addDiv );
} // end readyNow

// function that creates a div element when generate button is clicked
function addDiv() {
  $('#newDivs').empty();
  let newDivElement = $('<div id="newDivElement"></div>');
  $('#newDivs').append( newDivElement );
  numberOfButtonClicks ++;
  console.log( numberOfButtonClicks );
  let numberParElement = $( '<p id="newParElement">Number of Button Clicks: '+numberOfButtonClicks+'</p>' );
  newDivElement.append(numberParElement);
} // end addDiv
