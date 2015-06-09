var http = require('http');
 
http.createServer(function (req, res) {
  var greeting = "Go Away"
  http.get("http://localhost:8082", function(reply){
   var who = ""
   reply.on('data', function(data) { who += data })
   reply.on('end', function() { 
     res.end(greeting + " " + who) 
    })
  })
}).listen(8081);
