const Gameboard = require("./Gameboard");
const Ship = require("./Ship");
const Square = require("./Square");

test("Ship functionality", () => {
  const ship = Ship(3);
  expect(ship.length()).toBe(3);
  ship.hit();
  expect(ship.hits()).toBe(1);
  expect(ship.isSunk()).toBe(false);
  ship.hit();
  ship.hit();
  expect(ship.isSunk()).toBe(true);
  expect(ship.hits()).toBe(3);
});

test("Board functionality", () => {
  // 10x10 grid with ships of length 5, 4, 3, 3, 2 set up
  const board = Gameboard();
  // print the board
  board.print();
  board.receiveAttack([0, 0]);
  board.receiveAttack([0, 8]);
  board.print();
  expect(board.checkLoss()).toBe(false);
});
