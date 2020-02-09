const isString = input => {
  if (typeof input == "string") {
    return true;
  } else {
    return false;
  }
};

// console.log(isString("8"));

const isBlank = input => {
  if (input.length === 0) {
    return true;
  } else {
    return false;
  }
};

// console.log(isBlank(""));

const truncateString = (input, num) => input.charAt(num);

// console.log(truncateString("Robin Hood", 4));

const stringParameterize = input => input.replace(/ /g, "-").toLowerCase();

// console.log(stringParameterize("Robin Hood from China"));

const camelize = input => {
  const x = input.split(" ").join("");
  const y = x.substr(0, 1).toLowerCase();
  const z = x.slice(1);
  return y + z;
};

// console.log(camelize("JavaScript Exercises"));

const randomize = (min, max) => {
  let x = Math.random();
  let y = min + x * (max - min);
  return Math.floor(y);
};

// console.log(randomize(10, 15));

const spaceTrailing = input => {
  const l = input.length;
  if (input.slice(l - 1) == " " && input.slice(0, 1) == " ") {
    return input.substring(1, l - 1);
  } else if (input.slice(l - 1) == " ") {
    return input.substring(0, l - 1);
  } else if (input.slice(0, 1) == " ") {
    return input.substring(1);
  }
};

// console.log(spaceTrailing(" Robin Hood from China "));

const phoneNumberFormating = num => {
  const input = num.replace(/ /g, "");
  let n = input.length;
  if (n == 11 && input.slice(0, 1) == 1) {
    const a = input.slice(1, 4);
    const b = input.slice(4, 7);
    const c = input.slice(7);
    return "(" + a + ")" + "-" + b + "-" + c;
  } else if (n > 10 && isNaN(input) == false) {
    return "false (not a valid phone number)";
  } else if (n < 10 && isNaN(input) == false) {
    return "false (not a valid phone number)";
  } else if (n == 10) {
    const a = input.slice(0, 3);
    const b = input.slice(3, 6);
    const c = input.slice(6);
    return "(" + a + ")" + "-" + b + "-" + c;
  } else if (
    n == 14 &&
    input.slice(0, 1) == "(" &&
    input.slice(4, 6) == ")-" &&
    input.slice(9, 10) == "-"
  ) {
    return "true (already formatted)";
  } else if (
    n > 10 ||
    input.indexOf("(") !== "-1" ||
    input.indexOf(")") !== "-1" ||
    input.indexOf("-") !== "-1"
  ) {
    const x = input.replace("(", "");
    const y = x.replace(")", "");
    const z = y.replace(/-/g, "");
    const a = z.slice(0, 3);
    const b = z.slice(3, 6);
    const c = z.slice(6);
    return "(" + a + ")" + "-" + b + "-" + c;
  } else {
    return "false (not a valid phone number)";
  }
};

console.log(phoneNumberFormating("6466397087"));
console.log(phoneNumberFormating("16466397087"));
console.log(phoneNumberFormating("(646)6397087"));
console.log(phoneNumberFormating("646-639-7087"));
console.log(phoneNumberFormating("646639-7087"));
console.log(phoneNumberFormating("347265918"));
console.log(phoneNumberFormating("34726591899"));
console.log(phoneNumberFormating("(646)-639-7087"));
