const numbers = [1, 2, 3, 4, 5]

document.write("<h3>ELEMENTOS DE UN ARRAY</h3>")

document.write("El arreglo en su segunda posicion es" + numbers[2]+"<br>")


//usar variables para acceder a los elementos de un array.

let index = 4

document.write("la variable index corresponde a:"+numbers[index]+"<br>")

//Modificar elementos de un array.

numbers[0] = 10
numbers[2] = 30

document.write("El array modificado es"+numbers+"<br>")






//longitud de una array
document.write("<h3>LONGITUD DE UNA ARRAY</h3>")

const frutas = ["manzana", "pera", "plátano", "fresa"]

document.write("el array de frutas es:"+frutas+"<br>")
document.write("el array de fruta tiene una longitud de:"+frutas.length+"<br>")
