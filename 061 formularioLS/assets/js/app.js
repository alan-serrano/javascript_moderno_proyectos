document.addEventListener('DOMContentLoaded', function principal() {
    //Variables
    const listaTweets = document.getElementById('lista-tweets');

    //Event Listeners

    (function eventListeners() {
        const formulario = document.getElementById('formulario');
        //Cuando se envía formulario
        formulario.addEventListener('submit', agregarTweetClick)
        //Borrar tweets
        listaTweets.addEventListener('click', borrarTweet)

    }());

    localStorageListo();


    //Funciones

    function agregarTweetClick(e) {
        e.preventDefault();

        // leer el valor del textarea
        const tweet = document.getElementById('tweet').value;

        //Añade el tweet a la lista
        agregarTweetsAListas(tweet);

        //Añadir al local storage
        agregarTweetLocalStorage(tweet);


    }

    //Añade el valor tweet a listas
    function agregarTweetsAListas(tweet) {

        if(tweet){
            //Crear boton eliminar
            const botonBorrar = document.createElement('a');
            botonBorrar.classList.add('borrar-tweet');
            botonBorrar.innerText = 'X';

            //Crear elemento y añadir el contenido a la lista
            const li = document.createElement('li');
            li.innerText = tweet;

            //Añade botón borrar al tweet
            li.appendChild(botonBorrar);
            listaTweets.appendChild(li);
        }
    }

    //Elimina el tweet de la lista
    function borrarTweet(e) {
        e.preventDefault();
        
        if(e.target.classList.contains('borrar-tweet')){
            e.target.parentElement.remove();

            borrarTweetLocalStorage(e.target.parentElement.innerText);

            console.log(e.target.parentElement.innerText);
        }
    }

    function agregarTweetLocalStorage(tweet) {
        var tweets = obtenerTweetsLocalStorage();
        if (tweet) {
            //Añadir el nuevo tweet
            tweets.push(tweet)

            //Añadir tweets convertido a JSON al local storage

            localStorage.setItem('tweets', JSON.stringify(tweets));
        }

    }

    //Obtiene los tweets del Local Storage, si no hay valor devuelve un array vacío
    function obtenerTweetsLocalStorage() {
        var tweets;
        if(!localStorage.getItem('tweets')){
            tweets = [];    
        }else{
            tweets = JSON.parse(localStorage.getItem('tweets'))
        }
        return tweets;
    }

    //Elimina los tweets del Local Storage
    function borrarTweetLocalStorage(tweet) {
        tweet = tweet.substring(0, tweet.length - 1);
        var tweets = obtenerTweetsLocalStorage();

        if(tweets.indexOf(tweet) !== -1){

            tweets.splice(tweets.indexOf(tweet), 1);
            localStorage.setItem('tweets', JSON.stringify(tweets));

        }
    }

    // Mostrar datos de local Storage en listas

    function localStorageListo() {
        var tweets;
        tweets = obtenerTweetsLocalStorage();

        tweets.forEach(function cicloEach(val) {
            agregarTweetsAListas(val);
        })
    }


})