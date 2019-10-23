var promise = new Promise(function (fulfill, reject) {
  setTimeout(function () {
    fulfill('FULFILLED!');
  }, 300);
});

// `console.log` is the HANDLER for the fulfil value of this promise
promise.then(console.log);
