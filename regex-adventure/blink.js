/* This program translates markdown to HTML and includes a
 * custom markdown operator.
 *
 * The custom markdown operator translates all text between
 * `@@...@@` into html `<blink>...</blink>`.
 *
 * this uses the markdown odule called 'marked'
 */

const marked = require('marked')

module.exports = function f (str) { 
	return marked(str)
		.split(/@@/)
		.map((x, i) => (i%2!==0)?`<blink>${x}</blink>`:x)
		.join('') 

	// The official solution, for reference/learning:
	// return marked(str).replace(/@@(.+?)@@/g, `<blink>$1</blink>`)
}
