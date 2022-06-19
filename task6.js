let animal = {
	move: console.log('animal is moving'),
}

let cat = {}

cat.__proto__ = animal;
cat.move;