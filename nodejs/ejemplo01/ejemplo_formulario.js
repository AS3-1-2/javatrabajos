/*
ejemplo 01
*/

//https://www.npmjs.com/package/http
x = 5;
y = 5;

z = x + y;

z = Math.floor(Math.random() * 101)
// si la suma es > 10. Print "es mayor que 10"
// si no: print "es menor que 10"
// si = 10: "es igual a 10"
// pista: usa "if / else"

// console.log(z)


if (z > 10) {
    //true
    console.log("es mayor que 10s")
} else if (z < 10) {
    //true
    console.log("es menor que 10")
} else {
    console.log("es igual a 10")}