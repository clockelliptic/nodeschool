const http = require('http')
      async = require('async');

let request_body = '';
let count = 0;

async.whilst(word_not_in_response_body, count_get_requests, done)

function word_not_in_response_body() {
    return !/meerkat/.test(request_body.trim());
}

function count_get_requests(done){
    let body = '';

    http.get(process.argv[2], httpGETcallback)
        .on('error', done);

    function httpGETcallback(res){
        res.on('data', (chunk) => { body += chunk.toString() })
        res.on('end', () => {
          ++count;
          requestBody = body;
          done();
        });
    }

}

function done(err){
    if (err) return console.log(err);
    console.log(count);
}