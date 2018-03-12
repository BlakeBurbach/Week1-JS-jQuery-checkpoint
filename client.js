
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
  // variable to hold each newly created div element
  let newDivElement = $('<div id="newDivElement" class="newDiv"></div>');
  // every time new div is created, make it's background color red
  newDivElement.css( 'background-color', 'red' );
  // append each newly created div to the dom
  $('#newDivs').append( newDivElement );
  // increase number of times button has been clicked
  numberOfButtonClicks ++;
  console.log( numberOfButtonClicks );
  // variable holding a newly created p tag inside of new div element
  // that will display the number of times button has been clicked
  let numberParElement = $( '<p id="newParElement">Number of Button Clicks: '+numberOfButtonClicks+'</p>' );
  newDivElement.append(numberParElement);
  newButtons(newDivElement);
} // end addDiv

// a function to append new buttons to the newly created div element
function newButtons(newDivElement) {
  newDivElement.append( '<button id="swapBtn">Swap</button>' );
  newDivElement.append( '<button id="deleteBtn">Delete</button>' );
  swapToYellow(newDivElement);
  removeDiv();
} // end newButtons

// change new div background to yellow
function swapToYellow(newDivElement){
  $('#swapBtn').on('click', function(){
    if (newDivElement.css('background-color', 'red')){
      newDivElement.css('background-color', 'yellow');
    } else {}
    swapToRed(newDivElement);
  }); // end on click
} // end swap to yellow

// change new div background to red
function swapToRed( newDivElement ){
  $('#swapBtn').on( 'click', function(){
    if( newDivElement.css('background-color', 'yellow') ) {
      newDivElement.css('background-color', 'red');
    } else {} // end if
    swapToYellow(newDivElement);
  }); // end on click
} // end swapToRed

// a remove button that will remove a new div from the DOM
function removeDiv(){
  $('#newDivs').on( 'click', '#deleteBtn', function(){
    $( this ).closest( '#newDivElement' ).remove();
  }); // end on click
} // end removeEmployee
