import debug from "debug";
import { Server } from "http";

const moduleDebug = debug('server');

/**
 * Normalize a port into a number, string, or false.
 */

export function normalizePort(value: string) {
    var port = parseInt(value, 10);
  
    if (isNaN(port)) {
      // named pipe
      return value;
    }
  
    if (port >= 0) {
      // port number
      return port;
    }
  
    return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

export function onError(port: unknown, error: any) {
    if (error.syscall !== 'listen') {
      throw error;
    }
  
    var bind = typeof port === 'string'
      ? 'Pipe ' + port
      : 'Port ' + port;
  
    // handle specific listen errors with friendly messages
    switch (error.code) {
      case 'EACCES':
        console.error(bind + ' requires elevated privileges');
        process.exit(1);
        break;
      case 'EADDRINUSE':
        console.error(bind + ' is already in use');
        process.exit(1);
        break;
      default:
        throw error;
    }
}
  
  /**
   * Event listener for HTTP server "listening" event.
   */
  
export function onListening(server: Server) {
    var addr = server.address();
    var bind = typeof addr === 'string'
      ? 'pipe ' + addr
      : 'port ' + addr?.port;
    moduleDebug('Listening on ' + bind);
}
  