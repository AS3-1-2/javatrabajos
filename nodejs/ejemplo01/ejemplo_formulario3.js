/*
ejemplo 03: for + arrays + JSON
*/

// https://www.w3schools.com/js/js_loop_for.asp
// https://www.w3schools.com/js/js_objects.asp
// https://www.w3schools.com/js/js_arrays.asp

/*
Definir los datos meteorológicos de la tendencia de los próximos 6 días. Con arrays [] y diccionarios {}
http://www.euskalmet.euskadi.eus
*/


/*
Imprimir los datos usando 'for' y console.log
*/


/*
Crear una página HTML con los datos anteriores usando las imágenes (sol, nubes, ...)
nube: http://www.euskalmet.euskadi.eus/appcont/meteorologia/meteodat/images/12.png
...
*/


tiempo = [

    {dia:"Miércoles", cielo:"Lluvia", temperatura:8},
    {dia:"Jueves", cielo:"Nublado", temperatura:8},
    {dia:"Viernes", cielo:"Soleado", temperatura:14},
    {dia:"Sábado", cielo:"Nublado", temperatura:12},
    {dia:"Domingo", cielo:"Nublado", temperatura:13},
    {dia:"Lunes", cielo:"Lluvia", temperatura:7}
]



var i;
for (i = 0; i < tiempo.length; i++) {
    //console.log(i)
    if (tiempo[i].cielo == "Lluvia", tiempo [i].temperatura == "13") {
    console.log(tiempo[i].dia + " " + tiempo[i].cielo + " " + tiempo[i].temperatura)}
}

/*
solo imprimir los días de lluvia.
*/


/*

tiempo = [
    {dia: "miercoles", cielo: "lluvia", temperatura:12},
    {dia: "jueves", cielo: "nublado", temperatura:12},
    {dia: "miercoles", cielo: "lluvia", temperatura:12},
    {dia: "miercoles", cielo: "", temperatura:12},
    {dia: "miercoles", cielo: "", temperatura:12},
    {dia: "miercoles", cielo: "", temperatura:12},
    {dia: "miercoles", cielo: "", temperatura:12},
]


console.log(tiempo[0].dia + " " + tiempo[0].cielo)
console.log(tiempo[1].dia + " " + tiempo[0].cielo)
console.log(tiempo[2].dia + " " + tiempo[0].cielo)
console.log(tiempo[3].dia + " " + tiempo[0].cielo)
console.log(tiempo[4].dia + " " + tiempo[0].cielo)
console.log(tiempo[5].dia + " " + tiempo[0].cielo)
*/