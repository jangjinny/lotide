const assertEqual = require('../assertEqual');
const head = require('../head');

//Test Code
console.log(assertEqual(head([5,6,7]), 5));
console.log(assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"));
