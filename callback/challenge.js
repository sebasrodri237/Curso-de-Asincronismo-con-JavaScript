let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
//Incluimos el modulo en nuestro proyecto. requiero(nombre_modulo).propiedad
//para hacer instancias(llamados) a una API desde JS
let API = 'https://rickandmortyapi.com/api/character/';//La API a la que haremos peticiones

function fetchData(url_api, callback){

    let xhttp = new XMLHttpRequest();//Generamos referencia al objeto que necesito(en este caso xmlht...)
    xhttp.open('GET', url_api, true);//Hacer llamados a una url.
    //Obtener info, url de la data, activar el asincronismo(por defecto es true)
    xhttp.onreadystatechange = function(e){//Escuchar sobre la conexion y llamar
        //una funcion cuando ha cambiado el estado. //Mas info https://www.w3schools.com/xml/ajax_xmlhttprequest_response.asp
        if(xhttp.readyState === 4){//Validacion sobre que se encuentra la conexion
            //4 significa ha sido completado
            if(xhttp.status === 200){//Validar el estado en que llego ej: 200 ha sido completada correctamente
                callback(null, JSON.parse(xhttp.responseText))//Primer parametro error, info que se desencadena(el resultado de llamarla)
                //hago parse porque recibo una respuesta en texto y lo necesito tipo JSON
                //una notacion de objetos de JS.
            }else{

                const error = new Error('Error' + url_api);//Mostrar si sucede un error
                return callback(error, null);
            }
        }
    }
    xhttp.send();//Enviar la solicitud
}
//Crear una funcion que permite traer info desde la API

fetchData(API, function(error1, data1){

    if(error1){

        return console.error(error1);
    }
    fetchData(API + data1.results[0].id, function(error2,data2){

        if(error2){

            return console.error(error2);
        }
        fetchData(data2.origin.url, function(error3, data3){
            
            if(error3){

                return console.error(error3);
            }
            console.log(data1.info.count);
            console.log(data2.name);
            console.log(data3.dimension);
            //Hay que hacer 3 peticiones a la API porque no deja traer
            //todos los valores en una sola peticion
            //Encadenar mas peticiones seria
            // el callback hell. Una mala practica.
        })
    })
})