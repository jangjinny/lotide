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

const letterPositions = function(sentence) {
  const results = {};
  let index = [];
  // logic to update results here
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== ' ') {
      if (results.hasOwnProperty(sentence[i])) {
        results[sentence[i]].push(i)
      } else {
        results[sentence[i]] = [i];
    }
  }
}
  return results;
};

console.log(letterPositions("Lighthouse Labs"));

console.log(assertArrayEqual(letterPositions("hello").e, [1]));