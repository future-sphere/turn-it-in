//1. Verify a prime number?
const isPrime = num => {
	for (i = 2; i < num; i++) {
		if (num % i === 0) {
			return false;
		}
	}
	return true;
};
console.log(isPrime(71));

//2. Find all prime factors of a number?
const findPrimeFactor = num => {
	let factor = [];
	for (i = 2; i < num; i++) {
		if (num % i === 0) {
			factor.push(i);
		}
	}
	return factor;
};

console.log(findPrimeFactor(18));

//3. Get nth Fibonacci number?
// 1, 1, 2, 3, 5, 8, 13, 21, 33,...

const findFibonacci = n => {
	let arr = [1, 1];
	for (let i = 2; i <= n; i++) {
		arr[i] = arr[i - 1] + arr[i - 2];
	}
	return arr[n];
};

console.log(findFibonacci(5));

//4. Find the greatest common divisor of two numbers?

const findCommonDivisor = (x, y) => {
	let divisor = [];
	for (i = 1; i <= x; i++) {
		if (x % i === 0 && y % i === 0) {
			divisor.push(i);
		}
	}
	return divisor[divisor.length - 1];
};

console.log(findCommonDivisor(15, 25));

//5. Remove duplicate members from an array?

const removeDuplicate = arr => {
	let result = [];
	for (i = 0; i < arr.length; i++) {
		if (result.indexOf(arr[i]) === -1) {
			result.push(arr[i]);
		}
	}
	return result;
};

console.log(removeDuplicate([1, 1, 3, 4, 5, 5, 7, 8]));

//6. Merge two sorted array?

//1，2，3
//1，2，3
//1，1，2，2，3，3，4，4，5，5

//7. Swap two numbers without using a temp variable?

5,8
5,8,5 //存了第一个在最后面
8,8,5 //把第一位换成第二位
8,5,5 //把第二位换成第三位（第一位）
8,5 //删掉随后一个



//8.Reverse a string in JavaScript?

const reverseString = str => {
	result = [];
	for (i = str.length - 1; i >= 0; i--) {
		result.push(str[i]);
	}
	return result.join('');
};

console.log(reverseString('how are you today'));

//9. Reverse words in a sentence?

const reverseWords = str => {
	let arr = str.split(' ');
	result = [];
	for (i = arr.length - 1; i >= 0; i--) {
		result.push(arr[i]);
	}
	return result.join(' ');
};

console.log(reverseWords('how are you today'));

// 10. Reverse words in place?

const reverseCharacter = str => {
	arr = str.split(' ');
	result = [];
	for (i = 0; i < arr.length; i++) {
		arr[i].reverse();
	}
	return result.push(arr[i]);
};

console.log(reverseCharacter('how are you today'));

// const reverseInPlace = str => {
// 	return str
// 		.split(' ')
// 		.reverse()
// 		.join(' ')
// 		.split('')
// 		.reverse()
// 		.join('');
// };

// console.log(reverseInPlace('how are you today'));

//12.Remove duplicate characters from a sting?

const removeDuplicateCharacter = str => {
	let result = [];
	for (i = 0; i < str.length; i++) {
		if (result.indexOf(str[i]) === -1) {
			result.push(str[i]);
		}
	}
	return result.join('');
};

console.log(removeDuplicateCharacter('sunniiiw')); //  ???

//15. Find missing number from unsorted array of integers.

const findMissingNum = (arr, n) => {
	let total = (n * (n + 1)) / 2;
	sum = 0;
	for (i = 0; i < n; i++) {
		sum = sum + arr[i];
	}
	return total - sum;
};

console.log(findMissingNum([1, 2, 3, 5], 5));
