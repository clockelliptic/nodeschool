/* Sends and HTTP POST request to http://localhost:8099 and pipes
 * process.stdin into it. The response stream is piped to 
 * process.stdout.
 */

const request = require('request')

const src = process.stdin
const dst = process.stdout

// readable+writeable stream
const r = request.post('http://localhost:8099')

// pipe stdin stream to POST request
src.pipe(r)

// pipe POST response to stdout
r.pipe(dst)

/* Or more compactly:
 * process.stdin.pipe(r).pipe(process.stdout)
 */
