import express from 'express';

const app = express();

app.get('/bienvenida', (req, res)=>{
    res.send('<h1 style="color:blue;">Bienvenido a mi primer servidor express</h1>');
});

app.get('/usuario', (req, res)=>{
    res.send({
        nombre: "Leandro",
        apellido: "Vildoza",
        Edad: 40
    });
});

app.listen(8080, ()=> console.log('Listening on port 8088'));