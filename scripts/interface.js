let winner;

let player_1 = document.getElementById("player_1");
let player_2 = document.getElementById("player_2");

let player_1_score = 0;
let player_2_score = 0;


document.addEventListener("DOMContentLoaded", () => {

  let squares = document.querySelectorAll(".square");

  squares.forEach((square)=>{
    square.addEventListener("click", handleClick);
  });

});
// Change Scoreboard Name - Player One
function changePlayerOneScoreboard() {
  let playerOneScoreboard = document.getElementById("player_1_scoreboard");

  playerOneScoreboard.innerHTML = player_1.value;
}

// Change Scoreboard Name - Player Two
function changePlayerSecondScoreboard() {
  let playerSecondScoreboard = document.getElementById("player_2_scoreboard");

  playerSecondScoreboard.innerHTML = player_2.value;
}

// Update Scoreboard
function updateScoreboard() {
  let player_1_scoreboard = document.getElementById("player_1_score")
  let player_2_scoreboard = document.getElementById("player_2_score")
  player_1_scoreboard.innerHTML = player_1_score;
  player_2_scoreboard.innerHTML = player_2_score;
}

function handleClick(event){

  let square = event.target;
  let position = square.id;

  if (handleMove(position)) {
    setTimeout(()=>{
      if (playerTime === 0) {
        winner = player_1.value
        player_1_score += 1;
        updateScoreboard();
      } else {
        winner = player_2.value;
        player_2_score += 1;
        updateScoreboard();
      }
      playerTime += 1;

      alert("Game over! - Player " + playerTime + " - " + winner  + " is the winner!");
    }, 10)
  };
  updateSquare(position);

}

function updateSquare(position) {
  let square = document.getElementById(position.toString());
  let symbol = board[position];
  if (symbol != "") {
    square.innerHTML += `<div class="${symbol}"></div>`;
  }
}

// Reset Game Function

function resetGame(){
  resetStates()
  updateSquares()
}

function resetScoreboard() {
  player_1_score = 0;
  player_2_score = 0;

  let player_1_scoreboard = document.getElementById("player_1_score")
  let player_2_scoreboard = document.getElementById("player_2_score")

  player_1_scoreboard.innerHTML = 0;
  player_2_scoreboard.innerHTML = 0;
  resetGame();

}

function updateSquares() {
  let squares = document.querySelectorAll(".square");

  squares.forEach((square)=>{
    let position = square.id;
    let symbol = board[position];
    if(symbol == "") {
      square.innerHTML = ``;
    }
  });
};

