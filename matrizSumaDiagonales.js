/*-------COMO SUMAR DIAGONALES - Principales y Secundarias----------*/

/*Principal, es la que comienza en FILA 0 - COLUMNA 0 
y termina en FILA ultima y COLUMNA ultima*/

/*Secundaria, es la que empieza en FILA 0 - COLUMNA ultima 
y termina en FILA ultima - COLUMNA 0 */

//Para acceder al 12 - Accedo 0 - 0
//Para acceder al 3 - Accedo 1 - 1
//Para acceder al 8 - Accedo 2 - 2

let matriz4 = [
    [12, 5, 11], //Fila 0
    [15, 3, 7],  //Fila 1
    [1, 22, 8]   //Fila 2
];

/*Vamos a sacar la Diagonal Principal, 
no necesitasmo de un doble for:*/
let principal = (arr) => {
    let resultado = 0
    for(let i=0; i < arr.length; i++){
        resultado += arr[i][i] //porque se repiten en posición FILA-COl
    }
    return resultado
};
// console.log(principal(matriz4));

let secundaria = (arr) => {
    let resultado = 0
    for(let i=0; i < arr.length; i++){
        resultado += arr[i][arr.length - (1 + i)]
    }
    return resultado
};
// console.log(secundaria(matriz4));

/*Puedo hacer una función que una las dos Diagonales: */

let ppalMasSecund = (arr) => {
    let resultadoPrincipal = 0
    let resultadoSecundaria = 0
    for(let i=0; i < arr.length; i++){
        resultadoPrincipal += arr[i][i]
        resultadoSecundaria += arr[i][arr.length - (1 + i)]
    }
    console.log(resultadoPrincipal);
    console.log(resultadoSecundaria);
};
ppalMasSecund(matriz4);