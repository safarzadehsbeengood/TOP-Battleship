import "./styles.css";

const UI = require("./modules/UI");
const Player = require("./modules/Player");

const p1 = Player("real");
const p2 = Player("computer");

const UI_Controller = UI();

UI_Controller.createBoards(p1.getBoard(), p2.getBoard());

// for (const square of document.querySelectorAll(".p2-square")) {
//   square.addEventListener("click", (e) => {
//     const row = e.target.dataset.row;
//     const col = e.target.dataset.col;
//     const ship = p2.getBoard().getSquare(row, col);
//     if (ship) {
//       ship.hit();
//       UI_Controller.updateSquare(row, col, e.target.parentElement, true);
//     } else {
//       UI_Controller.updateSquare(row, col, e.target.parentElement, false);
//     }
//   });
// }
