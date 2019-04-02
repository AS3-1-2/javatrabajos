var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send(C:\xampp\htdocs\javatrabajos\nodejs\ejemplo02\unoo.html);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
