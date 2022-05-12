
/*Retorna un booleano si la suma de la matriz es par.*/
let matriz = [
    [20, 24, 13],
    [14, 21, 43],
    [47, 17, 38]
];
console.log("-------Matriz de 3 x 3:---------");
console.table(matriz);

let sumaPares = (array) => {
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            suma += array[i][j];
        }
    }
    return suma % 2 === 0 ? true : false;
};
console.log("---¿La suma de todos los valores de la matriz es Par?:---");
sumaPares(matriz);
console.log(sumaPares(matriz));