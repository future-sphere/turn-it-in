// Write a JavaScript function isArray() to check whether an`input` is an array or not.

const isArray = arr => Array.isArray(arr);

console.log(isArray([1, 2, 3, 54]));
console.log(isArray(35));

//Write a simple JavaScript program  joinArray() to join all elements of the following array into a string.

const myList = ['orange', 'apple', 'grape'];
const toStr = arr => {
	return myList.join('$');
};
console.log(toStr());

//Write a JavaScript program to find the index of a number in a sorted array (DO NOT USE indexOf)

const findNum = (arr, n) => {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === n) {
			return i;
		}
	}
};
console.log(findNum([1, 2, 3, 4, 5], 5)); //Output: Index of 5 is 4
console.log(findNum([1, 2, 3, 4, 5, 6], 2)); //Output: Index of 2 is 1

//Write a JavaScript program to compute the sum of an array of integers

const sumOf = arr => {
	let total = 0;
	for (i = 0; i < arr.length; i++) {
		total = total + arr[i];
	}
	return total;
};
console.log(sumOf([1, 2, 3, 4, 5]));
console.log(sumOf([2, 7, 9]));

// OR reduce:
const sum = arr => {
	const result = arr.reduce((accu, cur) => {
		return accu + cur;
	});

	return result;
};

console.log(sum([1, 2, 3, 4, 5]));
console.log(sum([2, 7, 9]));

// Write a Javascript program to compute the product of an array of integers

const productOf = arr => {
	let total = 1;
	for (i = 0; i < arr.length; i++) {
		total = total * arr[i];
	}
	return total;
};

console.log(productOf([1, 2, 3, 4, 5])); // 120
console.log(productOf([2, 3])); // 6

// Write a JavaScript program to remove duplicate items from an array.

const removeDuplicate = arr => {
	let result = [];
	for (i = 0; i < arr.length; i++) {
		if (result.indexOf(arr[i]) === -1) {
			result.push(arr[i]);
		}
	}
	return result;
};

console.log(removeDuplicate([1, 1, 2, 3, 7, 7, 0])); //  [1, 2, 3, 7, 0]
console.log(removeDuplicate(['Peter', 'James', 'Bob', 'Peter'])); // [“Peter”, “James”, “Bob”]

// Find the leap years in a given range of years.

const toLeapYear = (min, max) => {
	const result = [];
	for (i = min; i < max; i++) {
		if (i % 4 === 0) {
			result.push(i);
		}
	}
	return result;
};

console.log(toLeapYear(2000, 2018)); // [2000, 2004, 2008, 2012, 2016]
console.log(toLeapYear(2013, 2015)); // []

// Write a JavaScript program to calculate the n - th fibonacci number: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55

const toFibonacci = n => {
	const fib = [1, 1];
	for (let i = 2; i <= n; i++) {
		fib[i] = fib[i - 2] + fib[i - 1];
	}
	return fib[n];
};

console.log(toFibonacci(0)); // 1
console.log(toFibonacci(4)); // 5
console.log(toFibonacci(3)); // 3
