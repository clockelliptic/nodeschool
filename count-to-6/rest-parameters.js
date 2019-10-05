/* Rest parameters are closely related to spreads (i.e. [...xs])
 * and are used to write functions that accept a variadic number
 * of arguments. The function will act on them as if they were
 * an array (and in fact, they are an array inside the function!):
*/

module.exports = function average(...xs) {
	return xs.reduce((acc, x) => acc + x)/xs.length
}

/* So, when `average` is called arguments are supplied like so:
 *
 * 	average(n0, n1, n1)
 *
 * but, the function call creates an array containing all args.
 *. 
