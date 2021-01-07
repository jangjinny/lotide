const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `❌❌❌ Assertion Failed: ${actual} !== ${expected}`;
  }
};

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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!


//Check if the length of the keys are same
//  If true: Loop through the array of keys and check if they are the same
//      If true: Check if the values in the keys are Arrays
//          If the key is an Array: call eqArray to check if object1[key] and object2[key]
//          If the key is primitive: compare object[key] and object2[key]
//  If false: Return false
//

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

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false

const cd = {
  c: "1",
  d: ["2", 3]
};

const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = {
  c: "1",
  d: ["2", 3, 4]
};

console.log(eqObjects(cd, cd2)); // => false

console.log(assertEqual(eqObjects(ab, ba), true));
console.log(assertEqual(eqObjects(ab, abc), false));
console.log(assertEqual(eqObjects(abc, abc), true));

console.log(assertEqual(eqObjects(cd, dc), true));
console.log(assertEqual(eqObjects(cd, cd2), false));
