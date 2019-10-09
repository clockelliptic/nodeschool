/* Program takes input stream from `process.stdin`, concatenates
 * it into a single string, and pipes the string reversed to stdout
 */

// `concat-stream` takes a callback (transformer, validator, etc); 
// it gives the entire contents of a stream as a single buffer.
// if no callback is specified the stream is returned as-is.
const concat = require('concat-stream')

function callback (src, transform = s => s.toString()) {
	const out = [...transform(src)].reverse().join('')
	console.log(out)
}

process.stdin
	.pipe(concat(callback))
