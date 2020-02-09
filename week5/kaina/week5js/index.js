const kaina = {
  firstName: "Kaina",
  lastName: "Zhang",
  planceOfBirth: "China",
  dateOfBirth: "November 29th 1994",
  age: 25,
  graduatedFromCollege: true,
  favoriteFood: ["corn", "french fries", "bubble tea"],
  pet: "shiba inu",
  college: {
    name: "Baruch",
    location: "New York",
    graduatedYear: 2018
  }
};

// console.log(kaina.age);
// console.log(kaina.pet, kaina.college.location);
// document.write(kaina.favoriteFood, kaina.pet, kaina.age);

const isString = kaina => {
  if (typeof kaina == "string") {
    return true;
  } else {
    return false;
  }
};
// console.log(isString("future sphere"));
// console.log(isString(35));
// console.log(isString("will"));

const isBlank = input => {
  if (input.length == 0) {
    return true;
  } else {
    return false;
  }
};

// console.log(isBlank(""));
// console.log(isBlank("peter"));

const truncateString = (kaina, will) => kaina.charAt(will);

// console.log(truncateString("Robin Hood", "4"));
// console.log(truncateString("Peter", "2"));

const stringParameterize = parameter =>
  parameter
    .toLowerCase()
    .split(" ")
    .join("-");

// console.log(stringParameterize("Robin Hood from China"));
// console.log(stringParameterize("United State Of America"));

const camelize = camel =>
  camel[0].toLowerCase() +
  camel
    .slice(1)
    .split(" ")
    .join("");

// console.log(camelize("JavaScript Exercises"));
// console.log(camelize("javaScript Exercises"));
// console.log(camelize("JavaScriptExercises"));

const randomize = (min, max) => Math.floor(Math.random() * (max - min) + min);

// console.log(randomize(10, 15));

const stripSpace = space => {
  if (space[0] == " " && space.substring(space.length - 1) == " ") {
    return space.substring(1, space.length - 1);
  } else if (space[0] == " ") {
    return space.slice(1);
  } else if (space.substring(space.length - 1) == " ") {
    return space.substring(0, space.length - 1);
  }
};
// console.log(stripSpace(" Ronbin Hood from China"));
// console.log(stripSpace("Ronbin Hood from China "));
// console.log(stripSpace(" Ronbin Hood from China "));

// const formatPhoneNumber = num => {
//   const num = num.toString;
// };

// console.log(formatPhoneNumber(6466397087));
