// In ES6 default arguments can be expressions:

function transformer(x, transform = n => n.toString()+" transformed, by the power of expressions as default args!"){
	console.log(transform(x))
}

transformer(5)
