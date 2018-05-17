// Requires body/json module???
const jsonBody = require("body/json");
// sets initial values in scores
var scores = [{ name: "Edwin", score: 50 }, { name: "David", score: 39 }];
// ???
var resources = {
  "/IP": "Internet Protocol",
  "/TCP": "Transmission Control Protocol"
};
// requires http???
const http = require('http');
// sets local host
const hostname = '127.0.0.1';
// sets port 3000
const port = 3000;
// function orders scores from highest to lowest???
let scoreSort(function(a,b){
  return b.scores-a.scores};
// function creates a server with request & response... http??? jsonbody??? err???
const server = http.createServer((req,res) => {
  jsonBody(req, res, function(err, body){
// ???
  let json;
// if the incomming request method is GET...
  if (req.method === "GET") {
// if the url does not end in /scores...
    if (req.url !== "/scores") {
// send a response code of 404
      res.statusCode = 404;
    } else {
// otherwise send a response code of 200
      res.statusCode = 200;
// sets the http header information for the returned response
      res.setHeader('Content-Type','application/javascript');
// sends the string of scores, but I don't understand the syntax???
      json = resources[req.url] = JSON.stringify(scores);
    }
// if the incomming request is a POST...
  } else if (req.method === "POST") {
// if the req url does not end in /scores...    
      if (req.url !== "/scores"){
// send a response of 404
        res.statusCode = 404;
      }else{
// otherwise, send a response of 201
        res.statusCode = 201;
// into the array 'scores' push the content of the body
        scores.push(body);
// apply the sortScores function to the scores array, returning highest to lowest scores
        scores.sort(sortScores);
// starting with the zero position of the scores array and ending before position 3, remove everything else
        scores.splice(0,3);
        // could also replace the previous line with 'scores.length=3'.
      }
  }
// end the process and send the response
  res.end(json);
  })
});
// tells the server to listen to port 3000 at host 127.0.0.1
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
