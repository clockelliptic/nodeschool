/*
 * We can delegate iteration control from one generator to
 * another one. `yield * expression` does the trick. `*` means
 * that the `exression` is a generator too, and we can send
 * a message to it. Awesome!
 *
 * Lets make a generator-function called `flat` that takes a
 * nested array and flattens it.
 */

function *flat (arr) {
	if(Array.isArray(arr)){
		for(var a of arr){
			yield* flat(a)
		}
	}
	else { yield arr; }
}

var A = [1, [2, [3, 4], 5], 6];

for(var f of flat(A)) {
	console.log(f);
}
