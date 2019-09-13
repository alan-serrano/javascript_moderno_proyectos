const boton1 = document.getElementById('boton1');


boton1.addEventListener('click', function clickListener() {
    const xhr = new XMLHttpRequest;

    xhr.open('GET', 'empleado.json', true);

    xhr.onload = function onloadFunction() {
        if(this.status === 200){
            const persona = JSON.parse(this.responseText);
            const htmlTemplate = `
                <ul>
                    <li>ID: ${persona.id}</li>
                    <li>Nombre: ${persona.nombre}</li>
                    <li>Empresa: ${persona.empresa}</li>
                    <li>Trabajo: ${persona.trabajo}</li>
                </ul>
            `;

            document.getElementById('empleado').innerHTML = htmlTemplate;
        }
    }

    xhr.send();
})