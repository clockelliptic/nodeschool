/*
  “MAIN PROGRAM” is logged before “PROMISE VALUE”.

  This shows you that despite the promise being resolved synchronously, the       
  provided function is not executed until the next turn of the event loop.    
*/

var promise = new Promise(function (fulfill, reject) {
  fulfill('PROMISE VALUE');
});

promise.then(console.log);

console.log('MAIN PROGRAM');
