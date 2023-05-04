// Ejercicio 2
// Dada una matriz de N elementos repetidos,
// crea una función numbersTop para obtener los tres elementos más repetidos ordenados de forma descendente por número de repeticiones.

function numbersTop(array) {
    let newArraySorted = array.sort();
    let uniqArray= [];
    let numRepeat = [];
    let cont = 0;
    let num1 = 0, num2 = 0, num3 = 0;
    for (let i = 0; i < newArraySorted.length; i++) {
        if (array[i]===array[i+1]) {
            cont ++;
        }else{
            uniqArray.push(array[i]);
            numRepeat.push(cont+1);
            cont=0;
        }
    }
    let resNumRepeatSorted = [...numRepeat];
    resNumRepeatSorted.sort();
    let resDescendNumRepeatSorted = resNumRepeatSorted.reverse();
    for (let i = 0; i < numRepeat.length; i++) {
        if (resDescendNumRepeatSorted[0] == numRepeat[i]) num1 = uniqArray[i];
        if (resDescendNumRepeatSorted[1] === numRepeat[i]) num2 = uniqArray[i];
        if (resDescendNumRepeatSorted[2] === numRepeat[i]) num3 = uniqArray[i];  
    }
    console.log([num1,num2,num3]);
    return [num1,num2,num3];
}

/**
 * TEST Ejercicio 2
 */
numbersTop([3, 3, 1, 4, 1, 3, 1, 1, 2, 2, 2, 3, 1, 3, 4, 1]) // [ 1, 3, 2 ]
numbersTop(['a', 3, 2, 'a', 2, 3, 'a', 3, 4, 'a', 'a', 1, 'a', 2, 'a', 3]) // [ 'a', 3, 2 ]
