/*
 * What's the difference between generators and iterators?
 *
 * Well, a generator is an iterator first of all.
 *
 * Generators don't execute the first time they're called, but
 * they return an iterator object with a few methods!
 *
 * Iterator is a design pattern where a sequence is run one at
 * a time by calling next().
 *
 * Using a loop, lets create a factorial generator that iterates
 * from 1 to factorial(n):
 */

function *factorial(n){
	let val = 1;
	for(let i = 1; i<=n; i++){
		val = i*val
		yield val
	}
}

for (var n of factorial(5)){
	console.log(n)
}


