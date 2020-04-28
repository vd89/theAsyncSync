//Array.map with rest and spread

//Asynch : FCB,Promises, Async await

var total = 0;
sum = (...numbers) => {
	// console.log(numbers);
	numbers.map((value) => {
		console.log(value);
		total += value;
	});
	console.log(total);
};

sum(1, 2, 3, 4, 5);
