// Ejercicio 1
// Dada una matriz de N elementos en la que todos los elementos son iguales excepto uno,
// crea una función findUniq que retorne el elemento único.

//Comentario para mi Initial commit...

function findUniq(array) {
    const res = array.filter((element,index, array) => {
        let repeat = 0;
        for (let i = 0; i < array.length; i++) {
            if (element===array[i]) {
                repeat++;
            }  
        }
        if (repeat==1) return element
    });
    console.log(res);
    return(res);
}


/**
 * TEST Ejercicio 1
 */
findUniq(['12', 10, '12', 11, 1, 2, 2, 11, 10, '12']) // 1
findUniq(['Capitán América', 'Hulk', 'Deadpool', 'Capitán América', 'Hulk', 'Wonder Woman', 'Deadpool', 'Iron Man', 'Iron Man']) // 'Wonder Woman'
