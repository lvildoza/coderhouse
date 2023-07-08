

const info = {
    contenidoStr: "",
    contenidoObj: "",
    size: 0
}

const fs = require("fs");
const fileNameJSON = "./package.json";
const fileInfoJSON = "./info.json";


// Creo el ambiente async
const fsConPromesasJSON = async () => {

    // lectura
    if (!fs.existsSync(fileNameJSON)) {
        console.error("Archivo no existe favor ejecutar comando: npm init -y ");
        throw Error("El archivo no se puede leer porque no existe: " + fileNameJSON);
    }

    // obtenemos el JSON String
    let jsonString = await fs.promises.readFile(fileNameJSON, "utf-8");
    console.info("El archivo JSON obtenido desde archivo: ");
    console.log(jsonString);

    info.contenidoStr = jsonString;
    info.contenidoObj = JSON.parse(jsonString);
    console.log("Objeto info transformado desde archivo:" + fileNameJSON);
    //console.log(info.contenidoObj.name);
    console.log(info);


    // guardamos en formato .json
    // await fs.promises.writeFile(fileInfoJSON, JSON.stringify(null, 2, info, '\t'));
    await fs.promises.writeFile(fileInfoJSON, JSON.stringify(info, null, 2, '\t'));
    console.log(fileInfoJSON);




    // lectura de resultados
    let resultado = await fs.promises.readFile(fileInfoJSON, "utf-8");
    console.log("Archivo leido resultado:");
    console.log(resultado);

}

fsConPromesasJSON();