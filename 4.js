//Sync vs Async Blocking vs Non Blocking
//Sync
// FCB, Promises , Async Await
//File System ??
const fs = require('fs');
console.log('I am about to open the file hai.txt');
//Read File Call Back
fs.readFile('hai.txt', (err, data) => {
	if (err) {
		throw err;
	}
	console.log(data.toString());
});
const data = fs.readFileSync('new.txt');
console.log(data.toString());
console.log('I am done reading the file hai.txt');
