function betterThanAverage(arr) {
    var sum = 0;
    // calcula el promedio
    arr.forEach( e => sum = sum + e);
    sum = sum/arr.length;
    var count = 0
    // cuenmta cuánmtas variables son mayores que el promedio
    arr.forEach( e => e > sum && count++ );
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // esperamos 4 de vuelta