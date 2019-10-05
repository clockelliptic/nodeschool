/*
 * This HTTP server receives only POST requests and converts
 * incoming POST bosy characters to upper-case and returns it
 * to the client.
 *
 * The server listens on the port provided by the first argument
 * to the program.
 *
 * This server uses the `through2-map` module allows us to create
 * a transform stream using a single function that takes a chunk
 * of data and returns a transformed chunk. It's designed to work
 * like Array.prototype.map, except its for streams.
 */
const http = require('http')
const map = require('through2-map')
const port = Number(process.argv[2])

const callback = (req, res) => {
	if (req.method !== 'POST') {
		return res.end('send me a POST')
	}

	req.pipe(
        	map( (chunk) => chunk.toString().toUpperCase())
	).pipe(res)
}

const server = http.createServer(callback)
server.listen(port)
