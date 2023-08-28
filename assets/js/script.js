import { people } from "../js/people.js";
import { hiddenpeople } from "../js/hiddenpeople.js";

window.onload = function () {
  const newGameButton = document.getElementById("newgamebtn");
  const askBtn = document.getElementById("askBtn");
  const guessBtn = document.getElementById("guess");
  const resetBtn = document.getElementById("resetBtn");

  newGameButton.addEventListener("click", function () {
    var userName = document.getElementById("myText").value;
    if (userName === "") {
      alert("Please enter a username");
    } else {
      document.getElementById("letsplay").innerHTML =
        "Lets play " + userName + " !";
      document.getElementById("instructions").innerHTML =
        "The goal of the game is to guess the person behind the hidden card.<br>Ask questions about the hidden person and Remember what questions you have asked.<br>When you are ready to guess click on a card then the Guess button. You only have One guess.";
      document.getElementById("newgamebtn").innerHTML = "Click to start !";
      newGameButton.addEventListener("click", renderHiddenImage);
      newGameButton.addEventListener("click", renderBoardImages);
      newGameButton.addEventListener("click", changeStyle);
      resetBtn.addEventListener("click", resetCards);
      askBtn.addEventListener("click", radioChecked);
      askBtn.addEventListener("click", countMoves);
      guessBtn.addEventListener("click", guessPerson);
      return userName;
    }
  });
};

/* RADIOBUTTONS
    Function that checks what button was selected when user push ask button 
    and its value and id ..that is ( value and prop ) 
    I am using toString() and slice() to remove the last integer
    from the radiobutton id since the id has to be unique  */

let radioChecked = (e) => {
  let radioButtons = document.getElementsByName("radio");
  for (let radio of radioButtons) {
    if (radio.checked) {
      var id = radio.id.toString().slice(0, -1);
      document.getElementById("instructions").innerHTML =
        "The Hidden Person does NOT have " + id + " " + radio.value;
      let questionProp = id;
      let questionVal = radio.value;
      const filteredPeople = filterPeople(people, {
        [questionProp]: questionVal,
      });
      filteredPeople.forEach((person) => {
        const values = Object.values(person);
        const ValuesWithoutImg = values.filter((value, index) => {
          const props = Object.keys(person);
          return props[index] === "img";
        });
        // Function executes a provided function once for each array element
        ValuesWithoutImg.forEach((element) => StripImg(element));
      });
    }
  }
};

// FILTERFUNCTION with filters{ questionProp: questionVal }

function filterPeople(people, filters) {
  return people.filter((person) => {
    return Object.entries(filters).every(([prop, value]) => {
      return person[prop] === value;
    });
  });
}

function renderHiddenImage() {
  let random_index = Math.floor(Math.random() * hiddenpeople.length);
  let selected_image = hiddenpeople[random_index];
  let person = document.getElementById("slot1");
  let hiddencard = (document.getElementById(
    "slot1"
  ).src = `./assets/images/characters/${selected_image}`);
  hiddencard = getFilename(hiddencard);
  return renderHiddenImage, hiddencard, person;
}

// On new game button click random hidden Guess Who card is generated
var hiddencard = renderHiddenImage();
var userguess = userguess;

/* GUESS FUNCTION The player first clicks on the person he/she thinks it is
    Then clicks the button to confirm if the guess is correct
    The result win or lose is declared and the hiddencard is displayed to the user */

function guessPerson() {
  document.getElementById("guess").innerHTML = "Click on who you think it is";
  var img_src = document.getElementById("slot1").src;
  img_src = "card" + getFilename(img_src);
  if (userguess.toString() === img_src.toString()) {
    document.getElementById("guess").innerHTML = "Its correct ! You win !";
    document.getElementById("instructions").innerHTML = "You Won in " + count + " moves !!";
    var sheet = document.createElement("style");
    sheet.innerHTML = "#slot1{filter: brightness(100%);}";
    document.body.appendChild(sheet);
  } else {
    document.getElementById("guess").innerHTML =
      "Sorry wrong guess ! You lose !";
    var sheet = document.createElement("style");
    sheet.innerHTML = "#slot1{filter: brightness(100%);}";
    document.body.appendChild(sheet);
  }
}

/*  CHECKS IF RADIOBUTTON QUESTION MATCHES ATTRIBUTE OF HIDDEN CARD
    Each remaining board card pass here and is faded if it does not have the attribute of the question
    If the selected radiobutton attribute match the hiddencard attribute then
    this function will stop the removing of more board cards and restore them to unfaded */

function StripImg(fullPath) {
  var img_src = document.getElementById("slot1").src;
  img_src = "card" + getFilename(img_src);
  let ValueId = fullPath.replace(/^.*[\\\/]/, "");
  ValueId = removeExtension(ValueId);
  let MyList = document.getElementById("card" + ValueId);
  if (("card" + ValueId + ".jpg").toString() === img_src.toString()) {
    document.getElementById("instructions").innerHTML =
      "The Hidden Card has this Attribute !";
      for (var i = 1; i <= 29; ++i) {
        let ValueId = 31 - i;
      let MyList = document.getElementById("card" + ValueId);
      MyList.classList.remove("fade");
      MyList.classList.add("slot");
      }}
    else {
    if (ValueId <= 30) {
      MyList.classList.remove("slot");
      MyList.classList.add("fade");
      return ValueId, MyList;
    } else {
      // do nothing
    }
  }
}

// RESET GAME FUNCTION activated by Play Again Button
function resetCards() {
  document.getElementById("instructions").innerHTML = "Lets Play a New game !";
  renderHiddenImage();
  changeStyle();
  count = 0;
  document.getElementById("count").innerHTML = count;
  document.getElementById("guess").innerHTML = "GUESS WHO !";
  for (var i = 1; i <= 29; ++i) {
    let index = 31 - i;
    let MyList2 = document.getElementById("card" + index);
    MyList2.classList.remove("fade");
    MyList2.classList.add("slot");
  }
  return count;
}

// Makes hidden card blacked out when pushing new game button
function changeStyle() {
  var sheet = document.createElement("style");
  sheet.innerHTML = "#slot1{filter: brightness(0%);}";
  document.body.appendChild(sheet);
}

// UTILS SMALLER FUNCTIONS

function fadeDiv() {
  const playList = document.getElementById("play_game");
  playList.classList.remove("lets_play");
  playList.classList.add("lets_play_fade");
}

function getFilename(fullPath) {
  return fullPath.replace(/^.*[\\\/]/, "");
}

function removeExtension(filename) {
  return filename.substring(0, filename.lastIndexOf(".")) || filename;
}

/* Counter for every time a player ask a question 
    Resets to 0 with resetCard() */
let count = 0;

function countMoves(){
  count = count + 1;
  document.getElementById("count").innerHTML = count;
}

/* USERGUESS AND HIDDENCARD FUNCTIONS
    When user click on boardcards the selected cards name is returned as userguess (*.jpg)
    This lets us compare to the hiddencard (x.jpg) */

var images = document.querySelectorAll("img");

let imgPressed = (e) => {
  userguess = e.target.id + ".jpg";
  return userguess;
  // The card the user clicks before pushing the guess button
};

for (let image of images) {
  image.addEventListener("click", imgPressed);
}
var images = document.querySelectorAll("img");

/* RENDERBOARD CARDS renders the cards to slot 1-30 */
function renderBoardImages(Array) {
  fadeDiv();
  for (var i = 0; i <= 29; ++i) {
    let index = 29 - i;
    let /*  */ selected_image = hiddenpeople[index];
    document.getElementById(
      "card" + (index + 1)
    ).src = `./assets/images/characters/${selected_image}`;
  }
}
