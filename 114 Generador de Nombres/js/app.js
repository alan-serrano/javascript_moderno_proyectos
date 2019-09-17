document.querySelector('#generar-nombre').addEventListener('submit', cargarNombres);

// Llamado a Ajax e imprimir resultados

function cargarNombres(e) {
    e.preventDefault();

    //Leer las variables

    const origen = document.getElementById('origen');
    const origenSeleccionado = origen.options[origen.selectedIndex].value;

    const nombresAGenerar = document.getElementById('numero').value;

    const genero = document.getElementById('genero');
    const generoSeleccionado = genero.options[genero.selectedIndex].value;

    let url ='https://uinames.com/api/?';

    //Si hay origen agregarlo a la URL

    if(origenSeleccionado)  url += `region=${origenSeleccionado}&`;

    //Si hay un género agregarlo a la URL
    if(generoSeleccionado)  url += `gender=${generoSeleccionado}&`;

    // Si hay una cantidad agregarlo a la URL
    if(nombresAGenerar)  url += `amount=${nombresAGenerar}&`;

    /* Conectar con Fetch */

    fetch(url)
        .then(function (res) {
            return res.json();
        })
        .then(function (nombres) {
            const resultadoEl = document.getElementById('resultado');
            resultadoEl.innerHTML = '';

            //Generar el HTML
            let htmlNombres = `<h2> Nombres Generados</h2>`;

            htmlNombres += '<ul class="lista">';

            nombres.forEach(function añadirNombres(persona) {
                htmlNombres += `
                    <li>${persona.name}</li>
                `
            })

            htmlNombres += `</ul>`

            resultadoEl.innerHTML = htmlNombres;
        })
        .catch(function (error) {
            console.log(error);
        });
}