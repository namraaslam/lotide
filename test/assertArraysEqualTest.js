const assertArraysEqual = require("../assertArraysEqual");

// Test Cases
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should return PASS
assertArraysEqual([1, 2, 3, 4], [1, 2, 3]); // => should return FAIL
assertArraysEqual([1, 2, 3], [1, 2, '3']); // => should return FAIL