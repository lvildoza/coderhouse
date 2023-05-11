// Características principales de ES7

//Exponencial
const valoresBase = [1,2,3,4,5,6];

//Operador Map
const nuevosValores = valoresBase.map((numero,indice)=> numero**indice);

console.log(nuevosValores);

//Includes
const nombres = ["Lucia", "Maria", "Tomás", "Julio"];

if (nombres.includes ("Maria")){
    console.log("Tenemos el elemento");
} else {
    console.log("No hay elelementos en el array");
}