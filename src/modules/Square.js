function Square(ship = undefined) {
  let _ship = ship;
  let char = _ship ? "* " : "☐ ";
  const getChar = () => char;

  const getShip = () => _ship;
  const hasShip = () => (_ship ? true : false);

  const setShip = (newShip) => {
    _ship = newShip;
    char = "* ";
  };

  const attack = () => {
    if (_ship) {
      _ship.hit();
      char = "X";
    } else {
      char = "O";
    }
  };

  return {
    getShip,
    hasShip,
    setShip,
    getChar,
    attack,
  };
}

module.exports = Square;
