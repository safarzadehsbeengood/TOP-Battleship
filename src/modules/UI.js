const Gameboard = require("./Gameboard");

function UI() {
  const p1BoardContainer = document.getElementById("p1-board");
  const p2BoardContainer = document.getElementById("p2-board");
  const createBoards = (p1Board, p2Board) => {
    let p1 = "";
    let p2 = "";
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        const p1Square = p1Board.getSquare(i, j);
        const p2Square = p2Board.getSquare(i, j);
        const p1Color = p1Square ? "black" : "white";
        const p2Color = p2Square ? "black" : "white";
        p1 += `<div class="border-solid bg-${p1Color} w-10 h-10 border border-black"></div>`;
        p2 += `<div class="border-solid bg-${p2Color} w-10 h-10 border border-black"></div>`;
      }
    }
    p1BoardContainer.innerHTML = p1;
    p2BoardContainer.innerHTML = p2;
  };
  return {
    createBoards,
  };
}

module.exports = UI;
