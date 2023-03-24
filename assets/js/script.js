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
    else console.log("Lets play", userName);
      document.getElementById("lets play").innerHTML = "Lets play " + userName +" !";
      document.getElementById("instructions").innerHTML =
  "The goal of the game is to guess who the person is behind the hidden card.<br>You only have One guess<br> Choose a question and hit ASK to get more clues";

});


// This Array consist of all the people on the Cards with 7 properties (and one img property) and values

let people = [ {hair: 'blond', hairtype: 'short',sex:'man', mood:'angry', glasses: 'no', age:'no', beard: 'no', img: 'assets/images/characters/1 man blonde angry shorthair.jpg'},
              {hair: 'blond', hairtype: 'long', sex: 'woman', mood: 'neutral',glasses: 'no', age:'no', beard: 'no', img: 'assets/images/characters/2 girl blond nohappy longhair.jpg'},
              {hair: 'black', hairtype: 'long', sex: 'woman', mood: 'neutral', glasses: 'no', age:'no', beard: 'no', img: 'assets/images/characters/3 girl blackhair longhair nohappy.jpg'},
              {hair: 'red', hairtype: 'long', sex: 'woman', mood: 'neutral', glasses: 'no', age:'no', beard: 'no', img: 'assets/images/characters/4 girl redhair nohappy longhair.jpg'},
              {hair: 'blond', hairtype: 'long', sex: 'woman', mood: 'neutral',glasses: 'no', age:'no', beard: 'no', img: 'assets/images/characters/5 girl blond nohappy longhair.jpg'},
              {hair: 'black', hairtype: 'short', sex: 'man', mood: 'happy', glasses: 'no', age:'no', beard: 'no', img: 'assets/images/characters/6 man shorthair blackhair happy.jpg'},
              {hair: 'red', hairtype: 'long', sex: 'woman', mood: 'happy', glasses: 'no', age:'no', beard: 'no', img: 'assets/images/characters/7 girl redhair happy longhair.jpg'},
              {hair: 'blond', hairtype: 'short', sex: 'man', mood: 'neutral', glasses: 'no', age:'no', beard: 'no', img: 'assets/images/characters/8 man blondhair nohappy shorthair.jpg'},
              {hair: 'black', hairtype: 'short', sex: 'man', mood: 'neutral', glasses: 'no', age:'no', beard: 'no', img: 'assets/images/characters/9 man blackhair nohappy shorthair.jpg'},
              {hair: 'brown', hairtype: 'short', sex: 'man', mood: 'happy', glasses: 'no', age:'no', beard: 'no', img: 'assets/images/characters/10 man brownhair happy shorthair.jpg'},
              {hair: 'blond', hairtype: 'short', sex: 'man', mood: 'happy', glasses: 'no', age:'no', beard: 'no', img: 'assets/images/characters/11 man blondhair happy shorthair.jpg'},
              {hair: 'red', hairtype: 'long', sex: 'woman', mood: 'angry', glasses: 'no', age:'no', beard: 'no', img: 'assets/images/characters/12 girl angry redhair longhair.jpg'},
              {hair: 'blond', hairtype: 'long', sex: 'woman', mood: 'happy', glasses: 'no', age:'no', beard: 'no', img: 'assets/images/characters/13 girl blondhair happy longhair.jpg'},
              {hair: 'brown', hairtype: 'long', sex: 'woman', mood: 'neutral',glasses: 'no', age:'no', beard: 'no', img: 'assets/images/characters/14 girl brownhair happy longhair.jpg'},
              {hair: 'blond', hairtype: 'short', sex: 'man', mood: 'neutral',glasses: 'no', age:'no', beard: 'no', img: 'assets/images/characters/15 man blondhair nohappy shorthair.jpg'},
              {hair: 'blond', hairtype: 'short', sex: 'man', mood: 'happy', glasses: 'no', age:'no', beard: 'no', img: 'assets/images/characters/16 man blondhair happy shorthair.jpg'},
              {hair: 'white', hairtype: 'short', sex: 'man', mood: 'neutral', glasses: 'no', age:'no', beard: 'no', img: 'assets/images/characters/17 man whitehair glasses shorthair nohappy.jpg'},
              {hair: 'blond', hairtype: 'short', sex: 'woman', mood: 'happy', glasses: 'yes', age:'no', beard: 'no', img: 'assets/images/characters/18 girl glasses blondhair happy shorthair.jpg'},
              {hair: 'black', hairtype: 'short', sex: 'man', mood: 'happy', glasses: 'yes', age:'no', beard: 'no', img: 'assets/images/characters/19 man blondhair happy shorthair glasses.jpg'},
              {hair: 'blond', hairtype: 'short', sex: 'man', mood: 'neutral', glasses: 'no', age:'no', beard: 'yes', img: 'assets/images/characters/20 man blondhair beard shorthair nohappy.jpg'},
              {hair: 'brown', hairtype: 'long', sex: 'woman', mood: 'neutral', glasses: 'no', age:'no', beard: 'no', img: 'assets/images/characters/21 girl colorhair hairstyle nohappy longhair.jpg'},
              {hair: 'blond', hairtype: 'long', sex: 'woman', mood: 'neutral', glasses: 'no', age:'no', beard: 'no', img: 'assets/images/characters/22 girl blondhair hairstyle longhair nohappy.jpg'},
              {hair: 'no', hairtype: 'no', sex: 'man', mood: 'neutral', glasses: 'no', age:'yes', beard: 'no', img: 'assets/images/characters/23 man nohair nohappy old.jpg'},
              {hair: 'no', hairtype: 'no', sex: 'man', mood: 'neutral', glasses: 'no', age:'yes', beard: 'no', img: 'assets/images/characters/24 man nohair nohappy old.jpg'},
              {hair: 'blond', hairtype: 'long', sex: 'woman', mood: 'neutral', glasses: 'no', age:'no', beard: 'no', img: 'assets/images/characters/25 girl blondhair nohappy longhair.jpg'},
              {hair: 'blond', hairtype: 'long', sex: 'man', mood: 'happy', glasses: 'no', age:'no', beard: 'no', img: 'assets/images/characters/26 man blondhair longhair happy.jpg'},
              {hair: 'brown', hairtype: 'long', sex: 'woman', mood: 'neutral', glasses: 'no', age:'no', beard: 'no', img: 'assets/images/characters/28 man angry brunette shorthair.jpg'},
              {hair: 'brown', hairtype: 'short', sex: 'man', mood: 'angry', glasses: 'no', age:'no', beard: 'no', img: 'assets/images/characters/28 man angry brunette shorthair.jpg'},
              {hair: 'brown', hairtype: 'long', sex: 'woman', mood: 'happy', glasses: 'no', age:'no', beard: 'no', img: 'assets/images/characters/29 girl brunette happy longhair.jpg'},
              {hair: 'blond', hairtype: 'long', sex: 'woman', mood: 'angry', glasses: 'no', age:'no', beard: 'no', img: 'assets/images/characters/30 girl nohappy blond longhair.jpg'}
            ]



let sexVal = document.querySelector('input[name="sex"]:checked')         // Input of property from radio buttons 
let hairVal = document.querySelector('input[name="hair"]:checked')
let hairtypeVal = document.querySelector('input[name="hairtype"]:checked')
let moodVal = document.querySelector('input[name="mood"]:checked')
let ageVal = document.querySelector('input[name="age"]:checked')
let glassesVal = document.querySelector('input[name="glasses"]:checked')
let beardVal = document.querySelector('input[name="beard"]:checked')
console.log(sexVal);




function guessWho(){

}




//const btnssex = document.getElementsByClassName('btnSex').addEventListener('click');       // RadioButtons of all the property Values corresponding to people
//const btnshair = document.getElementsByClassName('btnHair');
//const btnshairtype = document.getElementsByClassName('btnHairtype');
//const btnsmood = document.getElementsByClassName('btnMood');
//const btnsage = document.getElementsByClassName('btnAge');
//const btnsglasses = document.getElementsByClassName('btnGlasses');
//const btnsbeard = document.getElementsByClassName('btnBeard');

//const RADIOBUTTONS = (btnssex + btnshair + btnshairtype + btnsmood + btnsage + btnsglasses + btnsbeard);
// RADIOBUTTONS.document.addEventListener('check', ask);

//var DIALOG = getElementsByClassName('DIALOG');

function ask(){

  document.getElementsByClassName("DIALOG").innerHTML = "Good, now just hit ask";
}


// let askvalue = (answer from func that gives the asked property value)  // for instance 'man' 

let person = 
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







//const radiobtns = document.querySelectorAll('radiobtn');

//for (const button of radiobtns){
//  button.addEventListener('checked',);
//  console.log(radiobtns.value)
//}







function startGame() {
  
  // shuffle people to slots
  renderImages(people);

}



// print img to slots
function renderImages() {
  for (let p of people) {
  let img = document.createElement(img)
  body.append(img)
  document.getElementsByClassName('slot').innerHTML = (img);
}
}

console.log("Hej");

//


function filterPeople(prop,val){                      
  console.log();
  return people.filter((hair) => {
    return people[hair] === 'blond'
    })
}



// let askValue = document.querySelector.addEventListener()('input[name="sex"]:checked')



  //let peoplestring = new Array(people);
  //console.log(peoplestring);
  //let slots = document.getElementsByClassName("slot");
//let slotorder = new Array(slots)
//console.log(slotorder);

//let sexVal = document.querySelector('input[name="sex"]:checked')
//then function checkPeopleFeatures(sexVal)
//let hairVal = document.querySelector('input[name="hair"]:checked')
//this function checkPeopleFeatures(hairVal)
//let moodVal = document.querySelector('input[name="mood"]:checked')
//this function checkPeopleFeatures(moodVal)
//let glassesVal = document.querySelector('input[name="glasses"]:checked')
//this function checkPeopleFeatures(glassesVal)
//let beardVal = document.querySelector('input[name="beard"]:checked')
//this function checkPeopleFeatures(beardVal)
//let ageVal = document.querySelector('input[name="age"]:checked')
//this function checkPeopleFeatures(ageVal)



//let count = 0
//do {count = count + 1;
  //function checkPeopleFeatures(){
  //console.log(sum of function checkPeopleFeatures())                                                                
  //document.getElementById("lets play").innerHTML = "You asked if X - " + feature;
  //}


// for (checkPeopleFeatures()){                                       // Working Function that should return a list of people with the value choosen in radio-btn
//    then function removePeople(){                                 // Only thing wrong with it is I get an empty string in the console
 //         const filteredPeople = people.filter((item) =>{                    
  //   return item.value === (feature.value)
   //         })
// function placeCards(){
//  for(let card of cards){
//    let randomPos = Math.floor(Math.random()*13);
//    card.style.order = randomPos;
//  }
//}





// Do the removePeople function here
// function removePeople(){
// const filteredPeople = people.filter((item) =>{
//   return item.sex === ('male')      // The input from radio-btn should be where male is -- document.querySelector('input[name="user_ask_feature"]:checked')
//})
// console.log(filteredPeople)
//}






// function guessX ()                   // Activates when user clicks GUESS, should react when user clicks images that are not filtered out





// function countMoves()               // Each time a user clicks ASK or GUESS a counter drops from 4 - 0, at 0 its GAME OVER



// function gameOver()                  // Informs player that its GAME OVER and Returns the game to starting position



//} while (count < 5)





//const foundcards = people.find((item) => {    // function to check Input from ASK button against values in people 
//  return item.hair === 'long'
//})
//console.log(foundcards);












//function renderImages()                                        
//for (let images = document.createElement('img'));
//images.appendChild('img');

  // let peoplestring = (people.getRandomInt);
  // console.log(peoplestring[3]);


  // document.getElementById("slot").

























// people list for use in filter function, the property img is a unique identifier




                 // <----   MUSIC & SOUNDS






          //  let randomImg = 0;
 // for (let i = 0; i < 13; i++){  }                           // incomplete randomizer function that returns 13 digits between 0 - 29
  
//do {
  //function getRandomInt(min, max) {
    // min = Math.ceil(1);
     //max = Math.floor(13);
     //return Math.floor(Math.random() * (1 - 13) + 1);
                                                     
    // }
//} while ("click", document.getElementById("newgamebtn"))

   //var cards = 
  // console.log(cards);
  





	 // function renderIma(){                                              // This function should render images to the slots on the game board
	 //  for (let choosen of people === (choosen.length === 13))                                                                            // There has to be an element also to randomize the images that gets choosen
	 //   let images = document.createElement('img');
	 //   images.appendChild('img')