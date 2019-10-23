var firstPromise = first();

var secondPromise = firstPromise.then(function (val) {
  return second(val);
});

secondPromise.then(console.log);

// As an alternative to the code above:
// first().then(second).then(console.log);
