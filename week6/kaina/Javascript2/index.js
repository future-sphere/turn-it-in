// Write a JavaScript function isArray() to check whether an `input` is an array or not.
// Test case 1
// Input: [1, 2, 3, 54]
// Output: true
// Test case 2
// Input: 35
// Output: false

// const isArray = input => Array.isArray(input);

// console.log(isArray([1, 2, 3]));
// console.log(isArray(35));

// Write a simple JavaScript program  joinArray() to join all elements of the following array into a string.
// Test case 1
// Input: [“orange”, “apple”, “grape”]
// Output: “orange$apple$grape”

// const joinArray = arr => arr.join("$");

// console.log(joinArray(["orange", "apple", "grape"]));

// Write a JavaScript program to find the index of a number in a sorted array (DO NOT USE indexOf)
// Test case 1
// Input: [1, 2, 3, 4, 5], 5
// Output: Index of 5 is 4

// const findIndex = (arr, n) => {
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] === n) {
//       return i;
//     }
//   }
// };
// console.log(findIndex([1, 2, 3, 4, 5], 5));
// console.log(findIndex([1, 2, 3, 4, 5, 6], 2));

// Write a JavaScript program to compute the sum of an array of integers
// Test case 1
// Input: [1, 2, 3, 4, 5]
// Output: 15
// Test case 2
// Input: [2, 7, 10]
// Output: 19

// const findSum = nums => {
//   let total = 0;
//   for (i = 0; i < nums.length; i++) {
//     let v = nums[i];
//     total = v + total;
//   }
//   return total;
// };

// console.log(findSum([1, 2, 3, 4, 5]));
// console.log(findSum([2, 7, 10]));

// Write a Javascript program to compute the product of an array of integers
// Test case 1
// Input:[1, 2, 3, 4, 5]
// Output: 120
// Test case 2
// Input: [2, 3]
// Output: 6

// const findProduct = product => {
//   let total = 1;
//   for (i = 0; i < product.length; i++) {
//     let v = product[i];
//     total = v * total;
//   }
//   return total;
// };

// console.log(findProduct([1, 2, 3, 4, 5]));
// console.log(findProduct([2, 3]));

// Write a JavaScript program to remove duplicate items from an array.
// Test case 1
// Input: [1, 1, 2, 3, 7, 7, 0]
// Output: [1, 2, 3, 7, 0]
// Test case 2
// Input: [“Peter”, “James”, “Bob”, “Peter”]
// Output: [“Peter”, “James”, “Bob”]

const obj = {};
const arr = [];
const findDuplicate = dup => {
	for (i = 0; i < dup.length; i++) {
		if (!obj[dup[i]]) {
			arr.push(dup[i]);
			obj[dup[i]] = 'ok';
		}
	}
	return arr;
};

// // console.log(findDuplicate(["Peter", "James", "Bob", "Peter"]));
// console.log(findDuplicate([1, 1, 2, 3, 7, 7, 0]));

// Find the leap years in a given range of years.
// Test case 1
// Input: 2000, 2018
// Output: [2000, 2004, 2008, 2012, 2016]
// Test case 2
// Input: 2013, 2015
// Output: []

// const leapYears = (min, max) => {
//   const result = [];
//   for (i = min; i < max; i++) {
//     if (i % 4 === 0) {
//       result.push(i);
//     }
//   }
//   return result;
// };

// console.log(leapYears(2000, 2018));

// Write a JavaScript program to calculate the n-th fibonacci number: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55
// Test case 1
// Input: 0
// Output: 1
// Test case 2
// Input: 4
// Output: 5
// Test case 3
// Input: 3
// Output: 3

// const fibonacci = n => {
//   const fibonacciArr = [1, 1];
//   for (let i = 2; i <= n; i++) {
//     fibonacciArr[i] = fibonacciArr[i - 1] + fibonacciArr[i - 2];
//   }
//   return fibonacciArr[n];
// };

// console.log(fibonacci(0));
// console.log(fibonacci(4));
// console.log(fibonacci(3));

const findDup = dup => {
	let obj = {};
	let arr = [];
	let nonarr = [];
	for (i = 0; i < dup.length; i++) {
		if (obj[dup[i]]) {
			nonarr.push(dup[i]);
		} else {
			arr.push(dup[i]);
			obj[dup[i]] = true;
		}
	}
	return arr;
};

console.log(findDup([1, 1, 2, 3, 7, 7, 0]));
