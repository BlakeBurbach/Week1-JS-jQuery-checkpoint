
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
  // empty newDivs every time button is clicked so there's not a huge list of new
  // div elements. just looks like one.
  $('#newDivs').empty();
  // variable to hold each newly created div element
  let newDivElement = $('<div id="newDivElement"></div>');
  // append each newly created div to the dom
  $('#newDivs').append( newDivElement );
  // increase number of times button has been clicked
  numberOfButtonClicks ++;
  console.log( numberOfButtonClicks );
  // variable holding a newly created p tag inside of new div element
  // that will display the number of times button has been clicked
  let numberParElement = $( '<p id="newParElement">Number of Button Clicks: '+numberOfButtonClicks+'</p>' );
  newDivElement.append(numberParElement);
} // end addDiv
