function abc() {
	return 'ABC';
}
setTimeout(todo1, 3000);
console.log(123);
console.log(abc());
function todo1() {
	console.log('I am Doing1');
}
function todo2() {
	console.log('I am Doing2');
}
setTimeout(todo2, 3000);
console.log(def());
console.log('Hello There ');
console.log(123);
function def() {
	return 'DEF';
}
/*
123
ABC
undefined
Hello There
123
undefined
I am Doing
*/
/*
123
ABC
DEF
Hello There
123
I m Doing
I m Doing
*/


/*
123
ABC
DEF
Hello There
123
I am Doing
I am Doing


*/




