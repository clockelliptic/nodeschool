/* This program is an HTTP server that uses a through stream
 * to write back the request stream as upper-cased response
 * data for POST requests.
 *
 * Node's core http request and response objects are streams
 * (i.e. the handler `http.createServer()`)
 */

const http = require('http')
const through = require('through2');

const port = parseInt(process.argv[2])

const server = http.createServer(callback)
server.listen(port)

function callback (req, res) {
	if (req.method !== 'POST') {
		res.end("Send me a POST!\n")
	}
	req.pipe(through(write)).pipe(res)
}

function write (buf, _, next) {
	this.push(buf.toString().toUpperCase())
	next();
}

