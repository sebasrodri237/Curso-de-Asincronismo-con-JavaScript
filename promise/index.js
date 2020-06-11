const sometimesWillHappend = () =>{

    return new Promise((resolve, reject) =>{

        if (true) {

            resolve('Resuelta');
        }else{

            reject('No resuelta');
        }
    })
}

// sometimesWillHappend()
//     .then(response => console.log(response))
//     .catch(err => console.log(err));
//     //EJEMPLO 1

const sometimesWillHappendTwo = () =>{

    return new Promise((resolve, reject) =>{

        if (true) {

            setTimeout(() => {//Simular de mejor manera el asincronismo
                resolve('Resuelta');
            }, 2000)
        }else{

            const error = new Error('No resuelta');//Mejor practica que la anterior
            reject(error);
        }
    })
}

// sometimesWillHappendTwo()
//     .then(response => console.log(response))
//     .catch(err => console.log(err));
// EJEMPLO 2 simulando asincronismo

Promise.all([sometimesWillHappend(), sometimesWillHappendTwo()])
    .then(response => console.log('Array of results', response))
    .catch(err => console.log(err));
//Encardenar promesas o ejecutar multiples promesas, devolviendo un arreglo
//con los valores(respuestas) de ambas promesas.
//Si una sola falla, la promesa devuelta sera un error