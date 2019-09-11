function Seguro(marca, anio, tipo) {
    this.marca = marca;
    this.anio = anio;
    this.tipo = tipo;
}

Seguro.prototype = {
    cotizarSeguro(){
        var total;
        const base = 2000;

        var marcaList = [
            {marca: "Americano", factor : 1.15},
            {marca: "Asiático", factor: 1.05},
            {marca: "Europeo", factor: 1.35}
        ];

        var tipo = {
            "basico": 1.30,
            "completo": 1.50
        }

        //Factor debido a la marca
        var factorMarca = marcaList[this.marca - 1].factor;
        
        //factorAño : Cada año de diferencia con el actual, hay que reducir 3% el valor del seguro;
        const diferenciaAnio = new Date().getFullYear() - this.anio;
        const factorAnio = (1 - diferenciaAnio * 0.03);
        
        //Factor tipo
        const factorTipo = tipo[this.tipo];

        total = base * factorMarca * factorAnio * factorTipo;

        return total;
    }
}
//Todo lo que se muestra 
function Interfaz() {}

Interfaz.prototype = {
    mostrarMensaje(mensaje, tipo){

        const div = document.createElement('div');

        if(tipo === "error"){
            div.classList = 'mensaje error';
        }else if(tipo === 'correcto'){
            div.classList = 'mensaje correcto';
        }


        div.innerHTML = `${mensaje}`

        if(!formulario.querySelector('div.error')){
            formulario.insertBefore(div, document.querySelector(".form-group"));
        }

        setTimeout(
            function eliminarDiv() {
                div.remove();
            }
            , 3000
        );
        
    },

    //Imprime el resultado de la cotización
    mostrarResultado(seguro, total){        
        var marcaList = ['Americano', 'Asiatico', 'Europeo'];
        var marca = marcaList[seguro.marca - 1];
        const resultado = document.getElementById('resultado');

        const div = document.createElement('div');

        div.innerHTML = `
            <p class="header">Tu Resumen:</p>
            <p>Marca: ${marca}</p>
            <p>Año: ${seguro.anio}</p>
            <p>Tipo: ${seguro.tipo}</p>
            <p>Total:$ ${total}</p>
        `;
        //Mostrando spinner
        const spinner = document.querySelector('#cargando img');
        spinner.style.display = "block";

        setTimeout(function ocultarSpinner() {
            spinner.removeAttribute("style");
            resultado.appendChild(div);
        },3000)
         
    }
}


//Event listener

const formulario = document.getElementById("cotizar-seguro");

formulario.addEventListener("submit", function submit(e) {
    e.preventDefault();

    // leer la marca seleccionada
    const marca = document.getElementById("marca");
    const marcaSeleccionada = marca.options[marca.selectedIndex].value;

    // leer el año seleccionado del select
    const anio = document.getElementById('anio');
    const anioSeleccionado = anio.options[anio.selectedIndex].value;
    
    //Leer tipo de seguro
    const tipo = document.querySelector('input[name=tipo]:checked');
    const tipoSeleccionado = tipo.value;

    //Crear interfas

    const interfaz = new Interfaz;

    //Revisamos si los campos están vacíos

    if(!!marcaSeleccionada && !!anioSeleccionado && !!tipoSeleccionado){
        //Limpiar resultados anteriores.
        const resultado = document.querySelector("#resultado div");
        if(resultado) resultado.remove();

        //Instanciar seguro y mostrar interfaz
        const seguro = new Seguro(marcaSeleccionada, anioSeleccionado, tipoSeleccionado);
        //Cotizar el seguro
        const total = seguro.cotizarSeguro();

        //Mostrar resultado
        interfaz.mostrarResultado(seguro, total);
        interfaz.mostrarMensaje('Cotizando...', 'correcto');
    } else{
        //Mostrar error, faltan datos
        interfaz.mostrarMensaje('Faltan datos, revisar el formulario y prueba de nuevo', 'error');
    }

})

const max = new Date().getFullYear(),
      min = max - 20;

const selectAnios = document.getElementById('anio');

for (let i = max; i >= min; i--) {

    let option = document.createElement('option');
    option.value = i;
    option.innerHTML = i
    selectAnios.appendChild(option);
    
}   