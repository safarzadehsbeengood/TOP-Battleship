const Gameboard = require("./Gameboard");

function Player(type) {
  let _type = type;
  const board = Gameboard();
  const getBoard = () => board;
  const getType = () => _type;

  return {
    getBoard,
    getType,
  };
}

module.exports = Player;
