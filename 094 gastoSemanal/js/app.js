// Variables
const presupuestoUsuario = prompt('¿Cuál es tu presupuesto semanal?');
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

}

// Event listeners

document.addEventListener('DOMContentLoaded', function inicioDom() {
    if(!presupuestoUsuario){
        window.location.reload();
    }else{
        //Instanciar un presupuesto
        presupuesto = new Presupuesto(presupuestoUsuario);

        //Instanciar la Interfaz
        const ui = new Interfaz;
        ui.insertarPresupuesto(presupuesto.presupuesto);
    }
})