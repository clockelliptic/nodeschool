/*
 * This is an HTTP JSON API server!
 *
 * This program server JSON data when it receives a GET request to
 * the path '/api/parsetime'. Requests are expected to contain a
 * query string with a key 'iso' and an ISO-format time as the value.
 *
 * For example: /api/parsetime?iso=2013-08-10T12:10:15.474Z
 *
 * The JSON response contains only 'hour', 'minute', and 'second'
 * properties.
 *
 * There is also a second endpoint for the path '/api/unixtime' which
 * accepts the same query string but returns UNIX epoch time in milliseconds
 * (the number of ms since 1 Jan 1970 00:00:00 UTC) under the property
 * 'unixtime'.
 *
 * The server listens on the port given as the first command line argument
 * to this program.
 *
 * OFFICIAL SOLUTION: https://github.com/workshopper/learnyounode/blob/master/exercises/http_json_api_server/solution/solution.js
 */
const url = require('url')
const http = require('http')

const isotime_endpoint = '/api/parsetime'
const unixtime_endpoint = '/api/unixtime'
const port = Number(process.argv[2])

const make_unixtime_json = (t) => ({ unixtime: t.getTime() })
const make_isotime_json = (t) => ({
		hour: t.getHours(), 
		minute: t.getMinutes(), 
		second: t.getSeconds()
});

const callback = (request, response) => {
	
	if(request.method !== 'GET') { 
		return response.end('send me a GET') 
	}
	
	const url_data = url.parse(request.url, true)
	const api_endpoint = url_data.pathname
	const time_query = new Date(url_data.query.iso)
	let response_json

	if(api_endpoint == isotime_endpoint){
		response_json = make_isotime_json(time_query)
	} else if(api_endpoint == unixtime_endpoint) {
		response_json = make_unixtime_json(time_query)
	}

	if (response_json) {
		response.writeHead(200, { 'Content-Type': 'application/json' })
		response.end(JSON.stringify(response_json))
	} else {
		response.writeHead(404)
		response.end()
	}
}

const server = http.createServer(callback)
server.listen(port)
