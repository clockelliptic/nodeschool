/* Takes a string argument and returns wether the string starts
 * with `cat`, `dog`, or `robot` followed by a number to the end
 * of a string.
 */
module.exports = function f (str) { 
	return /^(cat|dog|robot)[\d]+$/.test(str)
}
