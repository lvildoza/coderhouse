//Spread y rest

const objeto1 = {
    propiedad1: 2,
    propiedad2: "b",
    propiedad3: true
};

const objeto2 = {
    propiedad1: "c",
    propiedad2: [1,2,3,4]
};

const objetoResultante = {
    ...objeto1, ...objeto2
};
console.log(objetoResultante);

//Rest: va a exclui algún elemento del objeto

const objeto3 = {
    a: 1,
    b: 2,
    c: 3
};
const {a, ...rest} = objeto3;
console.log(rest);
console.log(a);