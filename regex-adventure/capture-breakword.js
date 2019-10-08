/* Searches for `x=` followed by a number and return the number.
 * 
 * Only matches when `x=N` is surrounded by whitespace.
 */
module.exports = function f (str) { 
	const m = /(.*\s+|^)x\=([\d]+)(\s|$)/.exec(str)
	return m
		? (m[3] || (m[3]==='')) ? m[2] : null
		: null
}
