const assert = require('chai').assert;
const assertArraysEqual = require("../assertArraysEqual");
const eqArrays = require('../eqArrays')



// Test Cases
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should return PASS
assertArraysEqual([1, 2, 3, 4], [1, 2, 3]); // => should return FAIL
assertArraysEqual([1, 2, 3], [1, 2, '3']); // => should return FAIL