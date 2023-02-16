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

// took descriptions from instructions and cohort

## Documentation

The following functions are currently implemented:
* `assertArraysEqual(array1, array2)`: Takes two arrays as arguments, checks their equality, returns and pass or failure message
* `assertEqual(actual, expected)`: Takes primitive types as parameters, checks their equality and returns boolean value
* `assertObjectsEqual(actual, expected)`: Takes two objects as agruments, checks their equality, and returns a pass or failure message
* `countLetters(actual, expected)`: function should take in a sentence (as a string) and then return a count of each of the letters in that sentence.
* `countOnly(actual, expected)`: This function takes in a collection of items and return counts for a specific subset of those items. It won't count everything. In order to decide what to count, it will also be given an idea of which items we care about and it will only count those, ignoring the others.
* `eqArrays(actual, expected)`: Takes two arrays as arguments, checks their equality, returns a boolean value
* `eqObjects(object1, object2)`: Takes two objects as arguments, checks their equality, returns a boolean message.
* `findKey(actual, expected)`: Takes an object and callback function as arguments, and uses the condition in callback to "find" key- returns key itself or undefined 
* `findKeyByValue(actual, expected)`: Takes an object and value function as arguments, finds key by specified value and returns either the key found or undefined (if key does not exist)
* `head(array)`:  Takes an array as an argument, and returns the first element or head of array or undefined if array is empty
* `letterPositions(sentence)`: Takes an string as an argument, and returns an object containing the letters of the string passed as its keys and their positions in the string as its values. Returned object is empty if passed string is empty
* `map(actual, expected)`: Takes an array and callback function as arguments, and returns an array populated by elements that were mapped from the original based on the callback. Returned array is empty if no value satisfies the condition(s) of the callback or if the original array is empty
* `middle(array)`: Takes an array as an argument, and returns the middle element of the array (odd) or the two middle elements of an array (even). Returns an empty array if input array is empty or contains < 2 elements
* `tail(array)`: Takes an array as an rgument, and returns the all array elements except its first element or or an empty array if the input array is empty
* `takeUntil(array, callback)`: Takes an array and callback function as arguments, and returns an array populated by elements before the pivot element (pivot element is determined by the condition in callback). If no such element meets the condition, takeUntil returns an array populated by all the orginal elements. Returns empty array if input array is empty.
* `without(source, itemsToRemove)`: Takes an array and callback function as arguments. Callback function identifies element(s) that need to be removed from array. Returns an array populated by all elements except those identified by the callback to be removed. Returns array filled with all original elements if non of the values match those identified by the callback or an empty array if the original array was empty.

