// Variables
const presupuestoUsuario = prompt('¿Cuál es tu presupuesto semanal?');
const formulario = document.getElementById('agregar-gasto');
var cantidadPresupuesto;


//Clases
class Presupuesto{
    constructor(presupuesto){
        this.presupuesto = Number(presupuesto);
        this.restante = this.presupuesto;
    }

    presupuestoRestante(cantidad = 0){
        return this.restante -= Number(cantidad);
    }
}
//Maneja todo lo relacionado a el HTML
class Interfaz{
    insertarPresupuesto(cantidad){
        const totalSpan = document.querySelector('span#total');
        const restanteSpan = document.querySelector('span#restante');

        //Insertar al HTML
        totalSpan.innerHTML = `${cantidad}`;
        restanteSpan.innerHTML = `${cantidad}`;
    }

    imprimirMensaje(mensaje, tipo){
        //Creando mensaje
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center', 'alert');
        if(tipo === 'error'){
            divMensaje.classList.add('alert-danger');
        }else{
            divMensaje.classList.add('alert-success');
        }

        divMensaje.appendChild(document.createTextNode(mensaje));

        //Insertando mensaje

        document.querySelector(".primario").insertBefore(divMensaje, formulario);


        //Quitar mensaje luego de 3 segundos
        setTimeout(function quitarMensaje() {
            divMensaje.remove();
            formulario.reset();
        }, 3000);
    }

}

// Event listeners

//Instanciar la Interfaz
const ui = new Interfaz;

document.addEventListener('DOMContentLoaded', function inicioDom() {
    if(!presupuestoUsuario){
        window.location.reload();
    }else{
        //Instanciar un presupuesto
        presupuesto = new Presupuesto(presupuestoUsuario);
        ui.insertarPresupuesto(presupuesto.presupuesto);
    }
});

formulario.addEventListener('submit', function submitAction(e) {
    e.preventDefault();

    //Leer el formulario
    const nombreGasto = document.getElementById('gasto').value;
    const gasto = document.getElementById('cantidad').value;

    //Comprobar que los campos no estén vacíos
    if(!nombreGasto || !gasto){
        // 2 parámetros: mensaje y tipo
        ui.imprimirMensaje('Hubo un error', 'error');
    }else{

    }
});