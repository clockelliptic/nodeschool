// One funny thing about promises is that it's impossible to tell exactly where
// and error originates in the .then() chain


// As a rule of thumb, it is always a good idea to end a chain with a rejection
// handler in order to prevent a throw from propagating

function iterate(num) {
  console.log(num);
  return num + 1;
}

function alwaysThrows() {
  throw new Error('OH NOES');
}

function onReject(error) {
  console.log(error.message);
}

Promise.resolve(iterate(1))
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(alwaysThrows)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.catch(onReject);
