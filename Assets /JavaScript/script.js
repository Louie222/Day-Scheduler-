//GIVEN I am using a daily planner to create a schedule
//WHEN I open the planner
//THEN the current day is displayed at the top of the calendar
var presentDay = moment().format("dddd LL");
console.log(presentDay)
$("#presentDay").append(presentDay);

//WHEN I scroll down
//THEN I am presented with timeblocks for standard business hours
//WHEN I view the timeblocks for that day
//THEN each timeblock is color coded to indicate whether it is in the past, present, or future




//WHEN I click into a timeblock
//THEN I can enter an event
//WHEN I click the save button for that timeblock
//THEN the text for that event is saved in local storage
//WHEN I refresh the page
//THEN the saved events persist

//This is the code for 9am

const storageInput9 = document.querySelector('.eventContent');
const saveButton = document.querySelector('.save');
const storedInput = localStorage.getItem('textInput');
// Insert past, present, future code here
if(storageInput9){
    storageInput9.textContent = storedInput

}



storageInput9.addEventListener('input', information =>{
    console.log(information.target.value)
    storageInput9.textContent = information.target.value
})

const saveToLocalStorage = () => {
    localStorage.setItem('textInput', storageInput9.textContent)
}

saveButton.addEventListener('click', saveToLocalStorage)

//This is the code for 10am
const storageInput10 = document.querySelector('.eventContent10');
const saveButton10 = document.querySelector('.save10');
const storedInput10 = localStorage.getItem('textInput10');
//// Insert past, present, future code here 
if(storageInput10){
    storageInput10.textContent = storedInput10

}

storageInput10.addEventListener('input', information =>{
    console.log(information.target.value)
    storageInput10.textContent = information.target.value
})

const saveToLocalStorage10 = () => {
    localStorage.setItem('textInput10', storageInput10.textContent)
}

//saveButton10.addEventListener('click', saveToLocalStorage10)

//This is the code for 11am
const storageInput11 = document.querySelector('.eventContent11');
const saveButton11 = document.querySelector('.save11');
const storedInput11 = localStorage.getItem('textInput11');

if(storageInput11){
    storageInput11.textContent = storedInput11

}

storageInput11.addEventListener('input', information =>{
    console.log(information.target.value)
    storageInput11.textContent = information.target.value
})

const saveToLocalStorage11 = () => {
    localStorage.setItem('textInput11', storageInput11.textContent)
}

saveButton11.addEventListener('click', saveToLocalStorage11)

//This is the code for 12pm
const storageInput12 = document.querySelector('.eventContent12');
const saveButton12 = document.querySelector('.save12');
const storedInput12 = localStorage.getItem('textInput12');

if(storageInput12){
    storageInput12.textContent = storedInput12

}

storageInput12.addEventListener('input', information =>{
    console.log(information.target.value)
    storageInput12.textContent = information.target.value
})

const saveToLocalStorage12 = () => {
    localStorage.setItem('textInput12', storageInput12.textContent)
}

saveButton12.addEventListener('click', saveToLocalStorage12)

//This is the code for 1pm
const storageInput1 = document.querySelector('.eventContent1');
const saveButton1 = document.querySelector('.save1');
const storedInput1 = localStorage.getItem('textInput1');

if(storageInput1){
    storageInput1.textContent = storedInput1

}

storageInput1.addEventListener('input', information =>{
    console.log(information.target.value)
    storageInput1.textContent = information.target.value
})

const saveToLocalStorage1 = () => {
    localStorage.setItem('textInput1', storageInput1.textContent)
}

saveButton1.addEventListener('click', saveToLocalStorage1)

//This is the code for 2pm
const storageInput2 = document.querySelector('.eventContent2');
const saveButton2 = document.querySelector('.save2');
const storedInput2 = localStorage.getItem('textInput2');

if(storageInput2){
    storageInput2.textContent = storedInput2

}

storageInput2.addEventListener('input', information =>{
    console.log(information.target.value)
    storageInput2.textContent = information.target.value
})

const saveToLocalStorage2 = () => {
    localStorage.setItem('textInput10', storageInput2.textContent)
}

saveButton2.addEventListener('click', saveToLocalStorage2)

//This is the code for 3pm
const storageInput3 = document.querySelector('.eventContent3');
const saveButton3 = document.querySelector('.save3');
const storedInput3 = localStorage.getItem('textInput3');

if(storageInput3){
    storageInput3.textContent = storedInput3

}

storageInput3.addEventListener('input', information =>{
    console.log(information.target.value)
    storageInput3.textContent = information.target.value
})

const saveToLocalStorage3 = () => {
    localStorage.setItem('textInput3', storageInput3.textContent)
}

saveButton3.addEventListener('click', saveToLocalStorage3)

//This is the code for 4pm
const storageInput4 = document.querySelector('.eventContent4');
const saveButton4 = document.querySelector('.save4');
const storedInput4 = localStorage.getItem('textInput4');

if(storageInput4){
    storageInput4.textContent = storedInput4

}

storageInput4.addEventListener('input', information =>{
    console.log(information.target.value)
    storageInput4.textContent = information.target.value
})

const saveToLocalStorage4 = () => {
    localStorage.setItem('textInput4', storageInput4.textContent)
}

saveButton4.addEventListener('click', saveToLocalStorage4)

//This is the code for 5pm
const storageInput5 = document.querySelector('.eventContent5');
const saveButton5 = document.querySelector('.save5');
const storedInput5 = localStorage.getItem('textInput5');

if(storageInput5){
    storageInput5.textContent = storedInput5

}

storageInput5.addEventListener('input', information =>{
    console.log(information.target.value)
    storageInput5.textContent = information.target.value
})

const saveToLocalStorage5 = () => {
    localStorage.setItem('textInput5', storageInput5.textContent)
}

saveButton5.addEventListener('click', saveToLocalStorage5)




















