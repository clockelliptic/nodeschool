/*
 * This is a TCP time server!
 *
 * This server listens to TCP connections on the port provided
 * by the first command-line argument to this program. For each
 * connection the current date & 24-hour time is written as such:
 * 
 *     "YYYY-MM-DD hh:mm"
 * 
 * and is followed by a newline character. Node that month, day,
 * hour, and minute are zero-filled to two digits.
 *
 * After sending the string, the connection is closed.
 */

// import network module
const net = require('net')

// receive the port number
const portnumber = process.argv[2]

// functiont o return datetime in custom format
const current_datetime = () => {
	const formatDigits = (n) => (`${n}`.length<2) ? '0'+n : n ;
	const now = new Date(Date());

	const year = formatDigits(now.getFullYear()); // YYYY
	const month = formatDigits(Number(now.getMonth())+1); // MM
	const day = formatDigits(now.getDate()); // DD
	const hour = formatDigits(now.getHours()); // hh
	const min = formatDigits(now.getMinutes()); //mm

	return `${year}-${month}-${day} ${hour}:${min}`;
}

// listener function, called upon each connection to this server
const listener = (socket) => {
	const data = current_datetime() + '\n'
	
	socket.write(data)
	socket.end()
};

// define the server and listen to the provided port
const server = net.createServer(listener)
server.listen(portnumber)

