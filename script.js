
const newGameButton = document.getElementById("newgamebtn")              // At load of page player will get prompted to enter a username
const someString = "Username";                                         // If blank alert enter username

newGameButton.addEventListener("click", function(){
  var userName = document.getElementById("myText").value;             // Username input, display instructions when press play
    if (userName === ""){
    alert('Please enter a username');
  } 
    else console.log("Letsplay", userName);
      document.getElementById("letsplay").innerHTML = "Lets play " + userName +" !";
      document.getElementById("instructions").innerHTML ="    The goal of the game is to guess who the person is behind the hidden card.<br>    You only have One guess. Choose a question and hit ASK to get more clues";
});

// This Array consist of all the people on the Cards with 7 properties (and one img property) and values

const people = [ {hair: 'blond', hairtype: 'short',sex:'man', mood:'angry', glasses: 'no', age:'no', beard: 'no', img: 'assets/images/characters/1.jpg'},
              {hair: 'blond', hairtype: 'long', sex: 'woman', mood: 'neutral',glasses: 'no', age:'no', beard: 'no', img: 'assets/images/characters/2.jpg'},
              {hair: 'black', hairtype: 'long', sex: 'woman', mood: 'neutral', glasses: 'no', age:'no', beard: 'no', img: 'assets/images/characters/3.jpg'},
              {hair: 'red', hairtype: 'long', sex: 'woman', mood: 'neutral', glasses: 'no', age:'no', beard: 'no', img: 'assets/images/characters/4.jpg'},
              {hair: 'blond', hairtype: 'long', sex: 'woman', mood: 'neutral',glasses: 'no', age:'no', beard: 'no', img: 'assets/images/characters/5.jpg'},
              {hair: 'black', hairtype: 'short', sex: 'man', mood: 'happy', glasses: 'no', age:'no', beard: 'no', img: 'assets/images/characters/6.jpg'},
              {hair: 'red', hairtype: 'long', sex: 'woman', mood: 'happy', glasses: 'no', age:'no', beard: 'no', img: 'assets/images/characters/7.jpg'},
              {hair: 'blond', hairtype: 'short', sex: 'man', mood: 'neutral', glasses: 'no', age:'no', beard: 'no', img: 'assets/images/characters/8.jpg'},
              {hair: 'black', hairtype: 'short', sex: 'man', mood: 'neutral', glasses: 'no', age:'no', beard: 'no', img: 'assets/images/characters/9.jpg'},
              {hair: 'brown', hairtype: 'short', sex: 'man', mood: 'happy', glasses: 'no', age:'no', beard: 'no', img: 'assets/images/characters/10.jpg'},
              {hair: 'blond', hairtype: 'short', sex: 'man', mood: 'happy', glasses: 'no', age:'no', beard: 'no', img: 'assets/images/characters/11.jpg'},
              {hair: 'red', hairtype: 'long', sex: 'woman', mood: 'angry', glasses: 'no', age:'no', beard: 'no', img: 'assets/images/characters/12.jpg'},
              {hair: 'blond', hairtype: 'long', sex: 'woman', mood: 'happy', glasses: 'no', age:'no', beard: 'no', img: 'assets/images/characters/13.jpg'},
              {hair: 'brown', hairtype: 'long', sex: 'woman', mood: 'neutral',glasses: 'no', age:'no', beard: 'no', img: 'assets/images/characters/14.jpg'},
              {hair: 'blond', hairtype: 'short', sex: 'man', mood: 'neutral',glasses: 'no', age:'no', beard: 'no', img: 'assets/images/characters/15.jpg'},
              {hair: 'blond', hairtype: 'short', sex: 'man', mood: 'happy', glasses: 'no', age:'no', beard: 'no', img: 'assets/images/characters/16.jpg'},
              {hair: 'white', hairtype: 'short', sex: 'man', mood: 'neutral', glasses: 'no', age:'no', beard: 'no', img: 'assets/images/characters/17.jpg'},
              {hair: 'blond', hairtype: 'short', sex: 'woman', mood: 'happy', glasses: 'yes', age:'no', beard: 'no', img: 'assets/images/characters/18.jpg'},
              {hair: 'black', hairtype: 'short', sex: 'man', mood: 'happy', glasses: 'yes', age:'no', beard: 'no', img: 'assets/images/characters/19.jpg'},
              {hair: 'blond', hairtype: 'short', sex: 'man', mood: 'neutral', glasses: 'no', age:'no', beard: 'yes', img: 'assets/images/characters/20.jpg'},
              {hair: 'brown', hairtype: 'long', sex: 'woman', mood: 'neutral', glasses: 'no', age:'no', beard: 'no', img: 'assets/images/characters/21.jpg'},
              {hair: 'blond', hairtype: 'long', sex: 'woman', mood: 'neutral', glasses: 'no', age:'no', beard: 'no', img: 'assets/images/characters/22.jpg'},
              {hair: 'no', hairtype: 'no', sex: 'man', mood: 'neutral', glasses: 'no', age:'yes', beard: 'no', img: 'assets/images/characters/23.jpg'},
              {hair: 'no', hairtype: 'no', sex: 'man', mood: 'neutral', glasses: 'no', age:'yes', beard: 'no', img: 'assets/images/characters/24.jpg'},
              {hair: 'blond', hairtype: 'long', sex: 'woman', mood: 'neutral', glasses: 'no', age:'no', beard: 'no', img: 'assets/images/characters/25.jpg'},
              {hair: 'blond', hairtype: 'long', sex: 'man', mood: 'happy', glasses: 'no', age:'no', beard: 'no', img: 'assets/images/characters/26.jpg'},
              {hair: 'brown', hairtype: 'long', sex: 'woman', mood: 'neutral', glasses: 'no', age:'no', beard: 'no', img: 'assets/images/characters/27.jpg'},
              {hair: 'brown', hairtype: 'short', sex: 'man', mood: 'angry', glasses: 'no', age:'no', beard: 'no', img: 'assets/images/characters/28.jpg'},
              {hair: 'brown', hairtype: 'long', sex: 'woman', mood: 'happy', glasses: 'no', age:'no', beard: 'no', img: 'assets/images/characters/29.jpg'},
              {hair: 'blond', hairtype: 'long', sex: 'woman', mood: 'angry', glasses: 'no', age:'no', beard: 'no', img: 'assets/images/characters/30.jpg'}
            ]

hiddenpeople =['1.jpg', '2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','10.jpg','11.jpg','12.jpg','13.jpg','14.jpg','15.jpg',
               '16.jpg','17.jpg','18.jpg','19.jpg','20.jpg','21.jpg','22.jpg','23.jpg','24.jpg','25.jpg','26.jpg','27.jpg','28.jpg','29.jpg','30.jpg']



//----------  RADIOBUTTONS

// Function that check what button was selected when submitting form 
// and its value and id 

const radioChecked = e => {
  
  let radioButtons = document.getElementsByName('radio');
  for (let radio of radioButtons) {
     if (radio.checked) {
      document.getElementById("instructions").innerHTML = "You asked if " + radio.id + " is " + radio.value;
      console.log("You asked if " + radio.id + " is " + radio.value);
      let questionProp = radio.id;
      let questionVal = radio.value;
      const filteredPeople = filterPeople(people, {
         [questionProp]: questionVal,
    });
    filteredPeople.forEach(person => {                  // 
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


// ----- On new game button click random hidden Guess Who card is generated

function renderHiddenImage(){                                      
  random_index = Math.floor(Math.random() * hiddenpeople.length);
  selected_image = hiddenpeople[random_index]
  let person = document.getElementById('slot1')
  let hiddencard = document.getElementById('slot1').src =`/assets/images/characters/${selected_image}`
  hiddencard = (getFilename(hiddencard));
  console.log(hiddencard);
  return hiddencard, person;

}


function StripImg(fullPath) {                       //  Returns the array ValuesWithoutImg as only ID numbers (eg. 3, 12, 29 ) 
  let ValueId = fullPath.replace(/^.*[\\\/]/, '');
  ValueId = removeExtension(ValueId);
  if (ValueId < 29){
    const MyList = document.getElementById("card" + ValueId );    // str "card" is added for each id passed and added to classList 
    console.log(MyList);
    MyList.classList.toggle('slot');
    MyList.classList.add('fade');
    console.log(MyList.classList);                                 // Each card is added the class fade which dims brightness
  }
  else{
    // do nothing
  }                                          // Add style to selected Cards
}


function changeStyle(){  
  const element = document.querySelector("#slot1");    // Makes hidden card invisible when pushing new game button
  var sheet = document.createElement('style')
  sheet.innerHTML = "#slot1{filter: brightness(0%);}";
  document.body.appendChild(sheet);
}


// ----  Utils  ---------------

function getFilename(fullPath) {                    //  Returns the img filename without the path 
  return fullPath.replace(/^.*[\\\/]/, '');
}



function addSpace(str) {                // adds a space between valueId as this is needed to use with innerHTML 
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

const imgPressed = e => {
  var userguess = (e.target.id + ".jpg");
  console.log(userguess);
  //guessPerson(userguess);
  // The card the user clicks after pushed the guess button
}

for (let image of images) {
  image.addEventListener("click", imgPressed);
}


// USERGUESS
const guessbutton = document.getElementById("guess");

var images = document.querySelectorAll('img');
gueessBtn = document.getElementById("guess");
gueessBtn.addEventListener('click', function(){

  if (gueessBtn = "clicked"){
  images.forEach(function(image) {
    image.addEventListener('click', imgPressed(image));
});
}
})

if (newGameButton, "click"){
function renderBoardImages(Array){
   for (var i = 0; i <= 29; ++i){
   index = (29 - i);
   selected_image = hiddenpeople[index];
   document.getElementById("card" + index).src =`/assets/images/characters/${selected_image}`
 }}}
 else{
  // do nothing
 }

if (newGameButton, "click"){
renderBoardImages(hiddenpeople);
}
else{
  document.getElementById("instructions").innerHTML = "You asked if " + radio.id + " is " + radio.value;
  setTimeout();
  
}


function guessPerson(userguess, hiddencard){
    if (userguess= hiddencard){      // When clicked guess who the first card clicked after 
      document.getElementById("guess").innerHTML ='Its Correct!';
      setTimeout();
      }
    else
    {
    document.getElementById("guess").innerHTML ='GAME OVER';
    setTimeout();
  }
}

var delayInMilliseconds = 2000; //1 second

setTimeout(function() {
  // do nothing
}, delayInMilliseconds);
