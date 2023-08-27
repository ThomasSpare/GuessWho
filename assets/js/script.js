import { people } from "../js/people.js";
import { hiddenpeople } from "../js/hiddenpeople.js";

window.onload = function () {
  const newGameButton = document.getElementById("newgamebtn");
  const askBtn = document.getElementById("askBtn");
  const guessBtn = document.getElementById("guess");
  const resetBtn = document.getElementById("resetBtn");

  let someString = "Username";

  newGameButton.addEventListener("click", function () {
    var userName = document.getElementById("myText").value;
    if (userName === "") {
      alert("Please enter a username");
    } else {
      document.getElementById("letsplay").innerHTML =
        "Lets play " + userName + " !";
      document.getElementById("instructions").innerHTML =
        "The goal of the game is to guess who the person is behind the hidden card.<br>You only have One guess. Choose a question and hit ASK to get more clues";
      document.getElementById("newgamebtn").innerHTML = "Click to start !";
      newGameButton.addEventListener("click", renderHiddenImage);
      newGameButton.addEventListener("click", renderBoardImages);
      newGameButton.addEventListener("click", changeStyle);
      resetBtn.addEventListener("click", resetCards);
      askBtn.addEventListener("click", radioChecked);
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
        "You asked if " +
        id +
        " is " +
        radio.value +
        "<br>The hidden Person does not have this Attribute";
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
  return radio.id, radio.value;
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

// Returns the array ValuesWithoutImg as only ID numbers (eg. 3, 12, 29 )
function StripImg(fullPath) {
  var img_src = document.getElementById("slot1").src;
  img_src = "card" + getFilename(img_src);
  let ValueId = fullPath.replace(/^.*[\\\/]/, "");
  ValueId = removeExtension(ValueId);
  if (("card" + ValueId + ".jpg").toString() === img_src.toString()) {
    document.getElementById("instructions").innerHTML =
      "The Hidden Card has this Attribute !";
    MyList.classList.remove("fade");
    MyList.classList.add("slot");
    return img_src, ValueId;
  }
  // str "card" is added for each id passed and added to classList
  else {
    if (ValueId <= 30) {
      const MyList = document.getElementById("card" + ValueId);
      MyList.classList.remove("slot");
      MyList.classList.add("fade");
      return ValueId;
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
  document.getElementById("guess").innerHTML = "GUESS WHO !";
  for (var i = 1; i <= 29; ++i) {
    let index = 31 - i;
    const MyList2 = document.getElementById("card" + index);
    MyList2.classList.remove("fade");
    MyList2.classList.add("slot");
  }
}

// Makes hidden card blacked out when pushing new game button
function changeStyle() {
  const element = document.querySelector("slot1");
  var sheet = document.createElement("style");
  sheet.innerHTML = "#slot1{filter: brightness(0%);}";
  document.body.appendChild(sheet);
}

// ----  Utils SMALL FUNCTIONS---------------
//  Returns the img filename without the path

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
