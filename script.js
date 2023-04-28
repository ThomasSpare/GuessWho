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
  //const guessButton = document.getElementById("guess")
  //guessButton.addEventListener("click", guessHiddenPerson())
//newGameButton.addEventListener('click', renderBoardImages())


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



//            console.log(question.prop.value);


document.addEventListener('change', (e) => {

   const question = e;
   console.log(question)
});


let sexVal = document.querySelector('input[name="sex"]:checked').value
  if sexVal = 'checked'
then let sexVal =  

//askButton.addEventListener('clicked', => (askButton.value = True)
//)

//const askValue = document.querySelector('body > div.parent > div > section > input:nth-child(5)')
//            if (askButton = True){
//                alert("question asked is if hiddenperson is a "+ askValue.value);            
//}



//askButton.addEventListener("click", console.log(askValue.value));

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
document.getElementById('slot1').src =`/assets/images/characters/${selected_image}`
let hiddenperson = selected_image
return hiddenperson
}


//let anonymus = string('hiddenperson');  // probably errors bcs wrong type , must not be .jpg
//console.log(anonymus);


// function makeImageToId(hiddenperson){
//hiddenId = (string(hiddenperson) - ".jpg")
// console.log(hiddenId)   
//}



//function guessHiddenPerson(){
//  const correctCard.getElementById()
//  document.addEventListener

//}

function renderBoardImages(Array){
   for (var i = 0; i <= 29; ++i){
   index = (29 - i);
   selected_image = hiddenpeople[index];
   document.getElementById(index).src =`/assets/images/characters/${selected_image}`
 }}

renderBoardImages(hiddenpeople);






//random_index = Math.floor(Math.random() * hiddenpeople.length);
//while (random_index !== indexOf(selected_image)){
//selected_image = hiddenpeople[random_index]
//document.getElementsByClassName('slot').src =`/assets/images/characters/${selected_image}`
//}



//const anyslot = document.getElementsByClassName('slot')
//anyslot.addEventListener('click')

//const guessbutton = document.getElementById('guess')
//guessbtton.addEventListener('click', )
//var guessimage = document.querySelector(keyof,'img[src*="/item"]');


//function cLick(){
 // if (anyslot = )
//}





function guessPerson(){
    if (selected_image = guessimage)
      alert('Its Correct!');
    else
      alert('GAME OVER');
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