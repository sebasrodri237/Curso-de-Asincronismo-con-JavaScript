let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
//Incluimos el modulo en nuestro proyecto. requiero(nombre_modulo).propiedad
//para hacer instancias(llamados) a una API desde JS

function fetchData(url_api, callback){

    let xhttp = new XMLHttpRequest();//Generamos referencia al objeto que necesito(en este caso xmlht...)
    xhttp.open('GET', url_api, true)//Hacer llamados a una url.
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
