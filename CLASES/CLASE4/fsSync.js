const fs = require('fs');
//fs nos permite acceder a las operaciones para archivos

fs.writeFileSync('./ejemplo.txt', "¡Hola, Coders, estoy en un archivo!")
/**
 * Primer operación: para escribir un archivo, el primer argumento/parámetro es la ruta y
 * nombre del archivo sobre el que queremos trabajar. El segundo argumento es el contenido
 * ¡Super sencillo!
 */

if(fs.existsSync('./ejemplo.txt')){//existSync devuelve true si el archivo sí existe, y false si el archivo no existe
let contenido = fs.readFileSync('./ejemplo.txt', 'utf-8')
/**
 * readFileSync lee el contenido del archivo, es importante que en el segundo parámetro coloquemos el tipo de 
 * codificación que utilizaremos para leerlo. En este curso sólo abarcaremos utf-8
 */
console.log(contenido) //El resultado será lo que escribimos arriba en la línea 4: "¡Hola, Coders, estoy en un archivo!"
fs.appendFileSync('./ejemplo.txt', ' Más contenido')
/**
 * appendFileSync buscará primero la ruta del archivo, si no encuentra ningun archivo, lo creará, en caso de sí
 * encontrarlo, en lugar de sobreescribir todo el archivo, sólo colocará el contenido al final.
 */

contenido = fs.readFileSync('./ejemplo.txt', 'utf-8')
//Volvemos a leer el contenido del archivo
console.log(contenido);
//Esta vez el contenido será: "¡Hola, coders, estoy en un archivos!" Más contenido" esto es gracias al appendFileSync.

fs.unlinkSync('./ejemplo.txt');
//Por último, esta línea de código eliminará el archivo, independientemente de todo el contenido que éste tenga.
}
