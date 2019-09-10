document.addEventListener("DOMContentLoaded", function dom() {
    // Variables

    const carrito = document.getElementById('carrito');
    const cursos = document.getElementById('lista-cursos');
    const listaCursos = document.querySelector('#lista-carrito tbody');
    const vaciarCarritoBtn = document.getElementById('vaciar-carrito');

    //Lee los datos del local storage
    leerLocalStorage();


    //Listeners

    (function cargarEventListener() {
       // Dispara cuando se presiona "Agregar Carrito" 
       cursos.addEventListener('click', comprarCurso);

       //Cuando se elimina un curso del carrito
       carrito.addEventListener('click', eliminarCurso);
       //Al vaciar el carrito
       vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
    }())

    //Añade el curso al carrito
    function comprarCurso(e) {
        e.preventDefault();
        //Delegation para agregar carrito
        if(e.target.classList.contains("agregar-carrito")){
            const curso = e.target.parentElement.parentElement;
            //Enviar el curso seleccionado para tomar sus datos
            leerDatosCurso(curso);
        }

    }

    //Lee los datos del curso

    function leerDatosCurso(curso) {
        const infoCurso = {
            imagen: curso.querySelector('img').src,
            titulo: curso.querySelector('h4').textContent,
            precio: curso.querySelector('.precio span').textContent,
            id: curso.querySelector('a').getAttribute('data-id')
        }

        insertarCarrito(infoCurso);
    }

    function insertarCarrito(infoCurso) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <img src = "${infoCurso.imagen}" width="100">
            </td>
            <td>${infoCurso.titulo}</td>
            <td>${infoCurso.precio}</td>
            <td>
                <a href="#" class="borrar-curso" data-id="${infoCurso.id}">X</a>
            </td>
        `;

        listaCursos.appendChild(row);

        guardarCursoLocalStorage(infoCurso);
    }

    //Elimina el curso del carrito en el DOM
    function eliminarCurso(e) {
        e.preventDefault();
    
        var curso;
    
        if(e.target.classList.contains("borrar-curso")){
            curso = e.target.parentElement.parentElement;

            //Obtener ID de curso
            cursoId = curso.querySelector("a").getAttribute("data-id");

            //Eliminar curso 
            curso.remove();

            eliminarCursoLocalStorage(cursoId);
        }
    
    }
    //Elimina los cursos del carrito en el DOM
    function vaciarCarrito() {

        //Forma lenta
        // listaCursos.innerHTML = "";

        //Forma recomendada
        while (listaCursos.lastChild) {
            listaCursos.lastChild.remove();
          }

        vaciarLocalStorage();
    }

    // Imprime los cursos de localStorage

    function leerLocalStorage() {
        var cursos = obtenerCursosLocalStorage();
        cursos.forEach(añadirCursosDom);
    

        //Agregar cada dato del localStorage a la lista de cursos en el DOM
        function añadirCursosDom(infoCurso) {
            const row = document.createElement('tr');
            row.innerHTML = `
            <td>
                <img src = "${infoCurso.imagen}" width="100">
            </td>
            <td>${infoCurso.titulo}</td>
            <td>${infoCurso.precio}</td>
            <td>
                <a href="#" class="borrar-curso" data-id="${infoCurso.id}">X</a>
            </td>
            `;

            listaCursos.appendChild(row);
        }
    }

    //Almacena los cursos en el carrito a Local Storage
    function guardarCursoLocalStorage(infoCurso) {

        //Añadir infoCurso al array
        var cursos = obtenerCursosLocalStorage();
        cursos.push(infoCurso);
        var cursosJSON = JSON.stringify(cursos);
        //Almacenar en local storage
        localStorage.setItem('cursos', cursosJSON);


    }

    function eliminarCursoLocalStorage(cursoId) {
        var cursos;
        var cursosJSON;

        cursos = obtenerCursosLocalStorage();
        cursos = cursos.filter(function forEliminarCurso(val) {
            return val.id != cursoId
        });

        cursosJSON = JSON.stringify(cursos);

        //Añadir a local storage
        localStorage.setItem('cursos', cursosJSON);
        
    }

    function vaciarLocalStorage() {
        localStorage.clear();
    }

    function obtenerCursosLocalStorage() {
        var cursosLS;

        //comprobación si hay algo en localStorage
        if (!localStorage.getItem('cursos')) {
            cursosLS = [];
        } else{
            cursosLS = JSON.parse(localStorage.getItem('cursos'));
        }

        return cursosLS;
    }
});
