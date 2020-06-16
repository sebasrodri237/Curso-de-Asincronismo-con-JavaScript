//Reutilizamos codigo de callback/challenge.js pero adaptandolo a promesas con ES6+

let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
//Incluimos el modulo en nuestro proyecto. requiero(nombre_modulo).propiedad
//para hacer instancias(llamados) a una API desde JS

const fetchData = (url_api) => {

    return new Promise((resolve, reject) => {

        const xhttp = new XMLHttpRequest();//Generamos referencia al objeto que necesito(en este caso xmlht...)
        xhttp.open('GET', url_api, true);//Hacer llamados a una url.
        //Obtener info, url de la data, activar el asincronismo(por defecto es true)
        xhttp.onreadystatechange = (() => {//Escuchar sobre la conexion y llamar
            //una funcion cuando ha cambiado el estado. //Mas info https://www.w3schools.com/xml/ajax_xmlhttprequest_response.asp
            if(xhttp.readyState === 4){

                (xhttp.status === 200)
                    ? resolve(JSON.parse(xhttp.responseText))
                    : reject(new Error('Error', url_api))
                    //Este if ternario reemplaza el if que teniamos en
                    //el codigo de callback/challenge.js no haciendo uso de
                    //callback sino la resolucion de promesas
            }
        })
        xhttp.send();//Enviar la solicitud
    })
}

module.exports = fetchData;
//utilizamos module.export debido a que node todavia utiliza esta sintaxis
// y no la de import y export