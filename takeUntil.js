//create a function that takes two parameters: an array and a callback function
//function will keep collecting items from a provided array until
//the callback provided returns a truthy value

/*
Psuedocode

Loop through the given array
If the callback function is true, stop the loop.
Push all the strings before the loop is stopped into a new array
*/

const takeUntil = function(array, callback) {
  const newArr = [];
  //Loop through the given array
  for (let element of array) {
    if (!callback(element)) {
      newArr.push(element);
    } else {
      return newArr;
    }
  } return newArr;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

