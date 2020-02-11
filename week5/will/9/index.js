const isString = input => {
  if (typeof input == "string") {
    return true;
  }
  return false;
};

// console.log(isString("8"));

const isBlank = input => {
  if (input.length === 0) {
    return true;
  }
  return false;
};

// console.log(isBlank(""));

const truncateString = (input, num) => input.charAt(num);

// console.log(truncateString("Robin Hood", 4));

const stringParameterize = input => input.replace(/ /g, "-").toLowerCase();

// console.log(stringParameterize("Robin Hood from China"));

const camelize = input => {
  const initial = input
    .split(" ")
    .join("")
    .substr(0, 1)
    .toLowerCase();
  const residualWord = input
    .split(" ")
    .join("")
    .slice(1);
  return initial + residualWord;
};

// console.log(camelize("JavaScript Exercises"));

const randomize = (min, max) => Math.floor(min + Math.random() * (max - min));

// console.log(randomize(10, 15));

const spaceTrailing = input => {
  const length = input.length;
  if (input.slice(length - 1) == " " && input.slice(0, 1) == " ") {
    return input.substring(1, length - 1);
  } else if (input.slice(length - 1) == " ") {
    return input.substring(0, length - 1);
  } else if (input.slice(0, 1) == " ") {
    return input.substring(1);
  }
};

// console.log(spaceTrailing(" Robin Hood from China "));

// const phoneNumberFormating = num => {
//   const input = num.replace(/ /g, "");
//   let length = input.length;
//   if (length == 11 && input.slice(0, 1) == 1) {
//     const firstPart = input.slice(1, 4);
//     const secondPart = input.slice(4, 7);
//     const thirdPart = input.slice(7);
//     return "(" + firstPart + ")" + "-" + secondPart + "-" + thirdPart;
//   } else if (length > 10 && isNaN(input) == false) {
//     return "false (not a valid phone number)";
//   } else if (length < 10 && isNaN(input) == false) {
//     return "false (not a valid phone number)";
//   } else if (length == 10) {
//     const firstPart = input.slice(0, 3);
//     const secondPart = input.slice(3, 6);
//     const thirdPart = input.slice(6);
//     return "(" + firstPart + ")" + "-" + secondPart + "-" + thirdPart;
//   } else if (
//     length == 14 &&
//     input.slice(0, 1) == "(" &&
//     input.slice(4, 6) == ")-" &&
//     input.slice(9, 10) == "-"
//   ) {
//     return "true (already formatted)";
//   } else if (
//     length > 10 ||
//     input.indexOf("(") !== "-1" ||
//     input.indexOf(")") !== "-1" ||
//     input.indexOf("-") !== "-1"
//   ) {
//     const firstFormat = input.replace("(", "");
//     const secondFormat = firstFormat.replace(")", "");
//     const finalFormat = secondFormat.replace(/-/g, "");
//     return phoneNumberFormating(finalFormat)
//   }
//   return "false (not a valid phone number)";
// };

const phoneNumberFormating = num => {
  // const newNumArr = [];
  const numArr = num.split("");

  // numArr.forEach(v => {
  //   if (+v == v) {
  //     newNumArr.push(v);
  //   }
  // });

  // for (let i = 0; i <= numArr.length; i++) {
  //   if (+numArr[i] == numArr[i]) {
  //     newNumArr.push(numArr[i]);
  //   }
  // }

  const newNumArr = numArr.map(v => {
    if (+v == v) {
      return v;
    }
  });

  const input = newNumArr.join("");
  let length = input.length;
  if (length == 11 && input.slice(0, 1) == 1) {
    const firstPart = input.slice(1, 4);
    const secondPart = input.slice(4, 7);
    const thirdPart = input.slice(7);
    return "(" + firstPart + ")" + "-" + secondPart + "-" + thirdPart;
  } else if (
    num.length == 14 &&
    num.slice(0, 1) == "(" &&
    num.slice(4, 6) == ")-" &&
    num.slice(9, 10) == "-"
  ) {
    return "true (already formatted)";
  } else if (length == 10) {
    const firstPart = input.slice(0, 3);
    const secondPart = input.slice(3, 6);
    const thirdPart = input.slice(6);
    return "(" + firstPart + ")" + "-" + secondPart + "-" + thirdPart;
  }
  return "false (not a valid phone number)";
};

console.log(phoneNumberFormating("6466397087"));
console.log(phoneNumberFormating("16466397087"));
console.log(phoneNumberFormating("(646)6397087"));
console.log(phoneNumberFormating("646-639-7087"));
console.log(phoneNumberFormating("646639-7087"));
console.log(phoneNumberFormating("347265918"));
console.log(phoneNumberFormating("34726591899"));
console.log(phoneNumberFormating("(646)-639-7087"));
