const http = require('http');


// Creamos el server
const server = http.createServer((request, response) => {
    response.end("Mi primer hola mundo desde el server con modulo nativo HTTP!!!")
})


// abrimos el puerto de escucha
server.listen(8080, () => {
    console.log(`Server run on port: 8080`);
})