/* returns true when:
 * 	first character is not a digit
 * 	and second character is not an upper-case letter
 *
 * 	note: to negate a custom character class add ^ to
 * 	      beginning of [...] as such: [^...]
 */
module.exports = function f (str) { 
	// note: /[^\d]/ === /[\D]/
	return /^[^\d][^A-Z]/.test(str)
}


