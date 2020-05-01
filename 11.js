//FCB, Promises, async await
const fs = require('fs');
//Promise : fullfilled, rejected, pending
function dodo() {
	return new Promise((resolve, reject) => {
		fs.readFile('ip.txt', (err, data) => {
			if (err) {
				reject(err);
			} else {
				resolve(data.toString());
			}
		});
	});
}
console.log("Hi");
dodo()
	.then((data) => {
		console.log(data);
	})
	.catch((err) => {
		console.log(err);
    });
console.log("Hello");
