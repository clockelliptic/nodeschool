/*
 * This program performs and HTTP GET request to a URL provided as the
 * first command-line argument. ALL data is collected from the server,
 * then two lines are written to the console: first and integer is written
 * which signifies the number of characters that were received from the server,
 * the second line contains the complete String of characters.
 *
 * DOCUMENTATION: https://nodejs.org/api/http.html#http_http_get_options_callback
 */

const http = require('http')

http.get(process.argv[2], (res) => {
	res.setEncoding('utf8');
	let rawData = '';
	res.on('data', (chunk) => {rawData += chunk;} );
	res.on('end', () => {
		try {
			console.log(rawData.length);
			console.log(rawData);
		} catch (e) {
			console.error(e.message)
		}
	});

}).on('error', console.error)
