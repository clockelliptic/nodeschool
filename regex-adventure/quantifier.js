/* Takes a filename string as argument, returns true
 * if the entire filename is a sequence of one or more
 * digits followed by `.jpg. or `.jpeg`
 *
 * Here are some simple regex quantifiers:
 * 	*  zero or more times
 * 	+  one or more times
 * 	?  zero or one times
 */
module.exports = function f (str) { 
	return /[\d]+\.(jpg|jpeg)$/.test(str)
}
