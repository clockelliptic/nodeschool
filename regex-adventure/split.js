/* Strings have a .split() method. The .split() method takes
 * an arguments that can be a string or a regex.
 *
 * This module accepts a string and returns an array that splits
 * the string on commas separated by arbitrary amounts of whitespace.
 *
 * Example input: `1,   2 , 3, 4     ,5'
 * Expected output: ['1','2','3','4','5']
 *
 * `\s` is a shortcut for whitespace characters `[ \t\r\n\f]`
 */
module.exports = function f (str) { 
	return str.split(/\s*[,]\s*/)
}
