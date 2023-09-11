var wdDate = $('#currentDay');
var btnDateSearch = $('#btnDate');

var today = dayjs().format('ddd, MMM D, YYYY h:mm A');
console.log(today);
$(wdDate).text(today);

var clockTime = dayjs().format('HH');

var currentTime = parseInt(clockTime);

// var typee = typeof currentTime;
console.log(currentTime);

// if (currentTime < 4) {
// console.log(currentTime);
// }
// blockColor ();


var block9AM = $('#9');
var block10AM = $('#10');
var block11AM = $('#11');
var block12PM = $('#12');
var block1PM = $('#13');
var block2PM = $('#14');
var block3PM = $('#15');
var block4PM = $('#16');
var block5PM = $('#17');

var block9 = 9;
var block9AMTXT = $('#txt9');
var block9AMBtn = $("#btn9AM");

// var papa

// block9AMBtn.on('click', function() {
//     alert('Hello World');
 
//   papa = this.parentNode.id;
//     // papa = block9AMBtn.parent().id
//     var typee = typeof papa;
//   console.log(typee);

//   if (papa < 10) {
//     console.log("papa boy");
//   }

//   });


var block10 = 10;
var block10AMTXT = $('#txt10');
var block10AMBtn = $('btn10AM');


var block11 = 11;
var block11AMTXT = $('#txt11');
var block11AMBtn = $('btn11AM');


var block12 = 12;
var block12PMTXT = $('#txt12');
var block12PMBtn = $('btn12PM');


var block13 = 13;
var block12PMTXT = $('#txt12');
var block12PMBtn = $('btn12PM');


var block14 = 14;
var block2PMTXT = $('#txt2');
var block2PMBtn = $('btn2PM');

var block15 = 15;
var block3PMTXT = $('#txt3');
var block3PMBtn = $('btn3PM');

var block16 = 16;
var block4PMTXT = $('#txt4');
var block4PMBtn = $('btn4PM');

var block17 = 17;
var block5PMTXT = $('#txt5');
var block4PMBtn = $('btn4PM');


var idnum = 9 
var hashTag = '#'
var blockID =  0
var timeBlock = ''
// var timeCheck = currentTime;

// currentTime = 15;

// var x = 9;
// var blockID = hashTag.concat(x);
//  var timeBlock = $(blockID);
//  console.log(timeBlock)

//  timeBlock.attr('class', 'row time-block future' );

 console.log(currentTime)

function  colorBlock () {
  // console.log(idnum)
  if (currentTime < idnum) {
    console.log(currentTime)

    for (var i = 9; i < 17 ; i++) {

      blockID = hashTag.concat(i);
      timeBlock = $(blockID);
      timeBlock.attr('class', 'row time-block future' );
      console.log(timeBlock)
    }

  }else if (currentTime === 9) {

    console.log("check 9")
    
    block9AM.attr('class', 'row time-block present')
    
    for (i = 10; i < 17 ; i++) {

      blockID = hashTag.concat(i);
      timeBlock = $(blockID);
      timeBlock.attr('class', 'row time-block future' );
      console.log(timeBlock)
    }
    
  }else if (currentTime  === 10) {
    console.log("check 10")
    block9AM.attr('class', 'row time-block past');
    block10AM.attr('class', 'row time-block present');

    for (i = 11; i < 17 ; i++) {

      blockID = hashTag.concat(i);
      timeBlock = $(blockID);
      timeBlock.attr('class', 'row time-block future' );
      console.log(timeBlock)
    }
  }else if (currentTime === 11) {
    console.log("check 11")
    block9AM.attr('class', 'row time-block past');
    block10AM.attr('class', 'row time-block past');
    block11AM.attr('class', 'row time-block present');

    for (i = 12; i < 17 ; i++) {

      blockID = hashTag.concat(i);
      timeBlock = $(blockID);
      timeBlock.attr('class', 'row time-block future' );
      console.log(timeBlock)
    }
  }else if (currentTime === 12) {
    console.log("check 12")
    block9AM.attr('class', 'row time-block past');
    block10AM.attr('class', 'row time-block past');
    block11AM.attr('class', 'row time-block past');
    block12PM.attr('class', 'row time-block present');

    for (i = 13; i < 17 ; i++) {

      blockID = hashTag.concat(i);
      timeBlock = $(blockID);
      timeBlock.attr('class', 'row time-block future' );
      console.log(timeBlock)
    }

  }else if  (currentTime === 13) {
    console.log("check 13")
    block9AM.attr('class', 'row time-block past');
    block10AM.attr('class', 'row time-block past');
    block11AM.attr('class', 'row time-block past');
    block12PM.attr('class', 'row time-block past');
    block1PM.attr('class', 'row time-block present');

    for (i = 14; i < 17 ; i++) {

      blockID = hashTag.concat(i);
      timeBlock = $(blockID);
      timeBlock.attr('class', 'row time-block future' );
      console.log(timeBlock)
    }
  }else if (currentTime === 14) {
    console.log("check 14")
    block9AM.attr('class', 'row time-block past');
    block10AM.attr('class', 'row time-block past');
    block11AM.attr('class', 'row time-block past');
    block12PM.attr('class', 'row time-block past');
    block1PM.attr('class', 'row time-block past');
    block2PM.attr('class', 'row time-block present');

    for (i = 15; i < 17 ; i++) {

      blockID = hashTag.concat(i);
      timeBlock = $(blockID);
      timeBlock.attr('class', 'row time-block future' );
      console.log(timeBlock)
    }
  }else if (currentTime === 15) {
    console.log("check 15")
    block9AM.attr('class', 'row time-block past');
    block10AM.attr('class', 'row time-block past');
    block11AM.attr('class', 'row time-block past');
    block12PM.attr('class', 'row time-block past');
    block1PM.attr('class', 'row time-block past');
    block2PM.attr('class', 'row time-block past');
    block3PM.attr('class', 'row time-block present');

    for (i = 16; i < 17 ; i++) {

      blockID = hashTag.concat(i);
      timeBlock = $(blockID);
      timeBlock.attr('class', 'row time-block future' );
      console.log(timeBlock)
    }
  }
  if (currentTime === 16) {
    console.log("check 15")
    block9AM.attr('class', 'row time-block past');
    block10AM.attr('class', 'row time-block past');
    block11AM.attr('class', 'row time-block past');
    block12PM.attr('class', 'row time-block past');
    block1PM.attr('class', 'row time-block past');
    block2PM.attr('class', 'row time-block past');
    block3PM.attr('class', 'row time-block past');
    block4PM.attr('class', 'row time-block present');

    for (i = 16; i < 17 ; i++) {

      blockID = hashTag.concat(i);
      timeBlock = $(blockID);
      timeBlock.attr('class', 'row time-block future' );
      console.log(timeBlock)
    }
  }else if (currentTime === 17) {
    console.log("check 15")
    block9AM.attr('class', 'row time-block past');
    block10AM.attr('class', 'row time-block past');
    block11AM.attr('class', 'row time-block past');
    block12PM.attr('class', 'row time-block past');
    block1PM.attr('class', 'row time-block past');
    block2PM.attr('class', 'row time-block past');
    block3PM.attr('class', 'row time-block past');
    block4PM.attr('class', 'row time-block past');
    block5PM.attr('class', 'row time-block present');
   
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
