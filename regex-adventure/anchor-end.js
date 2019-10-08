// matches only when a string begins with 'BANANAS'
module.exports = function f (str) {
	return /BANANAS$/.test(str)
}
