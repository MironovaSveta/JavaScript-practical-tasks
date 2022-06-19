// 1. movies
let movies = ["Titanic", "Star Wars", "Twilight", "Taxi"]
for (let movie of movies) {
	console.log(movie);
}
// 2. car manufacturers
let carManufacturers = ["Volvo", "Kia", "Mercedes"]
console.log(Array(String(carManufacturers)));
// 3. friends
let friends = ["Ann", "Daniel", "Mary"];
console.log(friends.map(a => 'Hello ' + a));
// 4. convert to Boolean
let numericalArray = [0, 1, 2, 3, 4, 5];
let booleanArray = numericalArray.map(a => Boolean(a));
console.log(booleanArray);
// 5. sort
let arrToSort = [1, 6, 7, 8, 3, 4, 5, 6];
console.log(arrToSort.sort((a, b) => b - a));
// 6. filter
let arrToFilter = [1, 6, 7, 8, 3, 4, 5, 6];
console.log(arrToFilter.filter(a => a > 3));
// 7. function
function calcIndex(arr, number) {
	return arr.indexOf(number);
}
//console.log(calcIndex(numericalArray, 2))
// 8. loop prints numbers
a = 8;
while (a < 10) {
	console.log(a++);
}
// 9. loop prints prime numbers
for (let number = 1; number < 100; number++) {
	if (number == 2) console.log(number, 'is prime');
	for (let i = 2; i < number; i++) {
		if (number - 1 == i) console.log(number, 'is prime');
		if (number % i == 0) break;
	}
}
// 10. loop prints odd numbers
for (let i = 1; i < 10; i = i + 2) {
	console.log(i, 'is odd');
}