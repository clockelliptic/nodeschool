/*
 * Generators do away with the cumbersome boilerplate involved in
 * writing advanced Iterators (as we saw in advanced-itertors.js)
 *
 * Since generators return an iterator, arguments can still be
 * passed into the .next() method as before, but to do so is
 * a bit different.
 *
 * NOTE: The method for doing this is quite counter-intuitive.
 */

module.exports = function *multiplier() {
	let value = 0
	let mult = 1
	while(true){
		value+=1
		mult = yield value*mult
		if (!mult) {
			mult = 1;
		}
		
	}
}
