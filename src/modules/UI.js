const Gameboard = require("./Gameboard");

function UI() {
  const p1BoardContainer = document.getElementById("p1-board");
  const p2BoardContainer = document.getElementById("p2-board");
  const createBoards = (p1Board, p2Board) => {
    let inner = "";
    for (let i = 0; i < 100; i++) {
      inner += `<div class="border-solid border-2 border-sky-500"></div>`;
    }
    p1BoardContainer.innerHTML = inner;
  };
  return {
    createBoards,
  };
}

module.exports = UI;
