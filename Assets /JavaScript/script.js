//GIVEN I am using a daily planner to create a schedule
//WHEN I open the planner

//THEN the current day is displayed at the top of the calendar

var presentDay = moment().format("dddd LL");
console.log(presentDay)
$("#presentDay").append(presentDay);

//WHEN I scroll down
//THEN I am presented with timeblocks for standard business hours

//const nineAM = document.getElementById('9am');
//const tenAM = document.getElementById('10am');
//const elevenAM = document.getElementById('11am');
//const twelvePM = document.getElementById('12pm');
//const onePM = document.getElementById('1pm');
//const twoPM = document.getElementById('2pm');
//const threePM = document.getElementById('3pm');
//const fourPM = document.getElementById('4pm');
//const fivePM = document.getElementById('5pm');

//WHEN I view the timeblocks for that day
//THEN each timeblock is color coded to indicate whether it is in the past, present, or future


//WHEN I click into a timeblock
//THEN I can enter an event
//WHEN I click the save button for that timeblock
//THEN the text for that event is saved in local storage
const storageInput = document.querySelector('.eventContent');
const saveButton = document.querySelector('.save');
const storedInput = localStorage.getItem('textInput');

if(storageInput){
    storageInput.textContent = storedInput

}

storageInput.addEventListener('input', information =>{
    console.log(information.target.value)
    storageInput.textContent = information.target.value
})

const saveToLocalStorage = () => {
    localStorage.setItem('textInput', storageInput.textContent)
}

saveButton.addEventListener('click', saveToLocalStorage)

//WHEN I refresh the page
//THEN the saved events persist









