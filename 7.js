const readline = require('readline');
//Command Line Inputs / Standard Input Asyncly
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});
console.log("First");
rl.question('What is your name ? ', (name) => {
	rl.question('Enter your address : ', (address) => {
		console.log(name);
		console.log(address);
		rl.close();
	});
});
console.log("Second");
// const readlineSync = require("readline-sync");

// const input = readlineSync.question("Enter the story : ");
// //Standard Inputs or Command Line Inputs (Synchronously)
// console.log(input);
