const http = require('http')
      async = require('async');

async.reduce(['one', 'two', 'three'], 0, accumulate, done);

function accumulate(acc, item, done){
    let body = '';
    
    const url = process.argv[2] + "?number=" + item

    const httpGETcallback = (res) => {
        res.on('data', (chunk) => { body += chunk.toString(); })
        res.on('end', () => { done(null, acc + Number(body)) })
    }

    http.get(url, httpGETcallback)
        .on('error', done);
}

function done(err, result){
    if (err) return console.log(err);
    console.log(result);
}