const assertArrayEqual = require('./assertArrayEqual');

//return the middle elements of an array
const middle = function(array) {
  let middleNum = [];
  let middleIndex1 = Math.floor(array.length / 2); //returns index of middle number
  let middleIndex2 = Math.floor((array.length - 1) / 2);

  //array with odd number elements should return a single element
  if (array.length === 0 || array.length === 1 || array.length === 2) {
    return middleNum;
  } else if (array.length % 2 !== 0) {
    middleNum.push(array[middleIndex1]);
    return middleNum;
  } else {
    middleNum.push(array[middleIndex2], array[middleIndex1]);
    return middleNum;
  }
};

module.exports = middle;