const Gameboard = require("./Gameboard");

function Player(type) {
  let _type = type; // real or computer
  const board = Gameboard(); // Gameboard instance
  const getBoard = () => board; // get the Gameboard instance
  const getType = () => _type; // get the type of player
  const getHits = () => board.getHitShots(); // get the hits from the Gameboard instance

  return {
    getBoard,
    getType,
    getHits,
  };
}

module.exports = Player;
