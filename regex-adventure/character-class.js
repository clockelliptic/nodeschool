// return true when input string starts with lower-case vowel or digit
module.exports = function f (str) { 
	return /^[aeiou123456789]/.test(str)	
}
