// Searches a string for `x=` and returns
// the numbers that follow
module.exports = function f (str) { 
	const m = /x\=([\d]+)/.exec(str)
	return m ? m[1] : null
}
