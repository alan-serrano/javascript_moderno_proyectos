// Variables
const presupuestoUsuario = prompt('¿Cuál es tu presupuesto semanal?');
var cantidadPresupuesto;


//Clases
class Presupuesto{
    constructor(presupuesto){
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
    }

    presupuestoRestante(cantidad = 0){
        return this.restante -= Number(cantidad);
    }
}
//Maneja todo lo relacionado a el HTML
class Interfaz{
    insertarPresupuesto(cantidad){
        
    }
}

// Event listeners

document.addEventListener('DOMContentLoaded', function inicioDom() {
    if(!presupuestoUsuario){
        window.location.reload();
    }else{
        //Instanciar un prespuesto
        cantidadPresupuesto = new Presupuesto(presupuestoUsuario);

        //Instanciar la Interfaz
        const ui = new Interfaz;
        ui.insertarPresupuesto(cantidadPresupuesto.presupuesto);
    }
})