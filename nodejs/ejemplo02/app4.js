/*
Crear una página HTML con los datos meteorológicos 
usando nodejs.
las imágenes (sol, nubes, ...)
nube: http://www.euskalmet.euskadi.eus/appcont/meteorologia/meteodat/images/12.png
...
*/


var express = require('express');
var app = express();

tiempo = [
  {dia:"Miércoles,1", cielo:"lluvia", temperatura:12},
  {dia:"Jueves,2", cielo:"Nublado", temperatura:20},
  {dia:"Viernes,3", cielo:"lluvia", temperatura:23},
  {dia:"Sábado,4", cielo:"sol", temperatura:10},
  {dia:"Domingo,5", cielo:"lluvia", temperatura:5},
  {dia:"lunes,6", cielo:"Nublado", temperatura:0},
  {dia:"Martes,7", cielo:"sol", temperatura:25},
  {dia:"Miércoles,8", cielo:"sol", temperatura:12},
  {dia:"Jueves,9", cielo:"lluvia", temperatura:9},
  {dia:"Viernes,10", cielo:"Nublado", temperatura:16},
  {dia:"Sábado,11", cielo:"sol", temperatura:21},
  {dia:"Domingo,12", cielo:"sol", temperatura:18},
  {dia:"lunes,13", cielo:"Nublado", temperatura:14},
  {dia:"Martes,14", cielo:"lluvia", temperatura:11}
]

app.get('/', function (req, res) {
  res.sendfile(__dirname + 'euskalmet-html')
});

  
  var r = [];
  //console.log("Días lluviosos:")
  for (var i = 0; i < tiempo.length; i++) { 
      //console.log(i)
      if (tiempo[i].cielo == "lluvia") {
          //console.log(tiempo[i].dia + " " + tiempo[i].cielo)
          //console.log(tiempo[i].dia)
          r[r.length]=tiempo[i].dia
      }
  }
  res.send(r);
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
