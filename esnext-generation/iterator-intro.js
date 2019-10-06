/*
 * Iterators are nthing more than objects with a specific interface.
 *
 * A singe .next() method returns and object with two keys:
 *  - 'value': the next item in the Iterator's collection/sequence
 *  - 'done': true when the collection is exhausted
 */

module.exports = function makeCounter(someObj) {
	let count = 0
	let done = false
	someObj.next = function() {
		if(count<10){
			count += 1;
		} else {
			done = true;
		}

		return {
			value: count,
			done: done
		}
	}
}
