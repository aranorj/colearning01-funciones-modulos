let numeros = [2, 4, 6, 8, 10];

/* function quintuple(numero){
    return numero * 5;
} */

function mapManual (unArray, unaFuncion) {
let nuevoArray = [];
let dimension = unArray.length;
for(let i = 0; i < dimension; i++){
    nuevoArray.push(unaFuncion(unArray[i])); //
}
return nuevoArray;
}
console.log(mapManual(numeros, unNum=>unNum/2));

//numeros.map(unNum=>unNum*5); //map comun






function sumaDeDosNumeros (numero1, funcionMatias) {
    
    return numero1 + funcionMatias();
}

/*function devolverDos(){
    return 2;
}*/

//console.log(sumaDeDosNumeros(5, ()=>2));