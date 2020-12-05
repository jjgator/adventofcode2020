import teststring from './input';

const boardingPasses = teststring.split('\n');

const getIndex = (code, limit, upperIndicator, lowerIndicator) => {
  let lowerLimit = 0;
  let upperLimit = limit;

  for (let i = 0; i < code.length - 1; i++) {
    if (code[i] === upperIndicator) {
      lowerLimit = Math.ceil((lowerLimit + upperLimit) / 2);
    } else if (code[i] === lowerIndicator) {
      upperLimit = Math.floor((lowerLimit + upperLimit) / 2);
    }
  }

  return code[code.length - 1] === upperIndicator ? upperLimit : lowerLimit;
};

const findSeatId = (boardingPass) => {
  const passcode = boardingPass.split('');
  const rowCode = passcode.slice(0, 7);
  const columnCode = passcode.slice(7);

  return getIndex(rowCode, 127, 'B', 'F') * 8 + getIndex(columnCode, 7, 'R', 'L');
};

const seatIDs = boardingPasses.map((bp) => {
  return findSeatId(bp);
});

console.log(Math.max(...seatIDs)); // 832
