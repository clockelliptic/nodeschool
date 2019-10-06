/*
 * Generators do away with the cumbersome boilerplate involved in
 * writing advanced Iterators (as we saw in advanced-itertors.js)
 *
 * Note: this solution ignores the `swap` functionality of
 * 'advanced-iterators.js', but we'll cover that next
*/

module.exports = function *generate(isEven=true) {
	let value = (isEven)?0:-1
	while(true){
		value+=2
		yield value
	}
}
