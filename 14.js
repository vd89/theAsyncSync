//FCB, Promises, Async Await
//FCB - CBH => Promises

// fs.readFile('ip.txt', (err, data) => {
// 	if (err) {
// 		throw err;
// 	}
// 	console.log(data.toString());
// });
//Method 1 : Converting a Function Callback to Promises
const fs = require('fs');
const util = require('util');
// function todo() {
// 	return new Promise((resolve, reject) => {
// 		fs.readFile('ip2.txt', (err, data) => {
// 			if (err) {
// 				reject(err);
// 				return;
// 			}
// 			resolve(data.toString());
// 		});
// 	});
// }

// todo()
// 	.then((data) => {
// 		console.log(data);
// 	})
// 	.catch((err) => {
// 		console.log(err);
// 	});

//Method 2 : Using Util.Promisify

const readFile = util.promisify(fs.readFile);

readFile('ip.txt')
	.then((data) => {
		console.log(data.toString());
	})
	.catch((err) => {
		console.log(err);
	});
