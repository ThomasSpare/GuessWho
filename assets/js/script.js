document.addEventListener("DOMContentLoaded", function(){
  let buttons = document.getElementsByTagName("button", "Image");

    for let (button of buttons){
        button.addEventListener("click", function(){
            if (this.getAttribute("data-type") === ("New Game")
                alert("LetsPLay!");
    }           else{
            let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            } )
        }})
  




function runGame(){

}
function checkAnswer(){

}
function removeCards(){

}
