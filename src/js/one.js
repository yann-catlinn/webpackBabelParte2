/* Debe contener una función que tome todos los elementos de un arreglo, multiplique por 4 cada uno de los elementos
 y luego filtre por los elementos que sean mayores a 8.
Retornando todos los elementos mayores o iguales a 8 luego de aplicar la función.Use el
siguiente arreglo de ejemplo: [1, 4, 23, -4, 'one', 6, 0, 1.1, 3.1415] */


/*Multiplicar cada elemento del array [1, 4, 23, -4, 'one', 6, 0, 1.1, 3.1415] por 4
Filtrar los resultados mayores a 8
Retornar los resultados mayores o iguales a 8
*/

var elements = [1, 4, 23, -4, 'one', 6, 0, 1.1, 3.1415];

export default function(resultOne) {
    var multiplied = elements.map(arrayElements => {
        return arrayElements * 4;
    })
    console.log(multiplied);

    var filterElements = multiplied.filter(rangeElements => {
        return rangeElements >= 8;
    });
    console.log(filterElements);
    return filterElements;
}