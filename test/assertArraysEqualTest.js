const assertArrayEqual = require('../assertArraysEqual');

console.log(assertArrayEqual([3, 5, 6, 7, 8], [3, 5, 6, 7, 8]))
console.log(assertArrayEqual([4, 5, 6, 7], [3, 5, 6, 7, 8]))
console.log(assertArrayEqual(['fruits', 'vegs', 'dairy', 'protein', 'carbs'], [3, 5, 6, 7, 8]))
console.log(assertArrayEqual([], [3, 5, 6, 7, 8]))