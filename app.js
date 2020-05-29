// setting iniziale del tabellone per entrambi i giocatori a 0.
var userScore = 0;
var compScore = 0;
const userScoreSpan = document.getElementById("user_score");
const compScoreSpan = document.getElementById("comp_score");
const handSelector = $("#hand");
const paperSelector = $("#paper");
const scissorSelector = $("#scissor");
const resultSelector = $(".result");
const iconSelector = $(".icon");

function numRandGen() {
 let compRandGen = Math.floor(Math.random() * 3);
 return compRandGen
}

function computerChoice() {
  let arrayObj = [handSelector, paperSelector, scissorSelector];
  return arrayObj[numRandGen()]
}

function game_init(clickSelection) {

    clickSelection.on("click", function(){
    iconSelector.removeClass("icon-loose");
    iconSelector.removeClass("icon-wins");
    userChoise = $(this);
    let compChoise = computerChoice()
    // console.log(compChoise);
    resultSelector.html("");
    if (compChoise == userChoise[0]) {
      // console.log("you draw");
      resultSelector.append("It's a Draw!! You too made the same choise");
    }
    else if (compChoise == paperSelector) {
      // console.log("you loose");
      compScore++;
      console.log(compScore);
      compScoreSpan.innerHTML = compScore;

      $(this).parents(".icon").addClass('icon-loose');
      resultSelector.append("Paper covers Rock. Computer Win, You Loose" + '<img src="https://img.icons8.com/emoji/48/000000/pile-of-poo.png"/>');} else {
      // console.log("you WOOn");
      userScore++;
      console.log(userScore);
      userScoreSpan.innerHTML = userScore;

      $(this).parents(".icon").addClass('icon-wins');
      resultSelector.append("Rock smash Scissor. You Win" + '<img src="https://img.icons8.com/emoji/48/000000/fire.png');
    }
  });
}

game_init(handSelector);
game_init(paperSelector);
game_init(scissorSelector);
