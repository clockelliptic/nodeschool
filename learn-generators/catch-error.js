/* Generators bring to us synchronicity. The code inside is synchronous
 * even if we iterate generators asynchronously.
 *
 * This means try-catch statemenys can be used easily.
 *
 * Also, generator-functions have a throw() methos that allows an 
 * exception to be passed to them, causing try-catch inside the generator 
 * to catch them.
 *
 * Note: if the generator doesnt have any try-catch statements, the
 * exception is sent from the generator.
 *
 * Lets write a generator-function `upper` that takes an array of strings
 * and yield eac of them in upper case. If a number is sent to `upper`, it
 * should return null.
 */

function* upper (items) {
	for(var i of items) {
		try {
			yield i.toUpperCase()
		} catch {
			yield null
		}
	}
}

var bad_items = ['a', 'B', 1, 'c'];

for (var item of upper(bad_items)) {
	console.log(item);
}
