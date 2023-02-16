const assertArraysEqual = require('./assertArraysEqual');

const middle = function (arr1) {

  let midArray = [];
  let arrLength = arr1.length;
  let mid = Math.floor(arrLength / 2);
  if (arrLength <= 2) {
      return midArray;

  }

  else {
      if (arrLength % 2 === 0) {
          midArray.push(arr1[mid] - 1);
          midArray.push(arr1[mid]);
      }
      else {
          midArray.push(arr1[mid]);

      }

  }

  return midArray;

}



//Test Cases
//empty
assertArraysEqual(middle([1]), []); // => []
assertArraysEqual(middle([1, 2]), []); // => []
//odd
assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]
//even
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]
assertArraysEqual(middle([3, 1, 1, 2]), [1, 1]);


module.exports = middle;