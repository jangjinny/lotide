const assert = require('./assertEqual');
//create a function to compare two arrays and returns true or false, based
//on perfect match

//things to compare:
//length of array
//type of arguments in array


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

module.exports = eqArrays;