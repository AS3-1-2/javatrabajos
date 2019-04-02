var express = require('express');
var app = express();

/*app.get('/', function (req, res) {
  res.send(unoo.html);
});*/


app.get('/', function(req, res){
res.sendfile('Hola');
});

app.get('/web', function(req, res){
  res.sendfile('unoo.html');
  });


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
