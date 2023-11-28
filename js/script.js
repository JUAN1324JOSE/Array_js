const numbers = [1, 2, 3, 4, 5]

document.write("<h3>ELEMENTOS DE UN ARRAY</h3>")

document.write("El arreglo en su segunda posicion es" + numbers[2]+"<br>")


//usar variables para acceder a los elementos de un array.

let index = 4

document.write("la variable index corresponde a:"+numbers[index]+"<br>")

//Modificar elementos de un array.

numbers[0] = 10
numbers[2] = 30

document.write("El array modificado es: "+numbers+"<br>")






//longitud de una array
document.write("<h3>LONGITUD DE UNA ARRAY</h3>")

const frutas = ["manzana", "pera", "plátano", "fresa"]
frutas.push("naranja")

document.write("el array de frutas es:"+frutas+"<br>")
document.write("el array de fruta tiene una longitud de: "+frutas.length+"<br>")


//Metodos de Arrays
document.write("<h3>METODOS DE UN ARRAYS (.PUSH)</h3>")


document.write("el elemento final del arrayses: "+frutas+"<br>")

//METODO .POP

document.write("<h3>(.POP)</h3>")

const ultimaFruta = frutas.pop()
document.write("elimina y devuelve el último elemento de un array: "+ultimaFruta+"<br>")

//METODO .shift

document.write("<h3>METODO .SHIFT</h3>")
const primeraFruta = frutas.shift ()
document.write("elimina y devuelve el primer elemento de un array: "+primeraFruta+"<br>")

//METODO .unshift()

document.write("<h3>METODO :UNSHITF</h3>")

frutas.unshift("banano")
document.write("añade un elemento al principio de un array: "+frutas+"<br>")

//CONCATENAR ARRAY
document.write("<h3>CONCATENAR ARRAY</h3>")

const numbers1 = [1, 2, 3]
const numbers2 = [4, 5]

const allNumbers = numbers1.concat(numbers2)

document.write("Podemos concatenar dos arrays usando el método concat(): "+numbers1+numbers2+"<br>")

document.write("Otra forma de concatenar arrays es usando el operador ... (spread operator). Este operador propaga los elementos de un array: "+numbers1+numbers2+"<br>")
const allNumberss = [...numbers1, ...numbers2]

//Iteración de Arrays en JavaScript
document.write("<h3>BUCLE FOR</h3>")

for (let i = 0; i < frutas.length; i++) {
  
}
document.write("El bucle for nos permitía ejecutar un bloque de código un número determinado de veces: "+frutas+"<br>")

//metodo .forEach()
document.write("<h3>Metodo .FOREACH</h3>")

frutas.forEach(function (fruta, index, originalArray) {
})

document.write(" que nos permite ejecutar una function para cada uno de los elementos del array. Esta función recibe como parámetros el elemento que se está iterando en ese momento, el índice del elemento y el propio array."+frutas+"<br>")

//arrow function
document.write("<h3>ARROW FUNCTION</h3>")

frutas.forEach((fruta,)=>{
})

document.write("Usando una arrow function e indicando sólo los parámetros que necesitamos de nuestra función podemos simplificarlo aún más: "+frutas+"<br>")

//Búsqueda en Arrays con sus métodos: Existen varios métodos en JavaScript que te permiten, específicamente, buscar dentro de un Array. Estos métodos incluyen indexOf, some, every, find, findIndex e includes.
document.write("<h3>INDEX0F</h3>")

const emojis = ['✨', '🥑', '😍']
const posicionCorazon = emojis.indexOf('😍')

document.write("El método indexOf te permite encontrar la posición de un elemento dentro de un Array. Si el elemento no existe, entonces retorna -1: "+posicionCorazon+"<br>")

//METODO INCLUDES
document.write("<h3>Metodo Includes</h3>")

const tieneCorazon = emojis.includes('😍')

document.write("El método includes determina si un Array incluye un determinado elemento, devolviendo true o false según corresponda."+emojis+"<br>")


//some: ¿Alguno de los elementos cumple con la condición?

document.write("<h3>Metodo some</h3")

const names = ['Leo', 'Isa', 'Ían', 'Lea']

const tieneNombreLargo = names.some(name => name.length > 3)

document.write("El método some te permite verificar si al menos uno de los elementos de un Array cumple con una condición: "+tieneNombreLargo+"<br>")


//Ordenamiento de Arrays en JavaScript
document.write("<h3>Ordenamiento sw Arrays en JS</h3>")

let numeros = [5, 10, 2, 25, 7]
numeros.sort()
document.write("Por defecto, .sort() hace una ordenación un poco extraña: "+numeros+"<br>")

//ordenar de mayor a menor

numeros.sort(function(a, b) {
    return a - b
  })
  document.write(".sort() para que sea de mayor a menor: "+numeros+"<br>")

//RETURN DE MAYOR A MENOR

document.write("Return")

numeros.sort(function(a, b) {
    return b - a
  })
  document.write(".sort() para que sea de mayor a menor: "+numeros+"<br>")


