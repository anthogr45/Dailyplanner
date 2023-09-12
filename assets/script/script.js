var wdDate = $('#currentDay');

var today = dayjs().format('ddd, MMM D, YYYY h:mm A');
var todaysDate = dayjs().format('DD/MM/YYYY');
$(wdDate).text(today);

var clockTime = dayjs().format('HH'); //Hour was assigned to have the time stamp comparison to change the Color class of the each event block
var currentTime = parseInt(clockTime); // Hour value was changed to an integer type

var block9AM = $('#9');
var block10AM = $('#10'); //This is to get the Element ID of each time event.
var block11AM = $('#11');
var block12PM = $('#12');
var block1PM = $('#13');
var block2PM = $('#14');
var block3PM = $('#15');
var block4PM = $('#16');
var block5PM = $('#17');



var blockBtn9 = $('#btn9'); // Element ID of the save buttons
var blockBtn10 = $('#btn10') 
var blockBtn11 = $('#btn11')
var blockBtn12 = $('#btn12')
var blockBtn13 = $('#btn13')
var blockBtn14 = $('#btn14')
var blockBtn15 = $('#btn15')
var blockBtn16 = $('#btn16')
var blockBtn17 = $('#btn17')

var idnum = 9 
var hashTag = '#'
var blockID =  0
var timeBlock = ''


function  colorBlock () {
 
  if (currentTime < idnum) {  // Changes the class type of the Time Event Boxes to be Future if the current time is ealier than 9am
    
    for (var i = 9; i < 17 ; i++) {  

      blockID = hashTag.concat(i);
      timeBlock = $(blockID);
      timeBlock.attr('class', 'row time-block future' );
    }

  }else if (currentTime === 9) { //Change the event class to be of present time for the 9am block and the rest to be of future

    block9AM.attr('class', 'row time-block present')
    
    for (i = 10; i < 17 ; i++) {

      blockID = hashTag.concat(i);
      timeBlock = $(blockID);
      timeBlock.attr('class', 'row time-block future' );
    }
    
  }else if (currentTime  === 10) { //Change the event class to be of present time for the 10am block and the rest to be of past (9am) and future
    
    block9AM.attr('class', 'row time-block past');
    block10AM.attr('class', 'row time-block present');

    for (i = 11; i < 17 ; i++) {

      blockID = hashTag.concat(i);
      timeBlock = $(blockID);
      timeBlock.attr('class', 'row time-block future' );
    }
  }else if (currentTime === 11) {
   
    block9AM.attr('class', 'row time-block past');
    block10AM.attr('class', 'row time-block past');
    block11AM.attr('class', 'row time-block present');

    for (i = 12; i < 17 ; i++) {

      blockID = hashTag.concat(i);
      timeBlock = $(blockID);
      timeBlock.attr('class', 'row time-block future' );
    }
  }else if (currentTime === 12) { //Change the event class to be of present time for the 12pm block and the rest to be of past  and future

    block9AM.attr('class', 'row time-block past');
    block10AM.attr('class', 'row time-block past');
    block11AM.attr('class', 'row time-block past');
    block12PM.attr('class', 'row time-block present');

    for (i = 13; i < 17 ; i++) {

      blockID = hashTag.concat(i);
      timeBlock = $(blockID);
      timeBlock.attr('class', 'row time-block future' );
    }

  }else if  (currentTime === 13) {

    block9AM.attr('class', 'row time-block past');
    block10AM.attr('class', 'row time-block past');
    block11AM.attr('class', 'row time-block past');
    block12PM.attr('class', 'row time-block past');
    block1PM.attr('class', 'row time-block present');

    for (i = 14; i < 17 ; i++) {

      blockID = hashTag.concat(i);
      timeBlock = $(blockID);
      timeBlock.attr('class', 'row time-block future' );
    }
  }else if (currentTime === 14) { //Change the event class to be of present time for the 2pm block and the rest to be of past  and future

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
    
    block9AM.attr('class', 'row time-block past');
    block10AM.attr('class', 'row time-block past');
    block11AM.attr('class', 'row time-block past');
    block12PM.attr('class', 'row time-block past');
    block1PM.attr('class', 'row time-block past');
    block2PM.attr('class', 'row time-block past');
    block3PM.attr('class', 'row time-block past');
    block4PM.attr('class', 'row time-block present');

    for (i = 17; i < 17 ; i++) {

      blockID = hashTag.concat(i);
      timeBlock = $(blockID);
      timeBlock.attr('class', 'row time-block future' );
      console.log(timeBlock)
    }
  }else if (currentTime === 17) {
    
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


blockBtn9.on('click', function(event) { //Save button click event. Gathers the data from the txtareas and store the value in the Local storage as an Object
  
    event.preventDefault();
    textData = $("#txt9").val();
    boxID = this.parentNode.id;

    var eventSave = {Date:todaysDate, eventBoxID:boxID, eventTXT:textData};
    localStorage.setItem('eventSave9', JSON.stringify(eventSave)) //Data (Date, Event clock ID, event text) is stored as an object in the local storage

    alert('Hello World');
    
});

blockBtn10.on('click', function(event) {
 
  event.preventDefault();
  textData = $("#txt10").val();
  boxID = this.parentNode.id;

  var eventSave = { todaysDate, eventBoxID:boxID, eventTXT:textData};
  localStorage.setItem('eventSave10', JSON.stringify(eventSave))

});

blockBtn11.on('click', function(event) {

  event.preventDefault();
  textData = $("#txt11").val();
  boxID = this.parentNode.id;

  var eventSave = { todaysDate, eventBoxID:boxID, eventTXT:textData};
  localStorage.setItem('eventSave11', JSON.stringify(eventSave))
  
});

blockBtn12.on('click', function(event) {
  
  event.preventDefault();
  textData = $("#txt12").val();
  boxID = this.parentNode.id;

  var eventSave = { todaysDate, eventBoxID:boxID, eventTXT:textData};
  localStorage.setItem('eventSave12', JSON.stringify(eventSave))
    
  
});

blockBtn13.on('click', function(event) {
 
  event.preventDefault();
  textData = $("#txt13").val();
  boxID = this.parentNode.id;

  var eventSave = { todaysDate, eventBoxID:boxID, eventTXT:textData};
  localStorage.setItem('eventSave13', JSON.stringify(eventSave))
   
});

blockBtn14.on('click', function(event) {
  
  event.preventDefault();
  textData = $("#txt14").val();
  boxID = this.parentNode.id;
 
  var eventSave = { todaysDate, eventBoxID:boxID, eventTXT:textData};
  localStorage.setItem('eventSave14', JSON.stringify(eventSave))
 
});

blockBtn15.on('click', function(event) {

  event.preventDefault();
  textData = $("#txt15").val();
  boxID = this.parentNode.id;

  var eventSave = { Date:todaysDate, eventBoxID:boxID, eventTXT:textData};
  localStorage.setItem('eventSave15', JSON.stringify(eventSave))

});

blockBtn16.on('click', function(event) {

  event.preventDefault();
  textData = $("#txt16").val();
  boxID = this.parentNode.id;

  var eventSave = { todaysDate, eventBoxID:boxID, eventTXT:textData};
  localStorage.setItem('eventSave16', JSON.stringify(eventSave))
  console.log(textData);

});

blockBtn17.on('click', function(event) {
  
  event.preventDefault();
  textData = $("#txt17").val();
  boxID = this.parentNode.id;

  var eventSave = { todaysDate, eventBoxID:boxID, eventTXT:textData};
  localStorage.setItem('eventSave17', JSON.stringify(eventSave))

});


var getDataObj = {};

// Get the saved data from the local storage to each event block. 
//Each individual Function will check for Null fields
 // If the local storage field are NULL. THe function will save a text record ("No saved event information") to each NULl time boxes.
function getdataBox9 () {
  getDataObj = JSON.parse(localStorage.getItem('eventSave9'))
  
  if ((getDataObj) !== null ) {
      $("#txt9").text (getDataObj.eventTXT);
      
  } 
  if (getDataObj === null ) {
      var noData = "No saved event information"
      var tempID = "9"
      var eventSave = { todaysDate, eventBoxID:tempID, eventTXT:noData};
      localStorage.setItem('eventSave9', JSON.stringify(eventSave))
  }
  return;
  }

  function getdataBox10 () {

    getDataObj = JSON.parse(localStorage.getItem('eventSave10'))
    
    if ((getDataObj) !== null ) {
      $("#txt10").text (getDataObj.eventTXT);
      
    }  
        
    if (getDataObj === null ) {
        
      var noData = "No saved event information"
      var tempID = "10"
      var eventSave = { todaysDate, eventBoxID:tempID, eventTXT:noData};
      localStorage.setItem('eventSave10', JSON.stringify(eventSave))
    } 
    return;
  }

  function getdataBox11 () {
    getDataObj = JSON.parse(localStorage.getItem('eventSave11'))
  
    if ((getDataObj) !== null ) {
        $("#txt11").text (getDataObj.eventTXT);
      
    } 
    if (getDataObj === null ) {
        var noData = "No saved event information"
        var tempID = "11"
        var eventSave = { todaysDate, eventBoxID:tempID, eventTXT:noData};
        localStorage.setItem('eventSave11', JSON.stringify(eventSave))
    }
    return;
  }

  function getdataBox12 () {

    getDataObj = JSON.parse(localStorage.getItem('eventSave12'))

    if ((getDataObj) !== null ) {
      $("#txt12").text (getDataObj.eventTXT);
    }  
  
  
    if (getDataObj === null ) {
      console.log('null');  

      var noData = "No saved event information"
      var tempID = "12"
      var eventSave = { todaysDate, eventBoxID:tempID, eventTXT:noData};
      localStorage.setItem('eventSave12', JSON.stringify(eventSave))
    } 
    return;
  }

  function getdataBox13 () {

    getDataObj = JSON.parse(localStorage.getItem('eventSave13'))


    if (getDataObj === null ) {
      console.log('null');  
            var noData = "No saved event information"
      var tempID = "13"
      var eventSave = { todaysDate, eventBoxID:tempID, eventTXT:noData};
      localStorage.setItem('eventSave13', JSON.stringify(eventSave))
    } 
    
    if ((getDataObj) !== null ) {
      $("#txt13").text (getDataObj.eventTXT);
    }  
    return;
  }

  function getdataBox14 () {

    getDataObj = JSON.parse(localStorage.getItem('eventSave14'))

    if ((getDataObj) !== null ) {
     
      $("#txt14").text (getDataObj.eventTXT);
    }  
    if (getDataObj === null ) {
      var noData = "No saved event information"
      var tempID = "14"
      var eventSave = { todaysDate, eventBoxID:tempID, eventTXT:noData};
      localStorage.setItem('eventSave14', JSON.stringify(eventSave))
    } 
    return;
  }

  function getdataBox15 () {

    getDataObj = JSON.parse(localStorage.getItem('eventSave15'))

    if ((getDataObj) !== null ) {
       
      $("#txt15").text (getDataObj.eventTXT);
    }  
    if (getDataObj === null ) {
      var noData = "No saved event information"
      var tempID = "15"
      var eventSave = { todaysDate, eventBoxID:tempID, eventTXT:noData};
      localStorage.setItem('eventSave15', JSON.stringify(eventSave))
    } 
    return;
  }

  function getdataBox16 () {

    getDataObj = JSON.parse(localStorage.getItem('eventSave16'))

    if ((getDataObj) !== null ) {
      $("#txt16").text (getDataObj.eventTXT);
    }  
    if (getDataObj === null ) {
      var noData = "No saved event information"
      var tempID = "16"
      var eventSave = { todaysDate, eventBoxID:tempID, eventTXT:noData};
      localStorage.setItem('eventSave16', JSON.stringify(eventSave))
    } 
    return;
  }

  function getdataBox17 () {

    getDataObj = JSON.parse(localStorage.getItem('eventSave11'))

    if ((getDataObj) !== null ) {
      $("#txt17").text (getDataObj.eventTXT);
    }  
    if (getDataObj === null ) {
      var noData = "No saved event information"
      var tempID = "17"
      var eventSave = { todaysDate, eventBoxID:tempID, eventTXT:noData};
      localStorage.setItem('eventSave17', JSON.stringify(eventSave))
    } 
    return;
  }
  getdataBox9 ()
  getdataBox10 ()
  getdataBox11 ()
  getdataBox12 ()
  getdataBox13 ()
  getdataBox14 ()
  getdataBox15 ()
  getdataBox16 ()
  getdataBox17 ()
 
 
  colorBlock ();













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
