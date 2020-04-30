/*
 FCB , Promises , Async Await
 event Loop, Async/Non Blocking
*/

//Lets make axios call (GET) to 'https://api.ipify.org?format=json' => save the IP in text file

//Promise : Axios : To make Network requests

const axios = require('axios');
const fs = require('fs');
//HTTP GET

console.log('I m first');
axios
	.get('https://api.ipify.org?format=json')
	.then((response) => {
		console.log(response.data);
		fs.writeFile('ip.txt', response.data.ip, (err) => {
			if (err) {
				throw err;
			}
			console.log('Check the file');
		});
	})
	.catch((err) => {
		console.log(err);
	});

console.log('I m second');
// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation completed successfully.
// rejected: meaning that the operation failed.
