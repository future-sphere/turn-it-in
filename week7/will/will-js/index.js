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
		aElm = a[0],
		bElm = b[0],
		i = 1,
		j = 1;

	if (a.length == 0) return b;
	if (b.length == 0) return a;

	while (aElm || bElm) {
		if ((aElm && !bElm) || aElm < bElm) {
			merged.push(aElm);
			aElm = a[i++];
		} else {
			merged.push(bElm);
			bElm = b[j++];
		}
	}
	return merged;
};

// console.log(mergeSortedArray([2, 5, 6, 9], [1, 2, 3, 29]));

const swapNum = (a, b) => {
	const x = Math.abs(a - b);
	if (a < b) return 'a: ', a + x, 'b: ', b - x;
	else return 'a: ', a - x, 'b: ', b + x;
};

// console.log(swapNum(3, 9));

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
