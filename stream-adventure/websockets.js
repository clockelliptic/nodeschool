/* This is browser code that uses the websocket-stream module
 * to print "hello\n".
 */

const ws = require('websocket-stream')
const stream = ws('ws://localhost:8099')

stream.write("hello\n")
