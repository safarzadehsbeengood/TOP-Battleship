const Gameboard = require("./Gameboard");

function UI() {
  const p1BoardContainer = document.getElementById("p1-board");
  const p2BoardContainer = document.getElementById("p2-board");

  const makeSquare = (i, j) => {
    const square = document.createElement("div");
    square.classList.add("square");
    square.dataset.row = i;
    square.dataset.col = j;
    return square;
  };

  const findSquare = (row, col, board) => {
    return board.querySelector(`[data-row="${row}"][data-col="${col}"]`);
  };

  const updateSquare = (row, col, board, hit) => {
    const square = findSquare(row, col, board);
    square.classList.remove("water");
    square.classList.add(hit ? "hit" : "miss");
  };

  const createBoards = (p1Board, p2Board) => {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        const p1Square = makeSquare(i, j);
        const p2Square = makeSquare(i, j);
        p1Square.classList.add(
          "p1-square",
          p1Board.getSquare(i, j) ? "ship" : "water"
        );
        p2Square.classList.add("p2-square", "water");
        p2Square.addEventListener("click", (e) => {
          const row = e.target.dataset.row;
          const col = e.target.dataset.col;
          const ship = p2Board.getSquare(row, col);
          if (ship) {
            ship.hit();
            updateSquare(row, col, e.target.parentElement, true);
          } else {
            updateSquare(row, col, e.target.parentElement, false);
          }
        });
        p1BoardContainer.appendChild(p1Square);
        p2BoardContainer.appendChild(p2Square);
      }
    }
  };

  const clearBoard = (board) => {
    p1BoardContainer.innerHTML = "";
    p2BoardContainer.innerHTML = "";
  };
  return {
    createBoards,
    updateSquare,
  };
}

module.exports = UI;
