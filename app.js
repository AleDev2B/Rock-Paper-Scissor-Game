// setting iniziale del tabellone per entrambi i giocatori a 0.
var userScore = 0;
var compScore = 0;
const userScoreSpan = document.getElementById("user_score");
const compScoreSpan = document.getElementById("comp_score");
const handSelector = document.getElementById("hand");
const paperSelector = document.getElementById("paper");
const scissorSelector = document.getElementById("scissor");
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

handSelector.addEventListener("click", function(){
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
    // console.log(compScore);
    compScoreSpan.innerHTML = compScore;
    iconSelector.addClass('icon-loose');
    resultSelector.append("Paper covers Rock. Computer Win, You Loose" + '<img src="https://img.icons8.com/emoji/48/000000/pile-of-poo.png"/>');

  } else {
    // console.log("you WOOn");
    userScore++;
    // console.log(userScore);
    userScoreSpan.innerHTML = userScore;
    iconSelector.addClass('icon-wins');
    resultSelector.append("Rock smash Scissor. You Win" + '<img src="https://img.icons8.com/emoji/48/000000/fire.png');
  }
});

paperSelector.addEventListener("click", function(){
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
    compScoreSpan.innerHTML = compScore;
    iconSelector.addClass('icon-loose');
    resultSelector.append("Paper beat Rock. Computer Win, You Loose" + '<img src="https://img.icons8.com/emoji/48/000000/pile-of-poo.png"/>');

  } else {
    // console.log("you WOOn");
    userScore++
    // console.log(userScore);
    userScoreSpan.innerHTML = userScore;
    iconSelector.addClass('icon-wins');
    resultSelector.append("Rock beat Scissor. You Win" + '<img src="https://img.icons8.com/emoji/48/000000/fire.png"/>');
  }
});

scissorSelector.addEventListener("click", function(){
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
    compScoreSpan.innerHTML = compScore;
    iconSelector.addClass('icon-loose');
    resultSelector.append("Paper beats Rock. Computer Win, You Loose" + '<img src="https://img.icons8.com/emoji/48/000000/pile-of-poo.png"/>');

  } else {
    // console.log("you WOOn");
    userScore++;
    // console.log(userScore);
    userScoreSpan.innerHTML = userScore;
    iconSelector.addClass('icon-wins');
    resultSelector.append("Scissor cuts the paper. You Win" + '<img src="https://img.icons8.com/emoji/48/000000/fire.png');
  }
});
