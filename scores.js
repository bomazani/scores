const jsonBody = require("body/json");
var scores = [{ name: "Edwin", score: 50 }, { name: "David", score: 39 }];


const textBody = require("body");
const http = require('http');


const hostname = null;
const port = 3000;

const server = http.createServer((req, res) => {
  var body;

  if (req.url === "undefined") {
    res.statusCode = 404;
  } else {
    res.statusCode = 200;
    // scores.sort();
    // scores.reverse();
    // scores.slice(0,3);

    res.setHeader('Content-Type', 'application/javascript');
    body = JSON.stringify(scores);
  }

  if (req.method === "GET") {
  //
  if (req.method === "POST") {
  res.statusCode = 201;
  scores.push(body);

  //
}
res.end();
console.log(req.url);
console.log(req.method);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
