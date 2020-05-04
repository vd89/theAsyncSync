const fs = require('fs');
const util = require('util');
//Fcb to async await
const readFile = util.promisify(fs.readFile);

async function foo() {
	try {
		const data = await readFile('ip.txt');
		console.log(data.toString());
	} catch (err) {
		console.log(err);
	}
}
foo();
