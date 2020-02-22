const isString = string => {
  if (typeof string === "string") {
    return true;
  }
  return false;
};

console.log(isString("future sphere"));
console.log(isString(35));

const isBlank = blank => {
  if (blank.length === 0) {
    return true;
  }
  return false;
};

console.log(isBlank(""));
console.log(isBlank("peter"));

const truncateString = (string, number) => {
  return string.charAt(number);
};

console.log(truncateString("Robin Hood", 4));
console.log(truncateString("peter", 2));

const stringParameterize = dash => {
  return dash.split(" ").join("-");
};

console.log(stringParameterize("Ronbin Hood from China"));
console.log(stringParameterize("United State of America"));

const camelize = str => {
  str.toLowerCase(); // "sunny wang"
  const arr = str.split(" "); // arr = ["sunny", "wang"]; str = "sunny wang"
  arr[1] = arr[1][0].toUpperCase() + arr[1].slice(1); // arr = ["sunny", "Wang"]; arr[1] = "wang"
  return arr.join("");
};

console.log(camelize("Javascript Excercise")); // sunnyWang

const randomize = (min, max) => {
  return Math.floor((max - min) * Math.random() + min);
};

console.log(randomize(10, 15));
console.log(randomize(10, 15));

const noSpace = str => {
  if (str[0] === " ") {
    str.splice(0, 1);
  }
  if (str[str.length - 1] === "") {
    str.splice(str.length - 1, 1);
  }
  return str;
};
