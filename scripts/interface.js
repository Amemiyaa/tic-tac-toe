let winner;
let player_1 = document.getElementById("player_1");
let player_2 = document.getElementById("player_2");

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
      if (playerTime == 0? winner = player_1.value : winner = player_2.value);
      playerTime += 1;

      alert("Game over! - Player " + playerTime + ": (" + winner + ")" + " is the winner!");
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

