/*
 * Suppose you have a function `foo`. Inside of `foo`
 * you define another function `zip`.
 *
 * Function-scoped variables inside of `foo` are
 * available to `zip` as well.
 *
 * But, `var`-declared variables within `zip`
 * are not available to `foo`.
 *
 * This way, looking from outer-function down, we can
 * construct a tree of functions. Look upward from the
 * inside on the other hand, allows us to see the one-
 * way scope chains that exist between our functions.
 */

function foo() {
	var bar;
	function zip () {
		var quux;
	}
}

