const Ship = require("./Ship");
const Square = require("./Square");
const UI = require("./UI");

function Gameboard() {
  // setup board
  let missedShots = [];
  let hitShots = [];
  const getMissedShots = () => missedShots;
  const getHitShots = () => hitShots;

  let ships = {
    carrier: Ship(5, "carrier"),
    battleship: Ship(4, "battleship"),
    destroyer: Ship(3, "destroyer"),
    submarine: Ship(3, "submarine"),
    patrol: Ship(2, "patrol"),
  };
  const getShips = () => ships;

  // squares
  let squares = new Array(10);
  for (let row = 0; row < 10; row++) {
    squares[row] = [];
    for (let i = 0; i < 10; i++) {
      squares[row].push(Square());
    }
  }
  const getSquares = () => squares;
  const getSquare = (i, j) => {
    if (i > 9 || i < 0 || j > 9 || j < 0) {
      return undefined;
    } else {
      return squares[i][j].getShip();
    }
  };

  // hard coding ships in for now
  squares[0][0].setShip(ships["carrier"]);
  squares[0][1].setShip(ships["carrier"]);
  squares[0][2].setShip(ships["carrier"]);
  squares[0][3].setShip(ships["carrier"]);
  squares[0][4].setShip(ships["carrier"]);
  squares[2][5].setShip(ships["battleship"]);
  squares[2][6].setShip(ships["battleship"]);
  squares[2][7].setShip(ships["battleship"]);
  squares[2][8].setShip(ships["battleship"]);
  squares[4][4].setShip(ships["destroyer"]);
  squares[5][4].setShip(ships["destroyer"]);
  squares[6][4].setShip(ships["destroyer"]);
  squares[6][0].setShip(ships["submarine"]);
  squares[6][1].setShip(ships["submarine"]);
  squares[6][2].setShip(ships["submarine"]);
  squares[8][0].setShip(ships["patrol"]);
  squares[8][1].setShip(ships["patrol"]);

  const checkLoss = () => {
    for (ship of Object.values(ships)) {
      if (!ship.isSunk()) return false;
    }
    return true;
  };

  const getSquareColor = (i, j) => {
    const square = squares[i][j];
    if (missedShots.includes([i, j])) {
      return "blue";
    } else if (hitShots.includes([i, j])) {
      return "red";
    } else if (square.getShip()) {
      return "black";
    } else {
      return "white";
    }
  };

  const receiveAttack = (coords) => {
    const square = squares[coords[0]][coords[1]];
    square.attack();
    if (square.getShip()) {
      hitShots.push(coords);
    } else {
      missedShots.push(coords);
    }
  };

  const print = () => {
    let res = "";
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        res += squares[i][j].getChar();
      }
      res += "\n";
    }
    console.log(res);
  };

  return {
    getSquares,
    getSquare,
    getSquareColor,
    getShips,
    getMissedShots,
    getHitShots,
    receiveAttack,
    checkLoss,
    print,
  };
}

module.exports = Gameboard;
