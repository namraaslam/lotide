const assert = require("chai").assert;
const eqArrays = require('../eqArrays');

describe("#eqArrays", () => {
  it("returns true", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  it("returns false", () => {
    assert.strictEqual(eqArrays([1, 2, 4], [1, 2, 3]), false);
  });
});

//Test Cases 
// eqArrays([1, 2, 3], [1, 2, 3]) // => true
// eqArrays([1, 2, 3], [3, 2, 1]) // => false

// eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
// eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false


// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
// assertEqual(eqArrays([1, 2, 4], [1, 2, 3]), false);
