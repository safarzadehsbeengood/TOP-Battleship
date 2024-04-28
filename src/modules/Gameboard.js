const Ship = require("./Ship");
const Square = require("./Square");

function Gameboard() {
  // setup board
  let missedShots = [];
  let hitShots = [];
  let ships = {
    carrier: Ship(5, "Carrier"),
    battleship: Ship(4, "Battleship"),
    destroyer: Ship(3, "Destroyer"),
    submarine: Ship(3, "Submarine"),
    patrol: Ship(2, "Patrol Boat"),
  };
  let squares = new Array(10);
  for (let row = 0; row < 10; row++) {
    squares[row] = [];
    for (let i = 0; i < 10; i++) {
      squares[row].push(Square());
    }
  }
  // hard coding ships in for now
  squares[0][0].setShip(ships["carrier"]);
  squares[0][1].setShip(ships["carrier"]);
  squares[0][2].setShip(ships["carrier"]);
  squares[0][3].setShip(ships["carrier"]);
  squares[0][4].setShip(ships["carrier"]);
  squares[2][0].setShip(ships["battleship"]);
  squares[2][1].setShip(ships["battleship"]);
  squares[2][2].setShip(ships["battleship"]);
  squares[2][3].setShip(ships["battleship"]);
  squares[4][0].setShip(ships["destroyer"]);
  squares[4][1].setShip(ships["destroyer"]);
  squares[4][2].setShip(ships["destroyer"]);
  squares[6][0].setShip(ships["submarine"]);
  squares[6][1].setShip(ships["submarine"]);
  squares[6][2].setShip(ships["submarine"]);
  squares[8][0].setShip(ships["patrol"]);
  squares[8][1].setShip(ships["patrol"]);

  const getSquares = () => squares;
  const getShips = () => ships;

  const checkLoss = () => {
    for (ship of Object.values(ships)) {
      if (!ship.isSunk()) return false;
    }
    return true;
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

  const getMissedShots = () => missedShots;
  const getHitShots = () => hitShots;

  return {
    getSquares,
    getShips,
    getMissedShots,
    getHitShots,
    receiveAttack,
    checkLoss,
    print,
  };
}

module.exports = Gameboard;
