# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @namraa/lotide`

**Require it:**

`const _ = require('@namraa/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

// took descriptions from instructions on compass

## Documentation

The following functions are currently implemented:
* `assertArraysEqual(array1, array2)`: Takes in two arrays as arguments for function, checks their equality, returns pass or fail message. 
* `assertObjectsEqual(actual, expected)`: Takes in two objects as agruments for the function, checks equality of the arrays, and returns a pass or fail message.
* `countLetters(actual, expected)`: The function takes in a sentence, which should be of string type and then returns a count of each of the letters in that sentence.
* `countOnly(actual, expected)`: This function takes in a collection of items and return counts for subset of those items. It won't count everything. In order to decide what to count, it will also be given an idea of which items we care about and it will only count those, ignoring the others.
* `eqArrays(actual, expected)`: Takes in two arrays as arguments, returns a boolean after checking if theyre equal. 
* `eqObjects(object1, object2)`: Takes in two objects as arguments, returns a boolean after checking if theyre equal. 
* `findKey(actual, expected)`: Takes in an object and a callback function as arguments, then uses the callback condition to "find" the key. It return either undefined or the key itself. 
* `findKeyByValue(actual, expected)`: Takes in an object and value(which is a function) as arguments in order to find key which is a specified value and returns either the key itself or undefined if the key does not exist. 
* `head(array)`:  Takes in an array as an argument, and returns the first element(head) of array or if the array is empty it return undefined. 
* `letterPositions(sentence)`: Takes in a string as an argument, and returns object which contains the letters of the string passed as its keys and their positions in the string as its values. Returned object is empty if passed string is empty
* `map(actual, expected)`: Takes in an array and callback function as arguments, and returns an array which is populated by elements mapped from the original array based on the callback function. If no value passes teh condition of the callback or if the original array is empty then the returned array is empty 
* `middle(array)`: Takes in an array as an argument and returns the middle element of the array or the two middle elements of an array, for odd and even arrays respectively. It returns an empty array if the input array is empty or contains less than 2 elements
* `tail(array)`: Takes in an array as an argument, and returns every array element except the first element or it returns an empty array if the input array is empty
* `takeUntil(array, callback)`: Takes in an array and callback function as arguments and returns array which is populated by elements before the pivot element. If element meets the condition of callback, the function returns an array that is populated with the orginal elements. It returns empty array if input array is empty.
* `without(source, itemsToRemove)`: Takes in an array and callback function as arguments. The callback function identifies items that need to be removed from array. It returns an array with all items except those that were identified by the callback to be removed. It returns an array filled with every original item and if no values match those identified by the callback or an empty array if the original array was empty.

