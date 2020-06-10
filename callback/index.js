// Ejemplo 1
function sum(num1, num2){

    return num1+num2;
}

function calc(num1, num2, callback){

    return callback(num1, num2);
}

console.log(calc(2,2,sum));
// Ejemplo 2, trabaja mas con tiempos, esperando que aldo suceda

function date(callback){

    console.log(new Date);//Esto imprime la fecha y hora actual de manera inmediata
    setTimeout(function (){//Esto imprime la fecha y hora actual esperando 3s (3000ms)
        let date = new Date;
        callback(date);
    },3000)
}

function printDate(dateNow){

    console.log(dateNow);
}

date(printDate);

