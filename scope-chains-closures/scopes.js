/*
 * In javascript there are three ways to decalre a variable:
 * `var`, `let`, and `const`.
 *
 * `var` is Lexically Scoped to the current function (see the
 * function `foo` below).
 *
 * `let` and `const` are block-scoped.
 */

function foo() {
	// function-scoped
	var bar;
}
