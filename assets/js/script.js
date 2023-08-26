import { people } from "../js/people.js"
import { hiddenpeople } from "../js/hiddenpeople.js"

document.addEventListener("DOMContentLoaded", function () {

});

const newGameButton = document.getElementById("newgamebtn")        // At load of page player will get prompted to enter a username
let someString = "Username";                                     // If blank alert enter username

newGameButton.addEventListener("click", function(){
var userName = document.getElementById("myText").value;         // Username input, display instructions when press play
if (userName === ""){
alert('Please enter a username');
} 
  document.getElementById("letsplay").innerHTML = "Lets play " + userName +" !";
  document.getElementById("instructions").innerHTML ="    The goal of the game is to guess who the person is behind the hidden card.<br>    You only have One guess. Choose a question and hit ASK to get more clues";
});


newGameButton("click", renderHiddenImage, renderBoardImages, changeStyle);

//----------  RADIOBUTTONS

// Function that checks what button was selected when user push ask button 
// and its value and id ..that is ( value and prop )

let radioChecked = e => {
let radioButtons = document.getElementsByName('radio');
for (let radio of radioButtons) {
 if (radio.checked) {
  document.getElementById("instructions").innerHTML = "You asked if " + radio.id + " is " + radio.value;
  let questionProp = radio.id;
  let questionVal = radio.value;
  const filteredPeople = filterPeople(people, {
     [questionProp]: questionVal,
});
filteredPeople.forEach(person => {                 
  const values = Object.values(person);
  const ValuesWithoutImg = values.filter((value, index) =>{
  const props = Object.keys(person);
    return props[index] === 'img';
  });
  ValuesWithoutImg.forEach(element => StripImg(element));   // Function executes a provided function once for each array element
});
}};
}


// FilterFunction with filters{ questionProp: questionVal }

function filterPeople(people, filters) {
return people.filter(person => {
return Object.entries(filters).every(([prop, value]) => {
  return person[prop] === value;
});
});
}

function renderHiddenImage(){                                      
let random_index = Math.floor(Math.random() * hiddenpeople.length);
let selected_image = hiddenpeople[random_index]
let person = document.getElementById('slot1')
let hiddencard = document.getElementById('slot1').src =`./assets/images/characters/${selected_image}`
hiddencard = (getFilename(hiddencard));
return renderHiddenImage, hiddencard, person;
}


// ----- On new game button click random hidden Guess Who card is generated
var hiddencard = renderHiddenImage();
var userguess = userguess;

function guessPerson(){                                           
document.getElementById("guess").innerHTML ='Click on who you think it is';
var img_src = document.getElementById("slot1").src;
img_src = ("card" + getFilename(img_src));
                    // Guess function: The player first clicks on the person he/she thinks it is
                    // Then clicks the button to confirm if the guess is correct
if (userguess.toString() === img_src.toString())    // The result win or lose is declared and the hiddencard is displayed to the user
{
document.getElementById("guess").innerHTML ='Its correct ! You win !';
var sheet = document.createElement('style')
sheet.innerHTML = "#slot1{filter: brightness(100%);}";
document.body.appendChild(sheet);
}
else
{
document.getElementById("guess").innerHTML ='Sorry wrong guess ! You lose !';
var sheet = document.createElement('style')
sheet.innerHTML = "#slot1{filter: brightness(100%);}";
document.body.appendChild(sheet);
}
}




function StripImg(fullPath) {
var img_src = document.getElementById("slot1").src;
img_src = ("card" + getFilename(img_src));
let ValueId = fullPath.replace(/^.*[\\\/]/, '');
ValueId = removeExtension(ValueId);                       //  Returns the array ValuesWithoutImg as only ID numbers (eg. 3, 12, 29 )
if (("card" + ValueId + ".jpg").toString() === (img_src.toString()))
{
document.getElementById("instructions").innerHTML = "The Hidden Card has this Attribute !";
return img_src;
}
else
{  
if (ValueId <= 30){
  const MyList = document.getElementById("card" + ValueId );    // str "card" is added for each id passed and added to classList 
  MyList.classList.remove('slot');
  MyList.classList.add('fade');
}
else{
  // do nothing
}                                        
}}

function changeStyle(){  
const element = document.querySelector("#slot1");    // Makes hidden card blacked out when pushing new game button
var sheet = document.createElement('style')
sheet.innerHTML = "#slot1{filter: brightness(0%);}";
document.body.appendChild(sheet);
}


// ----  Utils  ---------------

function getFilename(fullPath) {              //  Returns the img filename without the path 
return fullPath.replace(/^.*[\\\/]/, '');
}



function addSpace(str) {                // adds a space between valueId as this is needed to use with some innerHTML 
return str.split('').join(' ');
}

function removeExtension(filename) {
return filename.substring(0, filename.lastIndexOf('.')) || filename;

}

// USERGUESS AND HIDDENCARD FUNCTIONS
// When user click on boardcards the selected cards name is returned as userguess (*.jpg)
// This lets us compare to the hiddencard (x.jpg)

// CLICKED CARD
var images = document.querySelectorAll('img');

let imgPressed = e => {
userguess = (e.target.id + ".jpg")
console.log(userguess);
return userguess;
// This is console logged to show clicked cards id
// The card the user clicks before pushing the guess button
}

for (let image of images) {
image.addEventListener("click", imgPressed);
}
var images = document.querySelectorAll('img');

function renderBoardImages(Array){
for (var i = 1; i <= 29; ++i){
let index = (30 - i);
let /*  */selected_image = hiddenpeople[index];
document.getElementById("card" + (index + 1)).src =`./assets/images/characters/${selected_image}`
}}

if (newGameButton, "click"){
renderBoardImages(hiddenpeople);
}
else{

}

function innerHtml(){
document.getElementById("instructions").innerHTML = "You asked if " + radio.id + " is " + radio.value;
}