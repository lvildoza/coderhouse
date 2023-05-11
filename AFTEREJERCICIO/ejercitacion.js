// Definir la class tickt manager

class TicketManager{
    #precioBaseGanancia = 0.15;

    constructor (){
        // Definimos el constructor que se llama "eventos", que va
        // a tener un arreglo vacio, para que el listado de eventos aparezca como vacío
        this.eventos = [];
    }

    // Debe contar con un método que retorne nuestro arreglo de eventos.

    getEventos = () =>{
        return this.eventos;
    }

    // Para poder almacenar eventos en nuestro arreglo, debemos pasarle ciertos parámetros.

    agregarEvento = (nombre, lugar, precio, capacidad = 50,
        fecha = new Date().toLocaleDateString()) => {
            const evento = {
                nombre,
                lugar,
                precio,
                capacidad,
                fecha,
                participantes: [] // nos pedía participantes con array vacío
            };

            if (this.eventos.length === 0){
                evento.id = 1;
            }
            else{
                evento.id = this.eventos [this.eventos.length-1].id+1
            }

            // insertamos un evento
            this.eventos.push(evento);
        }

        //Debe contar con el evento agregarUsuario, el cual recibe como parámetro el
        //id de evento y usuario

        agregarUsuario = (idEvento, idUsuario) => {
            const eventoIndex = this.eventos.findIndex(evento => evento.id === idEvento);
            //findIndex retorna la posición dentro del arreglo
            //almacena el índice donde se encuentr nuestro evento

            if(eventoIndex === -1){
                console.log("Evento no encontrado");
                return;
            }
            const usuarioRegistrado = this.eventos [eventoIndex].participantes.includes(idUsuario);

            if (usuarioRegistrado) {
                console.log ("Usuario ya registrado");
                return;
            }
            this.eventos[eventoIndex].participantes.push(idUsuario)
        }
};

const manejadorEventos = new TicketManager();
manejadorEventos.agregarEvento("Evento After Lunes", "Argentina", 15000);
manejadorEventos.agregarEvento("Evento After", "Argentina", 12000);

//Agregar al usuario al evento
manejadorEventos.agregarUsuario(1,1);
manejadorEventos.agregarUsuario(2,2);

console.log(manejadorEventos.getEventos());