function fibonacciArray(n) {
    // [0, 1] son los valores inciales del arreglos para calcular el resto
    var fibArr = [0, 1];
    // tu código aquí
    for (let i = 1; i <= (n-2); i++) {
        fibArr.push(fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2]);
    }
    return fibArr;
}
   
var result = fibonacciArray(10);
console.log(result); // esperamos de vuelta[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]