document.addEventListener("DOMContentLoaded", function (){
  document.getElementById("newgamebtn").addEventListener("click", enterUserName);
 document.getElementById("ask").addEventListener("click", checkPeopleFeatures);
 document.getElementById("ask").addEventListener("click", removePeople);
 document.getElementById("guess").addEventListener("click", guessX);
 
  });
  // document.getElementById("newgame").addEventListener("click", enterUserName);


function enterUserName(){
  var userName = document.getElementById("myText").value;             // Username input, display instructions when press play
  if (userName === ""){
    alert('Please enter a username');
  } 
  else console.log("Lets play", userName);
  document.getElementById("lets play").innerHTML = "Lets play " + userName +" !";
  document.getElementById("instructions").innerHTML =
  "The goal of the game is to guess who the person is behind<br>the hidden card to the left of game board.<br>Choose a question and hit ASK";
  let peoplestring = new Array(people);
  console.log(peoplestring);
  let slots = document.getElementsByClassName("slot");
let slotorder = new Array(slots)
console.log(slotorder);
}




//let count = 0
//do {count = count + 1;
  function checkPeopleFeatures(){
  let feature = document.querySelector('input[name="user_ask_feature"]:checked')            // Checks choice of Radio buttons when user press ASK
     
  document.getElementById("lets play").innerHTML = "You asked if X - " + feature.id;        // Prints out the users Choice           
  console.log(feature.value);
  }



// function storeNewPeople()     // Should be 

// I cant get the choosen feature from radio btn to be used in the next function








  //for (checkPeopleFeatures()){                             // Working Function that should return a list of people with the value choosen in radio-btn
  //    then function removePeople(feature){                 // Only thing wrong with it is I get an empty string in the console
  //          const filteredPeople = people.filter((item) =>{                    
  //          return item.value === (feature.value)
  //        })
  //        console.log(filteredPeople);
          
  //      }}

// let (feature.value)  









// Do the removePeople function here
function removePeople(){
const filteredPeople = people.filter((item) =>{
  return item.sex === ('male')      // The input from radio-btn should be where male is -- document.querySelector('input[name="user_ask_feature"]:checked')
})
console.log(filteredPeople)
}






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


let people =[ {hair: 'blond', hairtype: 'short',sex:'man', mood:'angry', img: 'assets/images/characters/1 man blonde angry shorthair.jpg'},
              {hair: 'blond', hairtype: 'long', sex: 'woman', mood: 'neutral', img: 'assets/images/characters/2 girl blond nohappy longhair.jpg'},
              {hair: 'black', hairtype: 'long', sex: 'woman', mood: 'neutral', img: 'assets/images/characters/3 girl blackhair longhair nohappy.jpg'},
              {hair: 'red', hairtype: 'long', sex: 'woman', mood: 'neutral', img: 'assets/images/characters/4 girl redhair nohappy longhair.jpg'},
              {hair: 'blond', hairtype: 'long', sex: 'woman', mood: 'neutral', img: 'assets/images/characters/5 girl blond nohappy longhair.jpg'},
              {hair: 'black', hairtype: 'short', sex: 'man', mood: 'happy', img: 'assets/images/characters/6 man shorthair blackhair happy.jpg'},
              {hair: 'red', hairtype: 'long', sex: 'woman', mood: 'happy', img: 'assets/images/characters/7 girl redhair happy longhair.jpg'},
              {hair: 'blond', hairtype: 'short', sex: 'man', mood: 'neutral', img: 'assets/images/characters/8 man blondhair nohappy shorthair.jpg'},
              {hair: 'black', hairtype: 'short', sex: 'man', mood: 'neutral', img: 'assets/images/characters/9 man blackhair nohappy shorthair.jpg'},
              {hair: 'brown', hairtype: 'short', sex: 'man', mood: 'happy', img: 'assets/images/characters/10 man brownhair happy shorthair.jpg'},
              {hair: 'blond', hairtype: 'short', sex: 'man', mood: 'happy', img: 'assets/images/characters/11 man blondhair happy shorthair.jpg'},
              {hair: 'red', hairtype: 'long', sex: 'woman', mood: 'angry', img: 'assets/images/characters/12 girl angry redhair longhair.jpg'},
              {hair: 'blond', hairtype: 'long', sex: 'woman', mood: 'happy', img: 'assets/images/characters/13 girl blondhair happy longhair.jpg'},
              {hair: 'brown', hairtype: 'long', sex: 'woman', mood: 'neutral', img: 'assets/images/characters/14 girl brownhair happy longhair.jpg'},
              {hair: 'blond', hairtype: 'short', sex: 'man', mood: 'neutral', img: 'assets/images/characters/15 man blondhair nohappy shorthair.jpg'},
              {hair: 'blond', hairtype: 'short', sex: 'man', mood: 'happy', img: 'assets/images/characters/16 man blondhair happy shorthair.jpg'},
              {hair: 'white', hairtype: 'short', sex: 'man', mood: 'neutral', img: 'assets/images/characters/17 man whitehair glasses shorthair nohappy.jpg'},
              {hair: 'blond', glasses: 'yes', hairtype: 'short', sex: 'woman', mood: 'happy', img: 'assets/images/characters/18 girl glasses blondhair happy shorthair.jpg'},
              {hair: 'black', glasses: 'yes', hairtype: 'short', sex: 'man', mood: 'happy', img: 'assets/images/characters/19 man blondhair happy shorthair glasses.jpg'},
              {hair: 'blond', beard: 'yes', hairtype: 'short', sex: 'man', mood: 'neutral', img: 'assets/images/characters/20 man blondhair beard shorthair nohappy.jpg'},
              {hair: 'brown', hairtype: 'long', sex: 'woman', mood: 'neutral', img: 'assets/images/characters/21 girl colorhair hairstyle nohappy longhair.jpg'},
              {hair: 'blond', hairtype: 'long', sex: 'woman', mood: 'neutral', img: 'assets/images/characters/22 girl blondhair hairstyle longhair nohappy.jpg'},
              {hair: 'no', hairtype: 'no', age:'old', sex: 'man', mood: 'neutral', img: 'assets/images/characters/23 man nohair nohappy old.jpg'},
              {hair: 'no', hairtype: 'no', age:'old', sex: 'man', mood: 'neutral', img: 'assets/images/characters/24 man nohair nohappy old.jpg'},
              {hair: 'blond', hairtype: 'long', sex: 'woman', mood: 'neutral', img: 'assets/images/characters/25 girl blondhair nohappy longhair.jpg'},
              {hair: 'blond', hairtype: 'long', sex: 'man', mood: 'happy', img: 'assets/images/characters/26 man blondhair longhair happy.jpg'},
              {hair: 'brown', hairtype: 'long', sex: 'woman', mood: 'neutral', img: 'assets/images/characters/28 man angry brunette shorthair.jpg'},
              {hair: 'brown', hairtype: 'short', sex: 'man', mood: 'angry', img: 'assets/images/characters/28 man angry brunette shorthair.jpg'},
              {hair: 'brown', hairtype: 'long', sex: 'woman', mood: 'happy', img: 'assets/images/characters/29 girl brunette happy longhair.jpg'},
              {hair: 'blond', hairtype: 'long', sex: 'woman', mood: 'angry', img: 'assets/images/characters/30 girl nohappy blond longhair.jpg'}
            ]




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
