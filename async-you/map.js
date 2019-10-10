const http = require('http')
      async = require('async')

const urls = [process.argv[2], process.argv[3]]

async.map(urls, get_data_from_url, done)

function get_data_from_url(url, done){
	let body = ''
	const httpGETcallback = (res) => {
		res.on('data', (chunk) => { body += chunk.toString() })
		res.on('end', () => { done(null, body) })
	}
	
	http.get(url, httpGETcallback)
		.on('error', (err) => done(err))
}

function done (err, res) {
	if(err) console.error(err)
	console.log(res)
}
