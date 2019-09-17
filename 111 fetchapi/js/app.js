document.getElementById('txtBtn').addEventListener('click', cargarTXT);


function cargarTXT() {
    fetch('datos.txt')
        .then(function (res) {
            return res.text();
        })
        .then(function (empleados) {
            console.log(empleados);
            document.getElementById('resultado').innerHTML = empleados;
        })
        .catch(function (err) {
            console.log(err);
        });
}