document.addEventListener("DOMContentLoaded", function(){
    const newGameButton = document.getElementById("newgame");
    const someString = "Username";
    
    newGameButton.addEventListener(
      "click",
      function () {
       sign = window.prompt("Choose a username to play");
        console.log(sign);  // Expected Value: 'Username'
      }.bind(someString)
    );
})

let hairColorBlond = ("blond");         /* hair color variables */
let hairColorBlack = ("black");
let hairColorRed = ("red");
let hairColorBrwn = ("brown");
let hairColorWhite = ("white");

let longHair = ("long hair");           /* hair types */
let shortHair = ("short hair");
let noHair = ("no hair");
let styledHair = ("styled hair");

let moodHappy = ("happy");
let moodNotHappy = ("not happy");

let ageOld = ("old");

let male = ("male");
let female = ("female");

const c1 = (1, hairColorBlond, male, moodHappy);        /*- designate card values, from left to right in play area */
const c2 = (2, hairColorBlond, female, moodNotHappy);
const c3 = (3, hairColorBlack, female, moodNotHappy);
const c4 = (4, hairColorBrwn, female, moodNotHappy);
const c5 = (5, hairColorBlond, female, moodNotHappy);
const c6 = (6, hairColorBlack, male, moodHappy);
const c7 = (7, hairColorRed, female, moodHappy);
const c8 = (8, hairColorBlond, male, moodNotHappy);
const c9 = (9, hairColorBlack, male, moodNotHappy);
const c10 = (10, hairColorBrwn, male, moodHappy);
const c11 = (11, hairColorBlond, male, moodHappy);
const c12 = (12, hairColorBrwn, female, moodNotHappy);
const c13 = (13, hairColorBlond, male, moodNotHappy);
const c14 = (14, hairColorBlond, male, moodHappy);    /* CPUs card */ 





function runGame(){

}
function checkAnswer(){

}
function removeCards(){

}
