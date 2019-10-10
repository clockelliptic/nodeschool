const http = require('http'),
      async = require('async');
     
const hostname = process.argv[2],
      port = process.argv[3],
      url = 'http://' +  hostname + ':' + port;

async.series({post: post_request, get: get_request}, done)

function post_request(done){
    async.times(5, add_user_n, next);

    function add_user_n (n, next) {
        _add_user(++n, (err) => { next(err) })
    }

    function next (err) { 
        if(err) return done(err);
        done(null, 'saved');
    }
}

function get_request (done){
    const callback = (res) => {
        let body = '';
        res.on('data', (chunk) => { body += chunk.toString() })
        res.on('end', () => { done(null, body) })
    }
    
    http.get(url + '/users', callback)
        .on('error', (e) => done(e))
}

function done(err, result){
    if (err) return console.log(err);
    console.log(result.get);
}

function _add_user(user_id, next){
    const postdata = JSON.stringify({'user_id': user_id})
    const opts = {
            hostname: hostname,
            port: port,
            path: '/users/create',
            method: 'POST',
            headers: { 'Content-Length': postdata.length }
    };

    const req = http.request(opts, req_callback);

    function req_callback (res) {
        res.on('data', (chunk) => {/*do nothing*/})
        res.on('end', () => { next() })
    }

    req.on('error', (err) => { next(err) })
    req.write(postdata)
    req.end();
}