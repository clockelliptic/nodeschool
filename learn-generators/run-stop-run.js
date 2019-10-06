/* Generators are functions which can be stopped while in process
 * and run later as many times as you want.
 * 
 * The function pauses upon a yield statement, even if the yield
 * statement is on the right-hand side of a variable assignment.
 *
 * In fact, when yield is on the rhs of an assignment, the following
 * .next(param) call will pass its param as the value of the yield!
 *
 * We'll get to that next (no pun intended). For now, lets make a
 * simple range generator:
 */

function *range(from, to) {
	for(i = from; i<=to; i++){
		yield i;
	}
}

for(var r of range(5,10)){
	console.log(r);
}
