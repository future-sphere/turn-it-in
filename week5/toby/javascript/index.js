// 1.a

// const isString = data => typeof data === "string";
// let data = "future sphere";
// const result = isString(data);
// console.log(result);

//1.b

// const isString = data => typeof data === "string";
// let data = 35;
// const result = isString(data);
// console.log(result);

//2.a

// let data = "";
// const isBlank = data => data.length == 0;
// const result = isBlank(data);
// console.log(result);

//2.b

// let data = "peter";
// const isBlank = data => data.length == 0;
// const result = isBlank(data);
// console.log(result);

//3.a

// let data = "Robin Hood'";
// const truncateString = data => data.slice(4, 5);
// const result = truncateString(data);
// console.log(result);

//3.b

// let data = "Peter'";
// const truncateString = data => data.slice(2,3);
// const result = truncateString(data);
// console.log(result);

//4.a

// let data = "Robin Hood from China";
// const stringParameterize = data =>
//   data
//     .toLowerCase()
//     .split(" ")
//     .join("-");
// const result = stringParameterize(data);
// console.log(result);

//4.b
// let data = "United States Of America";
// const stringParameterize = data =>
//   data
//     .toLowerCase()
//     .split(" ")
//     .join("-");
// const result = stringParameterize(data);
// console.log(result);

//5.a

// let data = "JavaScript Exercises";
// const camelize = data =>
//   data
//     .replace(/\s(.)/g, function(a) {
//       return a.toUpperCase();
//     })
//     .replace(/\s/g, "")
//     .replace(/^(.)/, function(b) {
//       return b.toLowerCase();
//     });
// const result = camelize(data);
// console.log(result);

//5.b

// let data = "javaScript Exercises";
// const camelize = data =>
//   data
//     .replace(/\s(.)/g, function(a) {
//       return a.toUpperCase();
//     })
//     .replace(/\s/g, "")
//     .replace(/^(.)/, function(b) {
//       return b.toLowerCase();
//     });
// const result = camelize(data);
// console.log(result);

//5.c

// let data = "JavaScript Exercises";
// const camelize = data =>
//   data
//     .replace(/\s(.)/g, function(a) {
//       return a.toUpperCase();
//     })
//     .replace(/\s/g, "")
//     .replace(/^(.)/, function(b) {
//       return b.toLowerCase();
//     });
// const result = camelize(data);
// console.log(result);

//6.a

// console.log(Math.round(Math.random() * 5) + 10);

//6.b
// console.log(Math.round(Math.random() * 3) + 11);

//7.a

// const trailingSpaces = data => {
//   if (x == 0 && y == z - 1) {
//     return data.slice(1, z - 1);
//   } else if (y == z - 1) {
//     return data.slice(0, z - 1);
//   } else if (x == 0) {
//     return data.slice(1, z);
//   } else {
//     return data;
//   }
// };
// let data = " Robin Hood from China";
// let x = data.indexOf(" ");
// let y = data.lastIndexOf(" ");
// let z = data.length;
// const result = trailingSpaces(data);
// console.log(result);

//7.b

// const trailingSpaces = data => {
//   if (x == 0 && y == z - 1) {
//     return data.slice(1, z - 1);
//   } else if (y == z - 1) {
//     return data.slice(0, z - 1);
//   } else if (x == 0) {
//     return data.slice(1, z);
//   } else {
//     return data;
//   }
// };
// let data = " Robin Hood from China ";
// let x = data.indexOf(" ");
// let y = data.lastIndexOf(" ");
// let z = data.length;
// const result = trailingSpaces(data);
// console.log(result);

//8

const data = 1234567891;
const formatPhoneNumber = (data, x) => {
  switch (true) {
    case x == 14 &&
      data.slice(0, 1) == "(" &&
      data.slice(4, 6) == ")-" &&
      data.slice(10, 11) == "-" &&
      typeof data.slice(1, 4) === Number &&
      typeof data.slice(6, 10) === Number &&
      typeof data.slice(11, 14) === Number:
      return "true(already formatted)";
    case data.length == 10:
      return (
        "(" +
        data.substring(0, 2) +
        ")-" +
        data.substring(3, 5) +
        "-" +
        data.substring(6, 9)
      );
    case x <= 13 &&
      data.slice(0, 1) == "(" &&
      data.slice(4, 6) == ")-" &&
      data.slice(10, 11) == "-" &&
      typeof data.slice(1, 4) === Number &&
      typeof data.slice(6, 10) === Number &&
      typeof data.slice(11, 14) === Number:
      return "true(already formatted)";
    case x == 14 &&
      data.slice(0, 1) == "(" &&
      data.slice(4, 6) == ")-" &&
      data.slice(10, 11) == "-" &&
      typeof data.slice(1, 4) === Number &&
      typeof data.slice(6, 10) === Number &&
      typeof data.slice(11, 14) === Number:
      return "true(already formatted)";
    case data.length == 14 &&
      data.slice(0, 1) == "(" &&
      data.slice(4, 6) == ")-" &&
      data.slice(10, 11) == "-" &&
      typeof data.slice(1, 4) === Number &&
      typeof data.slice(6, 10) === Number &&
      typeof data.slice(11, 14) === Number:
      return "true(already formatted)";
    case data.length == 14 &&
      data.slice(0, 1) == "(" &&
      data.slice(4, 6) == ")-" &&
      data.slice(10, 11) == "-" &&
      typeof data.slice(1, 4) === Number &&
      typeof data.slice(6, 10) === Number &&
      typeof data.slice(11, 14) === Number:
      return "true(already formatted)";
    case data.length == 14 &&
      data.slice(0, 1) == "(" &&
      data.slice(4, 6) == ")-" &&
      data.slice(10, 11) == "-" &&
      typeof data.slice(1, 4) === Number &&
      typeof data.slice(6, 10) === Number &&
      typeof data.slice(11, 14) === Number:
      return "true(already formatted)";
  }
};
