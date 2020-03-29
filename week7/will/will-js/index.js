const isPrime = input => {
	for (let i = 2; i < +input; i++) {
		if (+input % i === 0) return false;
	}
	return true;
};

// console.log(isPrime(237));

const primeFactors = input => {
	const factorsArr = [];
	for (i = 2; i < +input; i++) {
		if (+input % i === 0) factorsArr.push(i);
	}
	return factorsArr;
};

// console.log(primeFactors(12));

const fibonacci = input => {
	let fibonacciArr = [0, 1];
	for (let i = 2; i <= input; i++) {
		fibonacciArr[i] = fibonacciArr[i - 1] + fibonacciArr[i - 2];
	}
	return fibonacciArr[input];
};

// console.log(fibonacci(12));

const greatestCommonDivisor = (x, y) => {
	const greatestCommonDivisorArr = [];
	for (let i = 1; i < +x; i++) {
		if (+x % i === 0 && +y % i === 0) greatestCommonDivisorArr.push(i);
	}
	return greatestCommonDivisorArr[greatestCommonDivisorArr.length - 1];
};

// console.log(greatestCommonDivisor(14, 21));

const removeDuplicate = input => {
	let obj = {};
	let arr = [];
	for (let i = 0; i < input.length; i++) {
		if (!obj[input[i]]) {
			arr.push(input[i]);
			obj[input[i]] = true;
		}
	}
	return arr;
};

// console.log(removeDuplicate([1, 3, 3, 3, 1, 5, 6, 7, 8, 1]));

const mergeSortedArray = (a, b) => {
	let merged = [],
		i = 0,
		j = 0;

	while (i <= a.length && j <= b.length) {
		if (i == a.length && j == b.length) {
			return merged;
		} else if (i == a.length && j < b.length) {
			merged.push(b[j]);
			j++;
		} else if (i < a.length && j == b.length) {
			merged.push(b[j]);
			j++;
		} else if (a[i] == b[j]) {
			merged.push(a[i]);
			i++;
			merged.push(b[j]);
			j++;
		} else if (a[i] < b[j]) {
			merged.push(a[i]);
			i++;
		} else if (a[i] > b[j]) {
			merged.push(b[j]);
			j++;
		}
	}
	return merged;
};

// console.log(mergeSortedArray([2, 5, 6, 9, 10, 11], [1, 2, 3, 29]));

const swapNum = (a, b) => {
	if (a < b)
		return 'a: ' + (a + Math.abs(a - b)) + ' ' + 'b: ' + (b - Math.abs(a - b));
	else
		return 'a: ' + (a - Math.abs(a - b)) + ' ' + 'b: ' + (b + Math.abs(a - b));
};

console.log(swapNum(3, 9));

const reverse = input => {
	if (!input || input.length < 2) return input;
	return input
		.split('')
		.reverse()
		.join('');
};

// console.log(reverse('you are a nice dude'));

const reverseWord = input => {
	return input.split(' ').reverse();
};

// console.log(reverseWord('I am the good boy'));

const reverseInPlace = input => {
	return input
		.split(' ')
		.reverse()
		.join(' ')
		.split('')
		.reverse()
		.join('');
};

// console.log(reverseInPlace('I am the good boy'));
