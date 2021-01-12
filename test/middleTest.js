const middle = require('../middle');
const assertArrayEqual = require('../assertArrayEqual');
const assert = require('chai').assert;
const assertEqual = require('../assertEqual');

describe('#middle', () => {
  it('should return an empty array when input is an empty array', () => {
    assert.deepEqual(middle([]), []);
  });

  it ('should return an empty array when input array has a single value', () => {
    assert.deepEqual(middle([1]), []);
  });

  it ('should return an empty array when input array has two values', () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  it ('should return [2] when when given [1, 2, 3]', () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it ('should return [2, 3] when when given [1, 2, 3, 4]', () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

});