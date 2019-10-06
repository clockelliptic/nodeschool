
module.exports = function filterForNumbers(iterable) {
	return [...iterable]
		.map(x => x.toString())
		.filter(x => /^-?\d*\.?\d+$/.test(x)==true)
		.map(Number)
}
