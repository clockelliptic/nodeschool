/*
    This promise will fulfill. If we added some logic that would
    choose to fulfill or rject based on some condition, then it
    might otherwise reject.

*/

var promise = new Promise(function (fulfill, reject) {
  fulfill('I FIRED');
  reject(new Error('I DID NOT FIRE'));
});

function onReject(error) {
  console.log(error.message);
}

promise.then(console.log, onReject);
