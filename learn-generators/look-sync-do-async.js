/*
 * Generators can allow us to hide asynchronicity as
 * an implementation detail.
 *
 * The tradeoff for hiding these details is that the
 * implementation (once we understand it) because more
 * easily readable and maintainable (like synchronous
 * code).
 *
 * How does it work? Since generators can pause their
 * execution, they can wait for async calls to complete.
 */

const fs = require('fs');

function run (generator) {
	var it = generator(go);

	function go (err, result) {
		it.next(result);
	}

	go(); // run the generator-iterator once to initialize it
}

run(function* (done) {
	var dirFiles = yield fs.readdir('NoNoNoNo', done); //no such dir
	try {
		var firstFile = dirFiles[0]; //TypeError: Cannot read property '0' of undefined
	} catch {
		var firstFile = null;
	}
	console.log(firstFile);
})
