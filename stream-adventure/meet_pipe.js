const fs = require('fs');


const file_in = process.argv[2]
const stream = fs.createReadStream(file_in)

stream.pipe(process.stdout)
