var wdDate = $('#currentDay');
var btnDateSearch = $('#btnDate');

var today = dayjs().format('ddd, MMM D, YYYY h:mm A');
var todaysDate = dayjs().format('DD/MM/YYYY');
console.log(today);
console.log(todaysDate);
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



var blockBtn9 = $('#btn9');
var blockBtn10 = $('#btn10') 
var blockBtn11 = $('#btn11')
var blockBtn12 = $('#btn12')
var blockBtn13 = $('#btn13')
var blockBtn14 = $('#btn14')
var blockBtn15 = $('#btn15')
var blockBtn16 = $('#btn16')
var blockBtn17 = $('#btn17')






var block9AMTXT = $('#txt9');


var block10 = 10;
var block10AMTXT = $('#txt10');
var block10AMBtn = $('btn10');


var block11 = 11;
var block11AMTXT = $('#txt11');
var block11AMBtn = $('btn11');


var block12 = 12;
var block12PMTXT = $('#txt12');
var block12PMBtn = $('btn12');


var block13 = 13;
var block12PMTXT = $('#txt12');
var block12PMBtn = $('btn13');


var block14 = 14;
var block2PMTXT = $('#txt2');
var block2PMBtn = $('btn14');

var block15 = 15;
var block3PMTXT = $('#txt3');
var block3PMBtn = $('btn15');

var block16 = 16;
var block4PMTXT = $('#txt4');
var block4PMBtn = $('btn16');

var block17 = 17;
var block5PMTXT = $('#txt5');
var block4PMBtn = $('btn17');


var idnum = 9 
var hashTag = '#'
var blockID =  0
var timeBlock = ''
// var timeCheck = currentTime;

//  currentTime = 16;

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
      // console.log(timeBlock)
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
  } else if (currentTime === 16) {
    console.log("check 16")
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



var textData = null
var boxID 
var saveData = []

// var eventSave = { eventBoxID: }



blockBtn9.on('click', function(event) {
    // alert('Hello World');
    event.preventDefault();
    textData = $("#txt9").val();
    // if (textData != "") {
      boxID = this.parentNode.id;

      var eventSave = {Date:todaysDate, eventBoxID:boxID, eventTXT:textData};
      localStorage.setItem('eventSave9', JSON.stringify(eventSave))

      // localStorage.setItem('BoxID', boxID);
      // localStorage.setItem('EventInfo', textData);
      // console.log(textData);
      
    // } else{
      alert('Hello World');
    // }

    // boxID = this.parentNode.id;

    // localStorage.setItem('BoxID', boxID);
    // localStorage.setItem('EventInfo', textData);

    // console.log(textData);

});

blockBtn10.on('click', function(event) {
  alert('Hello World');
  event.preventDefault();
  textData = $("#txt10").val();
  // if (textData != "") {
    boxID = this.parentNode.id;

    var eventSave = { todaysDate, eventBoxID:boxID, eventTXT:textData};
    localStorage.setItem('eventSave10', JSON.stringify(eventSave))
    console.log(textData);
    
  // } else{
    alert('Hello World');
  // }
});

blockBtn11.on('click', function(event) {
  alert('Hello World');
  event.preventDefault();
  textData = $("#txt11").val();
  // if (textData != "") {
    boxID = this.parentNode.id;

    var eventSave = { todaysDate, eventBoxID:boxID, eventTXT:textData};
    localStorage.setItem('eventSave11', JSON.stringify(eventSave))
    
    
    console.log(textData);
    
  // } else{
    // alert('Hello World');
  // }
});

blockBtn12.on('click', function(event) {
  alert('Hello World');
  event.preventDefault();
  textData = $("#txt12").val();
  // if (textData != "") {
    boxID = this.parentNode.id;

    var eventSave = { todaysDate, eventBoxID:boxID, eventTXT:textData};
    localStorage.setItem('eventSave12', JSON.stringify(eventSave))
    
    
    console.log(textData);
    
  // } else{
    // alert('Hello World');
  // }
});

blockBtn13.on('click', function(event) {
  alert('Hello World');
  event.preventDefault();
  textData = $("#txt13").val();
  // if (textData != "") {
    boxID = this.parentNode.id;

  var eventSave = { todaysDate, eventBoxID:boxID, eventTXT:textData};
  localStorage.setItem('eventSave13', JSON.stringify(eventSave))
   
    
  console.log(textData);
    
  // } else{
    // alert('Hello World');
  // }
});

blockBtn14.on('click', function(event) {
  alert('Hello World');
  event.preventDefault();
  textData = $("#txt14").val();
  // if (textData != "") {
  boxID = this.parentNode.id;
  var eventSave = { todaysDate, eventBoxID:boxID, eventTXT:textData};
  localStorage.setItem('eventSave14', JSON.stringify(eventSave))
    
    
    console.log(textData);
    
  // } else{
    // alert('Hello World');
  // }
});

blockBtn15.on('click', function(event) {
  alert('Hello World');
  event.preventDefault();
  
  textData = $("#txt15").val();
  // if (textData != "") {
  boxID = this.parentNode.id;

  var eventSave = { Date:todaysDate, eventBoxID:boxID, eventTXT:textData};
  localStorage.setItem('eventSave15', JSON.stringify(eventSave))
  console.log(textData);
    
  // } else{
    // alert('Hello World');
  // }
});

blockBtn16.on('click', function(event) {
  alert('Hello World');
  event.preventDefault();
  textData = $("#txt16").val();
  // if (textData != "") {
    boxID = this.parentNode.id;

  var eventSave = { todaysDate, eventBoxID:boxID, eventTXT:textData};
  localStorage.setItem('eventSave16', JSON.stringify(eventSave))
  console.log(textData);
    
  // } else{
    // alert('Hello World');
  // }
});

blockBtn17.on('click', function(event) {
  alert('Hello World');
  event.preventDefault();
  textData = $("#txt17").val();
  // if (textData != "") {
    boxID = this.parentNode.id;

  var eventSave = { todaysDate, eventBoxID:boxID, eventTXT:textData};
  localStorage.setItem('eventSave17', JSON.stringify(eventSave))
  console.log(textData);
    
  // } else{
    // alert('Hello World');
  // }
});


var getDataObj = {};


function getData () {

 

  getDataObj = JSON.parse(localStorage.getItem('eventSave9'))
  
    if ((getDataObj.eventTXT) !== null ) {
        $("#txt9").text (getDataObj.eventTXT);
        console.log("Got data");
    } else {
        console.log('null');
  }

  // getDataObj = JSON.parse(localStorage.getItem('eventSave10'))
  // getDataObj = JSON.parse(JSON.parse(localStorage.getItem('eventSave10'))?.user || "{}")?.currentUser?.accessToken
  
  // $("#txt10").text (getDataObj.eventTXT);
  // if ((getDataObj.eventTXT) !== null ) {
  //   console.log('NO null');  
  //   $("#txt10").text (getDataObj.eventTXT);
  //     // console.log("Got data");
  // // } else {
  //     console.log('null');
  } 

  getDataObj = JSON.parse(JSON.parse(localStorage.getItem('eventSave11'))?.user || "{}")?.currentUser?.accessToken
  
  if (getDataObj == null ) {
    console.log('null');  

    var noData = "No Event Data Saved"
    var tempID = "10"
    var eventSave = { todaysDate, eventBoxID:tempID, eventTXT:noData};
    localStorage.setItem('eventSave11', JSON.stringify(eventSave))
   // $("#txt11").text (getDataObj.eventTXT);
      // console.log("Got data");
  // } else {
      console.log('null');
  } else if (getDataObj !== null ) {
    console.log('NO null');  
    $("#txt10").text (getDataObj.eventTXT);
  }





  // $("#txt9").text (getDataObj.eventTXT);
  // console.log("Got data");







  



// // $(document).ready(function() {
 getData ()

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
