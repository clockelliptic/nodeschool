const trumpet = require('trumpet')
const through = require('through2')
const fs = require('fs')
const tr = trumpet()

// css selector: class .loud
const stream = tr.select('.loud').createStream();

stream
	.pipe(through(uppercaser))
	.pipe(stream)

function uppercaser (buf, _, next) {
	this.push(buf.toString().toUpperCase());
	next();
}

process.stdin
	.pipe(tr)
	.pipe(process.stdout);
