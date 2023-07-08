const fs = require("fs");
const dirNameAsync = "./file2";
const fileNameAsync = dirNameAsync + "/ejemploCallback.txt";

let data = "Hola Coders; estoy en un archivo! - utilizando callback"


fs.mkdir(dirNameAsync, { recursive: true}, (error) => {
    if (error) throw Error("No se pudo crear el directorio base!")

    // Escritura
    fs.writeFile(fileNameAsync, data, (error) => {
        if (error) throw Error("No se pudo escribir el archivo")
    })

    // Lectura
    fs.readFile(fileNameAsync, 'utf-8', (error, contenido) => {
        if (error) throw Error("No se pudo leer el archivo!")
        console.log("Contenido del archivo:");
        console.log(contenido);

        //Agregamos contenido
        fs.appendFile(fileNameAsync, ' - otro ejemplo!!', (error) => {
            if (error) throw Error("No se pudo agregar contenido en el archivo!")

            // Lectura del archivo
            fs.readFile(fileNameAsync, "utf-8", (error, contenido) => {
                if (error) throw Error("No se puede leer el archivo!");
                console.log("Contenido del archivo como resultado:");
                console.log(contenido);

                // Eliminamos el file
                fs.unlink(fileNameAsync, (error) => {
                    if (error) throw Error("No se puede borrar archivo.");
                });
            });
        })

    })
})
