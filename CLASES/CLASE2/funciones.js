function sumar (parametro1, parametro2) {
    return parametro1 + parametro2;
}

const resultadoSuma = sumar(4,6)
console.log(resultadoSuma);

// Funcion Flecha
//const resultadoSumaFlecha = (parametro1,parametro2) => {
//    return parametro1 + parametro2;
//}
//console.log(resultadoSumaFlecha);


// Return Implicito
const resultadoSumaFlecha = (parametro1,parametro2) => parametro1 + parametro2;
console.log(resultadoSumaFlecha(15,20));
