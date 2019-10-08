// matches only when a string begins with 'LITERALLY'
module.exports = function f (str) {
	return /^LITERALLY/.test(str)
}
