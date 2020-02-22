// // 1.
// let number;
// const checkPrime = number => {
// 	for (i = 2; i < number; i++) {
// 		if (number % i != 0) {
// 		} else {
// 			return number + ' is ' + 'not prime number';
// 		}
// 	}
// 	return number + ' is a prime number';
// };
// console.log(checkPrime(9));

// 2.

// let factors = [];
// let i = 2;
// const primeFactors = n => {
// 	while (n > 2) {
// 		if (n % i == 0) {
// 			factors.push(i);
// 			n = n / i;
// 		} else {
// 			i++;
// 		}
// 	}
// 	return factors;
// };
// console.log(primeFactors(10));

// 3;
// let arr = [0, 1];
// const fibonacci = n => {
// 	for (i = 2; i <= n; i++) {
// 		arr[i] = arr[i - 2] + arr[i - 1];
// 	}
// 	return arr[n - 1];
// };
// console.log(fibonacci(4));

// 4;
// let a, b;
// let greatestfactor;
// const findGreatestDivisor = (a, b) => {
// 	for (i = 1; i <= a && i <= b; i++) {
// 		if (a % i == 0 && b % i == 0) {
// 			greatestfactor = i;
// 		}
// 	}
// 	return greatestfactor;
// };
// console.log(findGreatestDivisor(15, 10));

// 5;
// let arr, n;
// let exists = {};
// let newArr = [];
// const reduceArr = arr => {
// 	for (i = 0; i < arr.length; i++) {
// 		n = arr[i];
// 		if (!exists[n]) {
// 			newArr.push(n);
// 			exists[n] = true;
// 		}
// 	}
// 	return newArr;
// };
// console.log(reduceArr([1, 2, 3, 3, 4]));

// 6;

// function mergeSortedArray(a, b) {
// 	let merged = [],
// 		aElm = a[0],
// 		bElm = b[0],
// 		i = 1,
// 		j = 1;

// 	if (a.length == 0) return b;
// 	if (b.length == 0) return a;

// 	while (aElm || bElm) {
// 		if ((aElm && !bElm) || aElm < bElm) {
// 			merged.push(aElm);
// 			aElm = a[i++];
// 		} else {
// 			merged.push(bElm);
// 			bElm = b[j++];
// 		}
// 	}
// 	return merged;
// }

// 7;
// let a, b;
// const swapnumber = (a, b) => {
// 	a = a - b;
// 	b = a + b;
// 	a = b - a;
// 	return 'after swapping a is ' + a + ' b is ' + b;
// };
// console.log(swapnumber(4, 3));

// 8;
// let newArr = [];
// const swapString = str => {
// 	let arr = str.split('');
// 	for (i = arr.length - 1; i >= 0; i--) {
// 		newArr.push(arr[i]);
// 	}
// 	return newArr.join('');
// };

// console.log(swapString('fibonacci'));

// 9;
// let newArr = [];
// const swapString = str => {
// 	let arr = str.split(' ');
// 	for (i = arr.length - 1; i >= 0; i--) {
// 		newArr.push(arr[i]);
// 	}
// 	return newArr.join(' ');
// };
// console.log(swapString(javascript is good))

// 10;
// function reverseInPlace(str) {
// 	return str
// 		.split(' ')
// 		.reverse()
// 		.join(' ')
// 		.split('')
// 		.reverse()
// 		.join('');
// }

// 11.
// function firstNonRepeatChar(str) {
//     var len = str.length,
//         char,
//         charCount = {};
//     for (var i = 0; i < len; i++) {
//         char = str[i];
//         if (charCount[char]) {
//             charCount[char]++;
//         }
//         else
//             charCount[char] = 1;
//     }
//     for (var j in charCount) {
//         if (charCount[j] == 1)
//             return j;
//     }
// }

// 12.
// function removeDuplicateChar(str) {
//     var len = str.length,
//         char,
//         charCount = {},
//         newStr = [];
//     for (var i = 0; i < len; i++) {
//         char = str[i];
//         if (charCount[char]) {
//             charCount[char]++;
//         }
//         else
//             charCount[char] = 1;
//     }
//     for (var j in charCount) {
//         if (charCount[j] == 1)
//             newStr.push(j);
//     }
//     return newStr.join('');
// }

// 13.

// function isPalindrome(str) {
//     var i, len = str.length;
//     for (i = 0; i < len / 2; i++) {
//         if (str[i] !== str[len - 1 - i])
//             return false;
//     }
//     return true;
// }

// 14.

// function rand5() {
//     return 1 + Math.random() * 4;
// }

// function rand7() {
//     return 5 + rand5() / 5 * 2;
// }

// 15.

// function missingNumber(arr) {
//     var n = arr.length + 1,
//         sum = 0,
//         expectedSum = n * (n + 1) / 2;

//     for (var i = 0, len = arr.length; i < len; i++) {
//         sum += arr[i];
//     }

//     return expectedSum - sum;
// }

// 16.
// function sumFinder(arr, sum) {
//     var len = arr.length;

//     for (var i = 0; i < len - 1; i++) {
//         for (var j = i + 1; j < len; j++) {
//             if (arr[i] + arr[j] == sum)
//                 return true;
//         }
//     }

//     return false;
// }

// 17.
// function topSum(arr) {

//     var biggest = arr[0],
//         second = arr[1],
//         len = arr.length,
//         i = 2;

//     if (len < 2) return null;

//     if (biggest < second) {
//         biggest = arr[1];
//         second = arr[0];
//     }

//     for (; i < len; i++) {

//         if (arr[i] > biggest) {
//             second = biggest;
//             biggest = arr[i];
//         }
//         else if (arr[i] > second) {
//             second = arr[i];
//         }

//     }
//     return biggest + second;
// }

//18.
// function countZero(n) {
//     var count = 0;
//     while (n > 0) {
//         count += Math.floor(n / 10);
//         n = n / 10;
//     }
//     return count;
// }

// 19.

// function subStringFinder(str, subStr) {
//     var idx = 0,
//         i = 0,
//         j = 0,
//         len = str.length,
//         subLen = subStr.length;

//     for (; i < len; i++) {

//         if (str[i] == subStr[j])
//             j++;
//         else
//             j = 0;

//         //check starting point or a match
//         if (j == 0)
//             idx = i;
//         else if (j == subLen)
//             return idx;
//     }

//     return -1;
// }

// 20.

// function permutations(str) {
//     var arr = str.split(''),
//         len = arr.length,
//         perms = [],
//         rest,
//         picked,
//         restPerms,
//         next;

//     if (len == 0)
//         return [str];

//     for (var i = 0; i < len; i++) {
//         rest = Object.create(arr);
//         picked = rest.splice(i, 1);

//         restPerms = permutations(rest.join(''));

//         for (var j = 0, jLen = restPerms.length; j < jLen; j++) {
//             next = picked.concat(restPerms[j]);
//             perms.push(next.join(''));
//         }
//     }
//     return perms;
// }
