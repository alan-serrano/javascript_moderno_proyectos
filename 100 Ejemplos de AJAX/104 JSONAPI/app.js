const cargarPosts = document.querySelector('#cargar').addEventListener('click', cargarApi);


function cargarApi() {
    const xhr = new XMLHttpRequest;

    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);

    xhr.onload = function onloadFunction() {
        if(this.status === 200){
            const RESPUESTA = JSON.parse(this.responseText);

            let contenido = '';
            RESPUESTA.forEach(function forEach(post) {
                contenido += `
                    <h3>${post.title}</h3>
                    <p>${post.body}</p>
                `
            });

            document.getElementById('listado').innerHTML = contenido;
        }
    }

    xhr.send();
}

