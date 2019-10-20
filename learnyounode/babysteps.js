numargs = process.argv.slice(2, process.argv.length).map(x => Math.floor(x))
console.log(numargs.reduce((a, b) => a + b, 0))
