const contador = () => {
    let counter = 1;
    console.log('Realizando la operación');
    let timer = setInterval(() => {
        console.log(counter++);
        if(counter>5){
            clearInterval(timer)
        }
    }, 1000);
}

console.log('Inicio la tarea.');
contador();
console.log('Tarea finalizada');