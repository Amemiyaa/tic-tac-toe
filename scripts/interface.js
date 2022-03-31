let winner;
let player_1 = prompt("Player 1: ");
let player_2 = prompt("Player 2: ");

document.addEventListener("DOMContentLoaded", () => {

  let squares = document.querySelectorAll(".square");

  squares.forEach((square)=>{
    square.addEventListener("click", handleClick);
  });

});

function handleClick(event){

  let square = event.target;
  let position = square.id;

  if (handleMove(position)) {

    setTimeout(()=>{
      if (playerTime == 0? winner = player_1 : winner = player_2);
      playerTime += 1;
      alert("Game over! - Player: " + playerTime + " (" + winner + ")" + " is win!");
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

function resetGame(){
  resetStates()
  updateSquares()
}


// Reset Game - Still in development

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

