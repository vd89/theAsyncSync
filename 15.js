const axios = require('axios');

// axios
// 	.get('https://jsonplaceholder.typicode.com/todos/1')
// 	.then((res) => {
// 		console.log(res.data);
// 	})
// 	.catch((err) => {
// 		console.log(err);
// 	});

console.log('Iam Blocking');
//Async Await
async function ping() {
	try {
		const res = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
		console.log(res.data);
	} catch (err) {
		console.log(err);
	}
}
ping();
console.log('Iam Blocking too');
/*

Step1
Step2 
Step3


*/
