// PROBLEM
// Write a program that uses a single asnychronous filesystem operation 
// to read a file and print the number of newlines it contains to stdout

const filepath = process.argv[2]

// ansynchronous is *the Node.js way*
var fs = require('fs')
const newlines = fs.readFile(filepath, 'utf8', (err, data) => {
	if (err) throw err;
	console.log(data.split('\n').length - 1)
})

