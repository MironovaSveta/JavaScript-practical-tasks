class DivideByZeroError extends Error {
	constructor(message) {
		super(message);
		this.name = "DivideByZeroError";
  }
}

try {
	console.log(a);
	let a = 3;
	//let a = 1/0;
	if (a == Infinity) throw new DivideByZeroError('cannot be divided by zero');
} catch (err){
	if (err instanceof ReferenceError) console.log("let must be declared");
	if (err instanceof DivideByZeroError) console.log(err.message);
}