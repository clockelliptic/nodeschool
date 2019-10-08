// returns instances of words in double qoutes (including the 
// quotation marks) from the input string
module.exports = function f (str) { 
	return str.match(/"[^"]*"/g)
}
