/* 
GET http://localhost:5000/add/num1/num2
Reponse : 5
*/
const axios = require('axios');
const readLineSync = require('readline-sync');

const num1 = readLineSync.question('Enter Num1 : ');
const num2 = readLineSync.question('Enter Num2 : ');
axios
	.get(`http://localhost:5000/add/${num1}/${num2}`)
	.then((res) => {
		let sum1 = res.data.split(' ')[1];
		const num3 = readLineSync.question('Enter Num3 : ');
		axios
			.get(`http://localhost:5000/add/${sum1}/${num3}`)
			.then((res) => {
				console.log(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	})
	.catch((err) => {
		console.log(err);
	});
