const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function (sentence) {
  let count = {};
    for (letter of sentence) {
      count[letter] = count[letter] || 0;
      count[letter]++;
    }
    return count;
  }


  console.log(countLetters("Hello Namra"))