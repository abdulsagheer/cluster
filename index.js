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
}
