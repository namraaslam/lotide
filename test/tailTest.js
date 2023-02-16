const tail = require('../tail');
const assert = require("chai").assert;

const result = tail(["Hello", "Lighthouse", "Labs"]);

describe("#tail", () => {
  it("returns true for ['Lighthouse','Labs']", () => {
    assert.deepEqual(result, ["Lighthouse", "Labs"]);
  });
  it("returns true for 'Lighthouse'", () => {
    assert.strictEqual(result[0], "Lighthouse");
  });
  it("returns true for 'Labs'", () => {
    assert.strictEqual(result[1], "Labs");
  });
  it("returns true for 2", () => {
    assert.deepEqual(result.length, 2);
  });
});


//Tests from lighthouse labs 
// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!

// // Test Case: Check the original array 
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!

