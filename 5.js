/*
Standard Inputs and Command Line Arguments***

    1) Create a program to take input data and file name through command line input
    2) Create a file with the content from cmd line input(stdin) and save the file in dest
    3) Read the content that is saved and print the buffer

*/
const fs = require('fs');
const readLineSync = require('readline-sync');
const fileData = readLineSync.question('Please Enter your Data : \n');
const fileName = readLineSync.question('Please Enter File Name : ');

fs.writeFile(`/mnt/d/practice/${fileName}`, fileData, (err) => {
	if (err) {
		throw err;
	} else {
		fs.readFile(`/mnt/d/practice/${fileName}`, (err, data) => {
			if (err) {
				throw err;
			} else {
				console.log(data.toString());
			}
		});
		console.log('File is succesfully Created');
	}
});
