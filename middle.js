const eqArrays = function(array1, array2) {
  //compare lengths of array1 and array2
  if (array1.length === array2.length) {
    //compare contents of array1 and array2
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    } return true;
  } else {
    return false;
  }
};

const assertArrayEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    return `✅✅✅ Assertion Passed: ${array1} === ${array2}`;
  } else {
    return `❌❌❌ Assertion Failed: ${array1} !== ${array2}`;
  }
};

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

console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 5])) // => []
console.log(middle([1, 2, 8, 7, 5, 3])) // => [8, 7]

console.log(assertArrayEqual(middle([]), []));
console.log(assertArrayEqual(middle([1]), []));
console.log(assertArrayEqual(middle([1, 2]), []));
console.log(assertArrayEqual(middle([1, 2, 3]), [2]));
console.log(assertArrayEqual(middle([1, 2, 3, 4, 5]), [3]));
console.log(assertArrayEqual(middle([1, 2, 3, 4]), [2, 3]));
console.log(assertArrayEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]));