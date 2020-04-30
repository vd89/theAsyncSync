//Write a program to sum the two numbers
//Take inputs as command line arguments


function sum(a,b){
    console.log(Number(a)+Number(b));
}

sum(process.argv[2], process.argv[3]);