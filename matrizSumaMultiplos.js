/*Matriz de 3 x 3*/
const matriz = [
    [30, 19, 38],
    [45, 11, 26],
    [7, 34, 20]
]
console.table(matriz);

/*Segun la matriz dada,
Crear una función que retorne la suma de 
todos los numeros dentro de la matriz que 
sean multiplos de 3*/

let multiplosDeTres = (array) => {
    let sumaMultiplosTres = 0
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array[i].length; j++){
            if(array[i][j] % 3 === 0){            
                sumaMultiplosTres += array[i][j]
            } 
        }
    }
    return sumaMultiplosTres
};
console.log('-----Suma de todos los Multiplos de 3:------');
multiplosDeTres(matriz)
console.log(multiplosDeTres(matriz));