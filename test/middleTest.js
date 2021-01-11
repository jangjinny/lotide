const middle = require('../middle');
const assertArrayEqual = require('../assertArrayEqual');

console.log(assertArrayEqual(middle([]), []));
console.log(assertArrayEqual(middle([1]), []));
console.log(assertArrayEqual(middle([1, 2]), []));
console.log(assertArrayEqual(middle([1, 2, 3]), [2]));
console.log(assertArrayEqual(middle([1, 2, 3, 4, 5]), [3]));
console.log(assertArrayEqual(middle([1, 2, 3, 4]), [2, 3]));
console.log(assertArrayEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]));