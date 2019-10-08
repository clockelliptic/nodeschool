/* Takes a string arguemnt and returns wether the string 
 * contains exactly 8 solumns of hex codes formatted like
 * `0xFF` with one or more characters of trailing whitespace
 * after each hex code to separate the columns.
 *
 * The hex codes begin with `0x` and have exactly 2 more chars
 * `A-F` or `a-f`
 */
module.exports = function f (str) { 
	return /^(0x[A-F|a-f|\d]{2}\s+){8}$/.test(str)
}
