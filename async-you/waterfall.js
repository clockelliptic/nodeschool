/* Program recieves a filepath as its first command-line argument,
 * then reads the file which contains a signle URL. Then the program
 * sends a GET request to the URL and then `console.log`s the response.
 */

const http = require('http')
      async = require('async')
      fs = require('fs');


async.waterfall([readin_url, send_GET_request], done)

function readin_url (done) {
	fs.readFile(process.argv[2], (err, data) => {
		if (err) return done(err);
		done(null, data)	
		
	})
}

function send_GET_request(data, done){
	let body = ''

	const httpGETcallback = (response) => {
		response.on('data', (chunk) => body += chunk.toString())
		response.on('end', () => done(null, body))
	}
	
	const url = data.toString.trimRight()
	http.get(url, httpGETcallback)
		.on('error', (err) => done(err))
}

function done(err, result){
	if (err) return console.error(err)
	console.log(result)
}

