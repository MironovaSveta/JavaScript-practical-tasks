////////////////////////////////////////////////////////////////
// Working with a car object
let car = {
	color: "black",
}
car.color = "green"
car.power = function(enginePower = 0) {
	console.log(`the engine power is ${enginePower}`)
}
//car.power();
//car.power(10);
////////////////////////////////////////////////////////////////
// Working with the warehouse
function calcNumberOfFruit(nPears, nApples) {
	return nPears + nApples
}
//console.log(calcNumberOfFruit(4, 5));
////////////////////////////////////////////////////////////////
// Working with the terminal
function getName(name) {
	if (name) {
		console.log(`Hello ${name}`);
	} else {
		console.log("there is no such name");
	}
}
//getName();
//getName("John");
////////////////////////////////////////////////////////////////
// get type of an argument
function getArgumentType(argument) {
	console.log(typeof(argument))
}
//getArgumentType(11);
////////////////////////////////////////////////////////////////
// define is the number prime
function checkPrime(number) {
	for (let i = 2; i < number; i++) {
		if (number % i == 0) {
			console.log(`${number} is not prime`);
			return;
		}
    }

    console.log(`${number} is prime`);
}
//checkPrime(12);
//checkPrime(13);
////////////////////////////////////////////////////////////////