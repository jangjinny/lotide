const assertEqual = require('../assertEqual');
const tail = require('../tail');
const assert = require('chai').assert;

describe('#tail', () => {
  it('should return 2 for length of array', () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.strictEqual(result.length, 2);
  });

  it('should return lighthouse as the first index of the new array', () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.strictEqual(result[0], 'Lighthouse');
  });
  
});