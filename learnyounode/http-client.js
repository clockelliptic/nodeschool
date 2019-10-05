'use strict'

/*
 * Exemplifies how to write a program that performs an HTTP GET request
 * to a URL provided as the first command-line argument. The String
 * contents of each "Data" event fom the response is logged to a new
 * line in the console (stdout).
 * 
 * DOCUMENTATION: https://nodejs.org/api/http.html#http_http_get_options_callback
 * OFFICIAL SOLUTION: https://github.com/workshopper/learnyounode/blob/master/exercises/http_client/solution/solution.js
 *
 */

const http = require('http')

const callback = (response) => {
	        response.setEncoding('utf8');
	        response.on('data', console.log)
	        response.on('error', console.error)

} 

http.get(process.argv[2], callback).on('error', console.error);
