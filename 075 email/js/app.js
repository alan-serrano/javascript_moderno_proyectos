document.addEventListener("DOMContentLoaded", function domLoaded() {
    //Variables

    const EMAIL = document.getElementById('email');
    const ASUNTO = document.getElementById('asunto');
    const MENSAJE = document.getElementById('mensaje');
    const BTN_ENVIAR = document.getElementById('enviar');
    const FORMULARIO_ENVIAR = document.getElementById('enviar-mail');
    const RESET_BTN = document.getElementById("resetBtn");



    (function eventListeners() {
        //Listener
        //Inicio de la aplicación y deshabilitar submit
        inicioApp();

        //Campos del formulario
        EMAIL.addEventListener('blur', validarCampo);
        ASUNTO.addEventListener('blur', validarCampo);
        MENSAJE.addEventListener('blur', validarCampo);
        BTN_ENVIAR.addEventListener('click', enviarEmail);
        RESET_BTN.addEventListener('click', resetFormulario)
    }())

    function inicioApp() {
        //Deshabilitar el envío
        BTN_ENVIAR.disabled = true;
    }



    //Funciones

    //Valida que el campo tenga algo escrito

    function validarCampo(e) {
        
        
        //Se validad la longitud del texto y que no esté vacío
        validarLongitud(this);

        let errores = document.querySelectorAll('.error');

        //Validar únicamente el email
        if(this.type == 'email'){
            validarEmail(this);
        }
        if(EMAIL.value !== '' && ASUNTO.value !=='' && MENSAJE.value !== ''){
            if(errores.length == 0){
                BTN_ENVIAR.disabled = false;
            }
        }
    }

    //Verfica que los input no estén vacíos
    function validarLongitud(campo) {
        if (campo.value.length > 0) {
            campo.style.borderBottomColor = 'green',
            campo.classList.remove('error');
        } else {
            campo.style.borderBottomColor = 'red',
            campo.classList.add('error');
        }
    }

    //Verifica si el email tiene @
    function validarEmail(campo) {
        const mensaje = campo.value;
        if(mensaje.indexOf('@') != -1){
            campo.style.borderBottomColor = 'green',
            campo.classList.remove('error');
        }else{
            campo.style.borderBottomColor = 'red',
            campo.classList.add('error'); 
        }
    }

    //Envía el email
    function enviarEmail(e) {
        e.preventDefault();
        var spinner = document.getElementById('spinner');
        spinner.style.display = "block";

        //Gift que envía email
        const ENVIADO = document.createElement("img");
        ENVIADO.src = 'img/mail.gif';
        ENVIADO.style.display = 'block';

        //Agregar imagen
        


        setTimeout(function ocultarSpinner() {
            spinner.style.display = "none";
            spinner.parentElement.appendChild(ENVIADO);

            setTimeout(function ocultarEnviado() {
                ENVIADO.remove();
                resetFormulario();
            },5000)
            
        }, 3000);
        
    }

    //Reset formulario
    function resetFormulario(e) {
        e.preventDefault();
        FORMULARIO_ENVIAR.reset();
    }
})