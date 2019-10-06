/*
 * Iterators are nthing more than objects with a specific interface.
 *
 * A singe .next() method returns and object with two keys:
 *  - 'value': the next item in the Iterator's collection/sequence
 *  - 'done': true when the collection is exhausted
 */

module.exports = 
	
function generator(isEven) {
	const Generator = function() {
		this.count = (isEven)?0:-1
	}

	Generator.prototype.next = function(swap=false){
		if(swap){
			this.count += 1;
		} else {
			this.count += 2;
		}
		return { value: this.count }
	}

	return new Generator()
}
