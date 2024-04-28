function Ship(len, iden) {
  let _length = len;
  const _id = iden;
  const id = () => _id;
  let _hits = 0;

  const length = () => _length;
  const hits = () => _hits;

  const hit = () => _hits++;

  const isSunk = () => _hits >= _length;

  return {
    length,
    hits,
    hit,
    isSunk,
    id,
  };
}

module.exports = Ship;
