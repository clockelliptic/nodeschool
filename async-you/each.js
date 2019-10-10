const http = require('http')
      async = require('async')

const urls = [process.argv[2], process.argv[3]]

async.each(urls, check_url_for_errors, done)

function check_url_for_errors (url, done){
	const httpGETcallback = (res) => {
		res.on('data', (chunk) => { /*do nothing}*/ })
		res.on('end', () => { done(null) })
	}
	
	http.get(url, httpGETcallback)
		.on('error', (err) => done(err))
}

function done (err) {
	if(err) console.error(err)
}
