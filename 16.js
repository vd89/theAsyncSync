const axios = require('axios');
//Async Await
console.log("Started");
(async () => {
	try {
		console.log(1);
		const res1 = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
		console.log(res1.data);
		console.log(3);

		const res2 = await axios.get('https://jsonplaceholder.typicode.com/todos/2');
		console.log(res2.data);
	} catch (err) {
		console.log(err);
	}
})();
console.log("Done");