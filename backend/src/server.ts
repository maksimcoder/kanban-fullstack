import { app } from "./app";
import http from 'http';
import { normalizePort, onError, onListening } from "./serverUtils";



const port = normalizePort(process.env.PORT || '3001');
app.set('port', port);

const server = http.createServer(app);

server.listen(port);
server.on('error', onError);
server.on('listening', () => onListening(server));

// quit on ctrl-c when running docker in terminal
process.on("SIGINT", function onSigint() {
  console.info(
    "Got SIGINT (aka ctrl-c in docker). Graceful shutdown ",
    new Date().toISOString()
  );
  shutdown();
});

// quit properly on docker stop
process.on("SIGTERM", function onSigterm() {
  console.info(
    "Got SIGTERM (docker container stop). Graceful shutdown ",
    new Date().toISOString()
  );
  shutdown();
});

// shut down server
function shutdown() {
  server.close(function onServerClosed(err) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    process.exit(0);
  });
}