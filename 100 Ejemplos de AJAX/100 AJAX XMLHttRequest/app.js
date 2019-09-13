document.getElementById('cargar').addEventListener('click', cargarDatos);

function cargarDatos() {
    //Crear instancia XMLHttpRequest
    const xhr = new XMLHttpRequest;

    //Abrir una conexión
    xhr.open('GET', 'datos.txt', true);

    /******************** Método anterior *************************/

    //ready status
    /* 
    0.- No inicializado
    1.-Conexión establecida
    2.- Recibido
    3.- Procesando
    4.- Respuesta lista
    */

    //En esta función se recorre los estados como si de un bucle se tratara
    xhr.onreadystatechange = function onreadyFunction() {
        console.log(`Estado ${this.readyState}`);
        if (this.readyState === 4 && this.status === 200) {
            console.log(this.responseText);
        }
    }
    /*********************************************************/


    /************* Nueva forma con el objeto XMLHttpRequest **********/

    //Una vez que carga
    xhr.onload = function onloadFunction() {
        //200: Correcto | 403: Prohibido | 404: No encontrado
        if (this.status === 200) {
            document.getElementById('listado').innerHTML = `<h1>${this.responseText}</h1>`;
        }
    }

    /******************************************************************/

    //Enviar el request
    xhr.send();



}