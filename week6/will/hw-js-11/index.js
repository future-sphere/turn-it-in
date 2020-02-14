const isArray = input => Array.isArray(input);

// console.log(isArray([1, 2, 3]))

const joinArray = input => input.join("$");

// console.log(joinArray(["orange", "apple", "grape"]))

const findArr = (input, num) => {
    const newArr = input.map((v, i) => {
        if (+v === num) {
            return i;
        }
    });
    return "Index of " + num + " is " + newArr.join("");
};

// console.log(findArr([1, 2, 3, 4, 5], 5));

const sumArr = input => {
    const recursion = (curr, total) => {
        if (curr < input.length) {
            return recursion(curr + 1, total + +input[curr]);
        }
        return total;
    };
    return recursion(0, 0);
};

// console.log(sumArr([2, 7, 10]));

const productArr = input => {
    const recursion = (curr, total) => {
        if (curr < input.length) {
            return recursion(curr + 1, total * +input[curr]);
        }
        return total;
    };
    return recursion(0, 1);
};

// console.log(productArr([1, 2, 3, 4, 5]));

const removeDuplicate = input => {
    let obj = {};
    let arr = [];
    let nonArr = []
    for (let i = 0; i < input.length; i++) {
        if (obj[input[i]]) {
            nonArr.push(input[i])
        } else {
            arr.push(input[i])
            obj[input[i]] = true
        }
    }
    return arr
}

// console.log(removeDuplicate(['Peter', 'James', 'Bob', 'Peter']));

const leapYears = (min, max) => {
    let yearArr = []
    for (let i = min; i <= max; i++) {
        if (i % 4 === 0) {
            yearArr.push(i)
        }
    }
    return yearArr
}

// console.log(leapYears(2013, 2015))

const fibonacci = input => {
    let fibonacciArr = [1, 1]
    for (let i = 2; i <= input; i++) {
        fibonacciArr[i] = fibonacciArr[i - 1] + fibonacciArr[i - 2];
    };
    return fibonacciArr[input]
};


// console.log(fibonacci(4))