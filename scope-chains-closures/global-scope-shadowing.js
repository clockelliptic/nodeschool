/*
 *
 */

function foo() {
	var bar;
	
	// oops! we just assigned quux as a new global variable!
	quux = 
	
	function zip () {
		// this is called Shadowing! The global `quux`
		// is now unavailable to `zip()`.
		var quux;
	}
}

