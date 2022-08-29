const cluster = require("cluster");

console.log(cluster.isMaster);

if (cluster.isMaster) {
  // Cause index.js to be executed again but in child mode
  cluster.fork();
  // A cluster is a pool of similar workers running under a parent Node process.
  // Workers are spawned using the fork() method of the child_processes module.
  // This means workers can share server handles and
  // use IPC (Inter-process communication) to communicate with the parent Node process
} else {
  const express = require("express");
  const app = express();

  app.get("/", (req, res) => {
    res.send("Hi there");
  });

    app.get("/fast", (req, res) => {
      res.send("Hi there fast");
    });

  app.listen(5000);
  // The cluster module provides a way of creating child processes that
  // runs simultaneously and share the same server port.

  // A cluster is a pool of similar workers running under a parent Node process.
  // Worker Threads in Node.js is useful for performing heavy JavaScript tasks.
  // With the help of threads, Worker makes it easy to run javascript codes in parallel making it much faster and efficient.
  // We can do heavy tasks without even disturbing the main thread.
  // Workers are generated using the fork() method of the child_processes module.
  // This means workers can share server handles and use IPC (Inter-process communication) to communicate with the parent Node process
}
