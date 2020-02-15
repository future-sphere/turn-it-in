// isArray = input => {
//   return Array.isArray(input);
// };
// console.log(isArray([1, 2, 3, 54]));
// console.log(isArray(35));

// joinArray = input => {
//   return input
//     .join()
//     .split(",")
//     .join("$");
// };
// // console.log(joinArray(["apple", "orange", "grape"]));

// const arr = [1, 2, 3, 4, 5];
// findIndex = input => {
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i].toString() === input.toString()) {
//       return "The index of " + input + " is " + i;
//     }
//   }
// };
// console.log(findIndex(3));

// let sum = 0;
// let arr;
// const sumOf = arr => {
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// };

// console.log(sumOf([1, 2, 3, 4, 5]));
// console.log(sumOf([2,7,10]))

// let sum = 1;
// let arr;
// const sumOf = arr => {
//   for (let i = 0; i < arr.length; i++) {
//     sum = sum * arr[i];
//   }
//   return sum;
// };

// // console.log(sumOf([1, 2, 3, 4, 5]));
// console.log(sumOf([2, 3]));

// let arr = ["Peter", "James", "Bob", "Peter"];
//let arr=[1,1,2,3,7,7,0]
// let newArr = [];
// arr.map(i => {
//   if (!newArr.includes(i)) {
//     newArr.push(i);
//   }
// });

// console.log(newArr);

// let arr = [];
// const findLeapYear = arr => {
//   for (i = 2000; i <= 2018; i++) {
//     if (4 % i === 0) {
//       arr.push(i);
//       return arr;
//     }
//     return;
//   }
//   return arr;
// };
// console.log(findLeapYear(arr));

// const findLeapYear = (startYear, endYear) => {
//   let years = [];
//   for (i = startYear; i <= endYear; i++) {
//     years.push(i);
//   }

//   let newArr = [];
//   years.forEach(function(year) {
//     if (newFunction(year)) newArr.push(year);
//   });
//   return newArr;
// };

// const newFunction = year => {
//   if (year % 4 === 0) {
//     return year;
//   } else {
//     return false;
//   }
// };

// console.log(findLeapYear(2000, 2018));

let arr = [0, 1];
const calculateFibonacci = n => {
  for (i = 2; i <= n; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr;
};

console.log(calculateFibonacci(9));
