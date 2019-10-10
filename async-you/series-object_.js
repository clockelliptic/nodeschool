var http = require('http')
    async = require('async');

const urls = [process.argv[2], process.argv[3]]

async.series(
    {
      requestOne: (done) => fetchURL(urls[0], done),
      requestTwo: (done) => fetchURL(urls[1], done)
    }, done)


function fetchURL(url, done) {
  let body = '';
  
  const callback = (res) => {
    res.on('data', (chunk) => { body += chunk.toString() })
    res.on('end', () => { done(null, body) });
  }
  
  http.get(url, callback)
    .on('error', (e) => { done(e); });
}

function done(err, result) {
    if (err) return console.error(err);
    console.log(result);
}