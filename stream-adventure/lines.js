/* Takes incoming asynchronous data from the command line.
 * Transforms the data into chunks that are delimited by
 * newline characters '\n' using the 'split' module.
 *
 * Transforms odd-lumbered lines to lowercase and even lines
 * to upper case.
 *
 * Adds the '\n' chars that were used to delimit and
 * re-chunk the data.
 *
 * Pipes transformed data to stdout.
 */

const through = require('through2')
const stream = through(write, end);
const split = require('split')
	
const isEven = (n) => n%2==0

var count = 0;

function write (buffer, encoding, next) {
	count+=1
	if(isEven(count)){
		this.push(buffer.toString().toUpperCase()+'\n');
	} else {
		this.push(buffer.toString().toLowerCase()+'\n');
	}
	next();
}

function end (done) {
	done();
}

process.stdin
	.pipe(split())
	.pipe(stream)
	.pipe(process.stdout)
