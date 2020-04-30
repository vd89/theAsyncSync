//1)  fun(2,3)=5 (For two parameters => Sum) fun(2,3,5)=> 30

function fun(a, b, c) {
	if (arguments.length == 2) {
		console.log(a + b);
	}
	if (arguments.length == 3) {
		console.log(a * b * c);
	}
}

fun(2, 3);
fun(2, 3, 5);
