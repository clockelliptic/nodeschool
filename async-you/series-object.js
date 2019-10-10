const async = require('async')
      http = require('http')

const urls = [process.argv[2], process.argv[3]]
	
async.series(
	{
	  requestOne: (done) => fetch_url(urls[0], done),
	  requestTwo: (done) => fetch_url(urls[1], done)
	}, done)

function fetch_url (url, done) {
	let body = '';
	
	const callback = (res) => {
		res.on('data', (chunk) => { body += chunk.toString() })
		res.on('end', () => { done(null, body) })
	}
	
	http.get(url, callback)
		.on('error', (err) => {done(err)})
}

function done (err, res) {
	if (err) return console.error(err);
	console.log(res)
}

