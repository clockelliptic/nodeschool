/*
 * This simple fileserver serves the same text file for each request it receives.
 *
 * The server listens on the port provided by the first argument.
 *
 * The location of the file is provided as the second argument on the command-line.
 *
 * This program uses the `fs.createReadStream()` method to stream the file contents
 * to the response.
 *
 * Because this is an HTTP server rather than a generic TCP server, we use the 
 * http module that is package with Node core.
 *
 */
const http = require('http')
const fs = require('fs')

const port = process.argv[2]
const filepath = process.argv[3]

const callback = (request, response) => {
	const filestream = fs.createReadStream(filepath)
	filestream.pipe(response)
}

const server = http.createServer(callback)
server.listen(port)
