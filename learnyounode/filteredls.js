// PROBLEM
// Create a program that prints a list of files in a given directiory filtered
// by the extension of the files. You will be provided a directory name as the
// for argument of your program and a file extension to filter by as the 2nd
// argument.

var fs = require('fs')
const filepath = process.argv[2]
const filetype = process.argv[3]

fs.readdir(filepath, (err, data) => {
	if (err) throw err;
	filteredfiles = data.filter((x) => x.split('.')[1] == filetype)
	for (let file of filteredfiles){
		console.log(file);
	}
})
