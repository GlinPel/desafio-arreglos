function highPass(arr, cutoff) {
    var filteredArr = [];
    // tu código aquí
    arr.forEach(e =>  e > cutoff && filteredArr.push(e));
    return filteredArr;
}

var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // esperamos de vuelta [6, 8, 10, 9]