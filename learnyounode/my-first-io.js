var fs = require('fs')

// PROBLEM:
// Perform synchronous file read and print number of new lines (\n)
// it contains to stdout (similar to running cat file | wc -l

const path_to_file = process.argv[2]

// return buffer object and convert to string
const file = fs.readFileSync(path_to_file).toString()

// read number of newline characters
const count_newlines = file.split('\n').length-1

console.log(count_newlines)
