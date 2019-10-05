// userArray contains data: [userId, username, email, age, firstName, lastName]
const userArray = process.argv.slice(2)

// using ES6 array "destructuring", [array] values van be extracted. This 
// can also be done in a similar way for {objects}
const result = {};

// NOTE, VERY IMPORTANT: this does not use `let`, `const`, or `var` because we arent initializing
[,result.username, result.email] = userArray

console.log(result)
