const Gameboard = require("./Gameboard");

function UI() {
  const p1BoardContainer = document.getElementById("p1-board");
  const p2BoardContainer = document.getElementById("p2-board");
  const p1Hits = document.getElementById("p1-hits");
  const p2Hits = document.getElementById("p2-hits");
  const p1Ships = document.getElementById("p1-ships");
  const p2Ships = document.getElementById("p2-ships");

  p1Hits.textContent = 0;
  p2Hits.textContent = 0;
  p1Ships.textContent = 5;
  p2Ships.textContent = 5;

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
    if (hit) p1Hits.textContent++;
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

  const updateShips = () => {};
  const updateHits = () => {
    p1Hits.textContent = p1.getHits().length;
    p2Hits.textContent = p2.getHits().length;
  };

  const clearBoard = (board) => {
    p1BoardContainer.innerHTML = "";
    p2BoardContainer.innerHTML = "";
  };
  return {
    createBoards,
    updateHits,
    updateShips,
    clearBoard,
    updateSquare,
  };
}

module.exports = UI;
