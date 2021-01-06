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

const without = function(array1, array2) {
  let newArr = [];
  for (let arr of array1) {
    let check = array2.includes(arr); //returns true if arr is in array2
    if (!check) {
      newArr.push(arr);
    }
  }
  return newArr;
};

console.log(without([1, 2, 6], [2, 1, 6]));
console.log(without([1, 3, 4, 7, 5, 7], [3, 1, 6]));
console.log(without([3, 1, 6], [1, 3, 4, 7, 5, 7]));

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
console.log(assertArrayEqual(words, ["hello", "world", "lighthouse"]));