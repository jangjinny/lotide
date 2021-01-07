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

const eqObjects = function(object1, object2) {
  let array1 = Object.keys(object1);
  let array2 = Object.keys(object2);
  
  if (array1.length === array2.length) {
    for (let key of array1) {
      if (array2.includes(key)) {
        if (Array.isArray(object1[key])) {
          return eqArrays(object1[key], object2[key]);
        }
        
        if (object1[key] !== object2[key]) {
          return false;
        }
      }
    } return true;
  } else {
    return false;
  }
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  if (eqObjects(actual, expected)) {
    return `✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}.`;
  } else {
    return `🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}.`;
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
const cd = { c: "1", d: ["2", 3]};
const dc = { d: ["2", 3], c: "1" };

console.log(assertObjectsEqual(ab, ba));
console.log(assertObjectsEqual(ab, abc));
console.log(assertObjectsEqual(cd, dc));