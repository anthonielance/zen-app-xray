require(__dirname  + '/lib/helper.js');
const path = require('path')
const express = require('express')
const fs = require('fs')
const url = require('url')
const port = 4567

const app = express()

app.get('/*.*', function(req, res) {

  var options = url.parse(req.url, true);

  var mime = Helper.getMime(options);
  
  serveFile(res, options.pathname, mime);

});

app.listen(port, function() {
  console.log(`Server is running on port ${port}`)
})

function serveFile(res, pathName, mime) {
    
  mime = mime || 'text/html';
  
  filePath = path.join(__dirname,'assets',pathName)
  fs.readFile(filePath, function (err, data) {
      if (err) {
          res.writeHead(500, {"Content-Type": "text/plain"});
          return res.end('Error loading ' + pathName + " with Error: " + err);
      }
      res.writeHead(200, {"Content-Type": mime});
      res.end(data);
  });
}