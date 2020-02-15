// // ---------------------------------------question1
// const isArray = arr => {
//   if (typeof arr === "object") {
//     return true;
//   }
//   return false;
// };

// console.log(isArray([1, 2, 3, 54]));
// console.log(isArray(35));

// // ---------------------------------------question2
// const joinArray = (arr, ele) => {
//   return arr.join(ele);
// };

// console.log(joinArray(["orange", "apple", "grape"], "$"));

// // ---------------------------------------question3
// const indexOf = (arr, i) => {
//   return "Index of " + i + " is " + arr.indexOf(i);
// };

// console.log(indexOf([1, 2, 3, 4, 5], 5));
// console.log(indexOf([1, 2, 3, 4, 5, 6], 2));

// const indexOf = (arr, num) => {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === num) {
//       return i;
//     }
//   }
// };
// console.log(indexOf([1, 2, 3, 4, 5], 5));

// // ---------------------------------------question4
// const sumOfArray = arr => {
//   const add = (total, i) => {
//     if (i > 0) {
//       return add(total + arr[i - 1], i - 1);
//     }
//     return total;
//   };
//   return add(0, arr.length);
// };

// console.log(sumOfArray([1, 2, 3, 4, 5]));

// const sumOfArray = arr => {
//   let total = 0;
//   for (let i = 0; i < arr.length; i++) {
//     total += arr[i];
//   }
//   return total;
// };

// console.log(sumOfArray([1, 2, 3, 4, 5]));

// const sumOfArray = arr => {
//   const result = arr.reduce((acc, cur) => (acc += cur));
//   return result;
// };

// console.log(sumOfArray([1, 2, 3, 4, 5]));

// // ---------------------------------------question5
// const proOfArray = arr => {
//   const time = (total, i) => {
//     if (i > 0) {
//       return time(total * arr[i - 1], i - 1);
//     }
//     return total;
//   };
//   return time(1, arr.length);
// };

// console.log(proOfArray([1, 2, 3, 4, 5]));

// const proOfArray = arr => {
//   const result = arr.reduce((acc, cur) => (acc *= cur));
//   return result;
// };
// console.log(proOfArray([1, 2, 3, 4, 5]));

// ---------------------------------------question6
// const rmvDup = arr => {
//   let exist = {};
//   ans = [];
//   ele = "";

//   for (let i = 0; i < arr.length; i++) {
//     ele = arr[i];
//     if (!exist[ele]) {
//       ans.push(ele);
//       exist[ele] = true;
//     }
//   }
//   return ans;
// };
// console.log(rmvDup([1, 1, 2, 2, 3, 7, 7, 0]));
// console.log(rmvDup(["Peter", "James", "Bob", "Peter"]));

// // ---------------------------------------question7
// const findLeapYear = (smallYear, largerYear) => {
//   let arr = [];
//   for (let i = smallYear; i < largerYear; i++) {
//     if (i % 4 === 0) {
//       arr.push(i);
//     }
//   }
//   return arr;
// };
// console.log(findLeapYear(2017, 2018));

// // ---------------------------------------question8
// const fibo = n => {
//   if (n < 2) {
//     return 1;
//   }
//   let arr = [0, 1];
//   for (let i = 2; i <= n; i++) {
//     arr[i] = arr[i - 1] + arr[i - 2];
//   }
//   return arr[n];
// };
// console.log(fibo(12));
