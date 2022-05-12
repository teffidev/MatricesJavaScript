/*Si tengo que recorrer una fila, 
¿Que va a ser estatico y que va a ser dinamico?
==Lo estatico será la FILA es la primera
console.log(matriz[2][])*/

/*Cuando tengo que recorrer una FILA lo estatico será la FILA,
pero lo que cambia es la COLUMNA*/

/*Cuando tengo que recorrer una COLUMNA lo estatico será la COLUMNA,
pero lo que cambia es la FILA*/

/*----Esta es una matriz de 3 x 3 (3 filas, 3 columnas= bajan)----*/
let matriz = [
    [12, 5, 11], //Fila 0
    [15, 3, 7],  //Fila 1
    [1, 22, 8]   //Fila 2
];

/*Crear una función que retorne la Sumatoria 
de la FILA en la posición 1*/

let sumaFila = (arr) => {
    let resultado = 0
    //Cuando recorro una FILA, le pido la longitud a esa FILA
    for(let i = 0; i < arr[1].length; i++){
        resultado += arr[1][i]
    }
    return resultado
};
let resultadoFilaUno = sumaFila(matriz)
console.log('----La suma de la FILA en posición 1 es:-----');
console.log(resultadoFilaUno);


/*-------Dada la siguiente matriz... 
Crear una función que retorne el total de multiplicar 
todos los elementos de la COLUMNA en
la posición 0(cero), que sean multiplos de 4*/

let matriz2 = [
    [12, 5, 11], //Fila 0
    [15, 3, 7],  //Fila 1
    [1, 22, 8]   //Fila 2
];

let multiplicarCol = (arr) => {
    let resultado = 1 //No puede inicializar en 0, porque todo numero multiplicado por 0 da 0
    for(let i = 0; i < arr.length; i++){
        if(arr[i][0] % 4 === 0){
            resultado *= arr[i][0] 
        }
    }
    return resultado
};
let resultadoCol = multiplicarCol(matriz2)
console.log(resultadoCol);


/*--------Sumar todos los elementos de la siguiente matriz: */
//Aqui entra en juego el doble for---

let matriz3 = [
    [12, 5, 11], //Fila 0
    [15, 3, 7],  //Fila 1
    [1, 22, 8]   //Fila 2
];

let recorrermatriz = (arr) => {
    let resultado = 0
    //El primer for es de la COLUMNA y el segundo de la FILA
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            //Ahora todo será dinamico
            resultado += arr[i][j]
        }        
    }
    return resultado
};
let resultadoRecorrido = recorrermatriz(matriz3)
console.log(resultadoRecorrido);