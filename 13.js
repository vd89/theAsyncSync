const axios = require('axios');
const readLineSync = require('readline-sync');

const num1 = readLineSync.question('Enter Num1 : ');
const num2 = readLineSync.question('Enter Num2 : ');

function dosum(a, b) {
	return new Promise((resolve, reject) => {
		axios
			.get(`http://localhost:5000/add/${num1}/${num2}`)
			.then((res) => {
				let sum = res.data.split(' ')[1];
				resolve(sum);
			})
			.catch((err) => {
				reject(err);
			});
	});
}
dosum(num1, num2)
	.then((sum) => {
		const num3 = readLineSync.question('Enter Num3 : ');
		return Number(sum) + Number(num3);
	})
	.then((sum) => {
		const num4 = readLineSync.question('Enter Num4 : ');
		console.log(Number(sum) + Number(num4));
	});
