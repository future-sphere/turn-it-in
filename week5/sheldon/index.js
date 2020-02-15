// --------------------------------------first question
// const isString = str => {
// 	if (str === +str) {
// 		return false;
// 	} else {
// 		return true;
// 	}
// };
// console.log(isString('jiaolian'));
// console.log(isString(123));

//--------------------------------------second question
// const isBlank = str => {
// 	if (str == '') {
// 		return true;
// 	} else {
// 		return false;
// 	}
// };
// console.log(isBlank(''));
// console.log(isBlank('yu'));

//--------------------------------------thrid question
// const turncateString = (str, num) => {
// 	return str.charAt(num);
// };
// console.log(turncateString('happy birthday', 1));

//--------------------------------------forth question
// const stringParameterize = str => {
// 	return str
// 		.toLowerCase()
// 		.split(' ')
// 		.join('-');
// };
// console.log(stringParameterize('MY Javascrpit SKIll is good af'));

//--------------------------------------fifth question
// const camelize = str => {
// 	//   return str.charAt(0).toUpperCase() + str.slice(1, str.length);
// 	let arr = str.split(' ');
// 	let answer = [];
// 	for (var i = 0; i < arr.length; i++) {
// 		if (i == 0) {
// 			answer.push(arr[i].toLowerCase());
// 		} else {
// 			console.log('hit');
// 			answer.push(
// 				arr[i].charAt(0).toUpperCase() +
// 					arr[i].slice(1, arr[i].length).toLowerCase(),
// 			);
// 		}
// 	}
// 	return answer.join('');
// };
// console.log(camelize('shelDon love coding'));

//--------------------------------------sixth question
const randomize = (min, max) => {
	return Math.floor(Math.random() * (max - min) + min);
};
console.log(randomize(10, 15));

// //--------------------------------------seventh question
// const strip = str => {
// 	return str.trim();
// };
// console.log(strip(' 123 15212 200 '));

// const striper = str => {
// 	if (str[0] === ' ' && str[length - 1] === ' ') {
// 		return str.slice(1, str[length - 2]);
// 	} else if (str[0] === ' ') {
// 		return str.slice(1, str[length - 1]);
// 	} else if (str[length - 1] === ' ') {
// 		return str.slice(0, str[length - 2]);
// 	} else {
// 		return str;
// 	}
// };

// console.log(striper(' 123 15212 200') + 123);

// //--------------------------------------eighth question
const rulingPhoneNumber = arr => {
	const phoneStr = arr.join('');
	return (
		'(' +
		phoneStr.slice(0, 3) +
		')-' +
		phoneStr.slice(3, 6) +
		'-' +
		phoneStr.slice(6, phoneStr.length)
	);
};

const formatPhoneNumber = input => {
	//用户输入信息
	const phoneArr = input.split('');
	//转化为arr
	const phoneNum = [];
	//用来收集号码
	for (var i = 0; i < phoneArr.length; i++) {
		if (phoneArr[i] == Number(phoneArr[i])) {
			//将用户输入的标点移除
			phoneNum.push(phoneArr[i]);
			//phoneNum里之有number
		}
	}

	if (phoneNum[0] == 1 && phoneNum.length == 11) {
		//当用户在电话里号码前加1 的时候
		phoneNum.shift();
	}

	if (input == rulingPhoneNumber(phoneNum)) {
		//用户输入正确
		return true;
	}

	if (phoneNum.length !== 10) {
		//太长或太短
		return false;
	} else {
		return rulingPhoneNumber(phoneNum);
		//callback rulingPhoneNumber 输出正确format
	}
};
console.log(formatPhoneNumber('.13476*+*547-566'));
