document.addEventListener("DOMContentLoaded", function () {
  //userInput = document.getElementById('userInput')
  //userInput.addEventListener('input', (e) => {

    })
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




document.addEventListener('change', (e) => {

   const question = e;
   console.log(question)
});


// let sexVal = document.querySelector('input[name="sex"]:checked').value
//   if sexVal = 'checked'
// then let sexVal =  



let sexVal = document.querySelector('input[name="sex"]:checked')         // Input of property from radio buttons 
let hairVal = document.querySelector('input[name="hair"]:checked')
let hairtypeVal = document.querySelector('input[name="hairtype"]:checked')
let moodVal = document.querySelector('input[name="mood"]:checked')
let ageVal = document.querySelector('input[name="age"]:checked')
let glassesVal = document.querySelector('input[name="glasses"]:checked')
let beardVal = document.querySelector('input[name="beard"]:checked')

function Question(){
}


hiddenpeople =['1.jpg', '2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','10.jpg','11.jpg','12.jpg','13.jpg','14.jpg','15.jpg',
               '16.jpg','17.jpg','18.jpg','19.jpg','20.jpg','21.jpg','22.jpg','23.jpg','24.jpg','25.jpg','26.jpg','27.jpg','28.jpg','29.jpg','30.jpg']



function renderHiddenImage(){                                                     // On new game button click random hidden card is generated
  random_index = Math.floor(Math.random() * hiddenpeople.length);
  selected_image = hiddenpeople[random_index]
  let person = document.getElementById('slot1')
  let hiddencard = document.getElementById('slot1').src =`/assets/images/characters/${selected_image}`
  hiddencard = (getFilename(hiddencard));
  console.log(hiddencard);
    return hiddencard;
}

function getFilename(fullPath) {                    //  Returns the img filename without the path 
  return fullPath.replace(/^.*[\\\/]/, '');
}



function changeStyle(){                                // Makes hidden card invisible when pressing new game button
  var element = document.getElementById("slot1");
  var sheet = document.createElement('style')
  sheet.innerHTML = "#slot1{filter: brightness(0%);}";
  document.body.appendChild(sheet);
}



var images = document.getElementsByTagName("img");

const imgPressed = e => {
  console.log(e.target.id + ".jpg");
  var userguess = (e.target.id + ".jpg");
    return userguess   // The card that the user clicked after guess button
}

for (let image of images) {
  image.addEventListener("click", imgPressed);
}

const guessbutton = document.getElementById("guess");

function guessCard(){
  guessbutton.addEventListener("click", imgPressed);
}

const imgGuessed = e => {
  console.log(e.target.name);  // Get name of Clicked Element
}


function renderBoardImages(Array){
   for (var i = 0; i <= 29; ++i){
   index = (29 - i);
   selected_image = hiddenpeople[index];
   document.getElementById(index).src =`/assets/images/characters/${selected_image}`
 }}

renderBoardImages(hiddenpeople);



function guessPerson(){
    if (userguess = guessimage)
      alert('Its Correct!');
    else
      alert('GAME OVER');
  }



function ask(){

  document.getElementsByClassName("DIALOG").innerHTML = "Good, now just hit ask";
}






function filteredPeople(){
const filteredpeople = people.filter(value => value.sex === 'man');
  people.filter(person => {
    return person[prop] === value;
  })                               // filter people function
console.table(filteredpeople);
}
// Nu har du filteredpeople som output ex alla 'män'



class AudioController {
  constructor() {
      this.bgMusic = new Audio('assets/sounds/backgr_music.wav');
      this.flipSound = new Audio('');
      this.matchSound = new Audio('');
      this.victorySound = new Audio('');
      this.gameOverSound = new Audio('');
      this.bgMusic.volume = 0.5;
      this.bgMusic.loop = true;
  }

  startMusic() {
    this.bgMusic.play();
  }

startMusic() {
    this.bgMusic.play();
}
stopMusic() {
    this.bgMusic.pause();
    this.bgMusic.currentTime = 0;
}
flip() {
    this.flipSound.play();
}
match() {
    this.matchSound.play();
}
victory() {
    this.stopMusic();
    this.victorySound.play();
}
gameOver() {
    this.stopMusic();
    this.gameOverSound.play();
}

}


function releaseNameButton(){
letVal = document.querySelector();
  console.log(letVal);
}




function startGame() {
  
  // shuffle people to slots
  renderImages(people);

}



// print img to slots
function renderImages() {
  for (let p of people) {
  let img = document.createElement(img)
  body.append(img)
  document.getElementById('slot1').innerHTML = (img);
}
}


//


function filterPeople(prop,val){                      
  console.log();
  return people.filter((hair) => {
    return people[hair] === 'blond'
    })
}
