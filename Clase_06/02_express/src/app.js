import express from 'express';

// Declaramos express
const app = express();
const PORT = 8080;

// endpoint - nuestra API
app.get('/saludo', (req, res) => {
    res.send("Hola desde el backend usando Epress!!")
})

app.get('/usuarios/:nombre/:apellido', (req, res) => {
    console.log(req.params);

    res.send(`Hola, tu nombre completo es: ${req.params.nombre} ${req.params.apellido}`)
})


// Confi puerto de escucha
app.listen(PORT, () => {
    console.log(`Server run on port: ${PORT}`);
})