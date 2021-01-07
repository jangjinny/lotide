const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `❌❌❌ Assertion Failed: ${actual} !== ${expected}`;
  }
};

const countLetters = function(sentence) {
  const stats = {};

  for (const letter of sentence) {
    if (letter !== " ") {
      if (stats[letter]) {
        stats[letter] += 1;
      } else {
        stats[letter] = 1;
      }
    }
  }
  return stats;
};

console.log(countLetters("lighthouse in the house"));