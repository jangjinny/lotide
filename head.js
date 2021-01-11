const assertEqual = require('./assertEqual');
//results in extra tests printing 
//comes from assertEqual.js file

const head = function(array) {
  return array[0];
};

module.exports = head; //note were passing a variable, not calling a function()