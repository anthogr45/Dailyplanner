var wdDate = $('#currentDay');
var btnDateSearch = $('#btnDate');

var today = dayjs().format('ddd, MMM D, YYYY h:mm A');
console.log(today);
$(wdDate).text(today);

var currentTime = dayjs().format('HH');

if (currentTime < 4) {
console.log(currentTime);
}
// blockColor ();


var block9AM = $('#hour-9');
var block9 = 9;
var block9AMTXT = $('#txt9');
var block9AMBtn = $("#btn9AM");

var papa

block9AMBtn.on('click', function() {
    alert('Hello World');
 
  papa = this.parentNode.id;
    // papa = block9AMBtn.parent().id
    var typee = typeof papa;
  console.log(typee);

  if (papa < 10) {
    console.log("papa boy");
  }

  });
// console.log(block9AMBtn.parent);
// block9AM.attr('class', 'row time-block future' )

var block10AM = $('#hour-10');
var block10 = 10;
var block10AMTXT = $('#txt10');
var block10AMBtn = $('btn10AM');

var block11AM = $('#hour-11');
var block11 = 11;
var block11AMTXT = $('#txt11');
var block11AMBtn = $('btn11AM');

var block12PM = $('#hour-12');
var block12 = 12;
var block12PMTXT = $('#txt12');
var block12PMBtn = $('btn12PM');

var block1PM = $('#hour-13');
var block13 = 13;
var block12PMTXT = $('#txt12');
var block12PMBtn = $('btn12PM');

// var block1PM = $('#hour-1');
// var block14 = 14;
// var block1PMTXT = $('#txt1');
// var block1PMBtn = $('btn1PM');

var block2PM = $('#hour-14');
var block14 = 14;
var block2PMTXT = $('#txt2');
var block2PMBtn = $('btn2PM');

var block3PM = $('#hour-15');
var block15 = 15;
var block3PMTXT = $('#txt3');
var block3PMBtn = $('btn3PM');

var block4PM = $('#hour-4');
var block16 = 16;
var block4PMTXT = $('#txt4');
var block4PMBtn = $('btn4PM');

var block5PM = $('#hour-5');
var block17 = 17;
var block5PMTXT = $('#txt5');
var block4PMBtn = $('btn4PM');


var idnum = '9' 


function  colorBlock () {

  if (currentTime < block9) {

    console.log('ela');

    block9AM.attr('class', 'row time-block future' );
    block10AM.attr('class', 'row time-block future' );
    block11AM.attr('class', 'row time-block future' );
    block12PM.attr('class', 'row time-block future' );
    block1PM.attr('class', 'row time-block future' );
    block2PM.attr('class', 'row time-block future' );
    block3PM.attr('class', 'row time-block future' );
    block4PM.attr('class', 'row time-block future' );
    block5PM.attr('class', 'row time-block future' );

    // if (currentTime <= block9) {
     
    //   block9AM.attr('class', 'row time-block present' );
    //   block10AM.attr('class', 'row time-block future' );
    //   block11AM.attr('class', 'row time-block future' );
    //   block12PM.attr('class', 'row time-block future' );
    //   block1PM.attr('class', 'row time-block future' );
    //   block2PM.attr('class', 'row time-block future' );
    //   block3PM.attr('class', 'row time-block future' );
    //   block4PM.attr('class', 'row time-block future' );
    //   block5PM.attr('class', 'row time-block future' );

    // }

  } else if ((currentTime < block10) || ((currentTime >= block9) )) {

    console.log('ela');
    
    block9AM.attr('class', 'row time-block future' );
    block10AM.attr('class', 'row time-block future' );
    block11AM.attr('class', 'row time-block future' );
    block12PM.attr('class', 'row time-block future' );
    block1PM.attr('class', 'row time-block future' );
    block2PM.attr('class', 'row time-block future' );
    block3PM.attr('class', 'row time-block future' );
    block4PM.attr('class', 'row time-block future' );
    block5PM.attr('class', 'row time-block future' );

  }

}



  



// // $(document).ready(function() {

colorBlock ();

// });

$(function () {

});









// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
