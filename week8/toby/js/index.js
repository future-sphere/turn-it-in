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
