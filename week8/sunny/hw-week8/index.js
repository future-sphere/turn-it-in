// 12. Remove duplicate characters from a sting?

const removeDuplicateCharacter = str => {
	let result = [];
	for (i = 0; i < str.length; i++) {
		if (result.indexOf(str[i]) === -1) {
			result.push(str[i]);
		}
	}
	return result.join('');
};

console.log(removeDuplicateCharacter('sunniiiw'));

//13. Verify a word as palindrome?

const isPalindrome = str => {
	const arr = str.split('');
	const result = [];
	for (i = arr.length - 1; i >= 0; i--) {
		result.push(arr[i]);
	}
	for (i = 0; i < arr.length; i++) {
		if (arr[i] === result[i]) {
			return true;
		}
		return false;
	}
};

console.log(isPalindrome('madam'));
console.log(isPalindrome('great'));

//14. Generate random between 5 to 7 by using defined function.

const rand5 = () => 1 + Math.random() * 4;
// console.log(rand5());
const rand7 = () => 5 + (rand5() / 5) * 2;
console.log(rand7());

//15. Find missing number from unsorted array of integers.

const findMissingNum = (arr, n) => {
	let total = (n * (n + 1)) / 2;
	sum = 0;
	for (i = 0; i < n - 1; i++) {
		sum = sum + arr[i];
	}
	return total - sum;
};

console.log(findMissingNum([1, 2, 3, 5, 6], 6));

//16. Check whether any two numbers in an array sums to a given number?

const isSum = (arr, n) => {
	for (i = 0; i < arr.length - 1; i++) {
		for (j = i + 1; j < arr.length; j++) {
			if (arr[i] + arr[j] === n) return true;
		}
	}
	return false;
};
console.log(isSum([5, 8, 3, 2, 1, 7], 2));
console.log(isSum([5, 8, 3, 2, 1, 7], 9));
console.log(isSum([5, 8, 3, 2, 1, 7], 13));

// 17. Find the largest sum of any two elements?
