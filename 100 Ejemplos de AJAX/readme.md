# Ejercicios de AJAX

## ¿Qué es AJAX?

AJAX significa JavaScript asíncrono y XML (Asynchronous JavaScript and XML). Es un conjunto de técnicas de desarrollo web que permiten que las aplicaciones web funcionen de forma asíncrona, procesando cualquier solicitud al servidor en segundo plano. Espera, ¿qué es AJAX de nuevo? Vamos a revisar cada término por separado.

JavaScript es un lenguaje de programación muy conocido. Entre otras funciones, gestiona el contenido dinámico de un sitio web y permite la interacción dinámica del usuario. XML es otra variante de un lenguaje de marcado como HTML, como lo sugiere su nombre: eXtensible Markup Language. Mientras HTML está diseñado para mostrar datos, XML está diseñado para contener y transportar datos.

Tanto JavaScript como XML funcionan de forma asíncrona en AJAX. Como resultado, cualquier aplicación web que use AJAX puede enviar y recuperar datos del servidor sin la necesidad de volver a cargar toda la página.

## ¿Qué es una API?

- API = Application Programming Interface, Una Interfaz de programación de aplicaciones

- Interfaz es la conexión entre dos sistemas(máquinas, personas). Ejemplos: Una calculadora (las teclas son la interfaz), celular (pantalla táctil), terminal (a partir de la ventana de consola).

- Funciones, métodos que ofrece una librería para ser utilizada por otro software como una capa de abstracción.

- Para acceder al servicio hay que enviar una petición estructurada.

- Ejemplo: Google Maps API

## ¿Qué es una REST API?

REST es una interfaz para conectar varios sistemas basados en el protocolo HTTP (uno de los protocolos más antiguos) y nos sirve para obtener y generar datos y operaciones, devolviendo esos datos en formatos muy específicos, como XML y JSON.

- REST = Representational State Tranfer, Transferencia de representación de estado.

- Puede ser diseñada en cualquier lenguaje.

- REST Describe cómo deben ponerse a disposición los recursos.

- La API debe responder a los Request de HTTP: GET, POST, PUT y DELETE.

- Cada API tiene sus propias reglas, método, estructuras.

## REST API EndPoints y Request

- Una REST API cuenta con EndPoints (o Urls) para hacer operaciones CRUD.

- Listar todos los clientes GET /clientes.
- Obtener un sólo cliente GET /clientes/10
- Crear un nuevo cliente POST /clientes
- Editar un contacto PUT /cliente/3
- Borrar un contacto DELETE /clientes/8

