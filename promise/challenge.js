const fetchData = require('../utils/fetchData');
//Traemos el modulo de fetchData
const API = 'https://rickandmortyapi.com/api/character/';

fetchData(API)
//Hacemos el primer llamado y una vez resuelto mostramos por consola
//luego hacemos el return de una nueva peticion
    .then(data => {
        console.log(data.info.count);
        return fetchData(`${API}${data.results[0].id}`);
    })
//Hacemos el segundo llamado y una vez resuelto mostramos por consola
//luego hacemos el return de una nueva peticion
    .then(data => {
        console.log(data.name);
        return fetchData(data.origin.url);
    })
//Hacemos el tercer llamado y una vez resuelto mostramos por consola
//luego hacemos el return de una nueva peticion
    .then(data => {
        console.log(data.dimension);
    })
//Si sucede un error en algun llamado se ejecuta el error
    .catch(err => console.error(err));

