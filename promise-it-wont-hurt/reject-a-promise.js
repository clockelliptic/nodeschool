var promise = new Promise(function (fulfill, reject) {
  setTimeout(function () {
    reject(new Error('REJECTED!'));
  }, 300);
});


// rejection handler
function onReject(error) {
  console.log(error.message);
}

// notice that we pass in null where we would otherwise pass in the fulfill value
// this signifies rejection
promise.then(null, onReject);
