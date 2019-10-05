/*
 * Three URLs are provided as the first three command-line arguments passed
 * to this program.
 *
 * The complete content provided by each URL is collected. Then three lines
 * are printed to stdout: one line per URL. Each line contains the complete
 * content for a given URL. They MUST be printed in the order that the URLS
 * are provided as command-line args.
 *
 * The catch is that the three servers don't play nicely. The three responses
 * are not completed in the expected order. Therefore, the response cannot be
 * logged naively or it will be out of the correct order.
 *
 * OFFICIAL SOLUTION:
 * DOCUMENTATION: https://nodejs.org/api/http.html#http_http_get_options_callback
 */

const http = require('http')
const bl = require('bl')

const results = ['','','']
let count = 0

const httpGet = (i) => {
	http.get(process.argv[2 + i], (res) => {
		res.setEncoding('utf8');
		let rawData = '';
		res.on('data', chunk => {rawData += chunk} );
		res.on('end', () => {
			try {
				results[i] += rawData
				count++
				if (count ===3 ) {results.forEach(val => console.log(val))}
			} catch (e) {
				console.error(e.message)
			}
		})
	})
}

for(let i = 0; i<3; i++){httpGet(i)}
