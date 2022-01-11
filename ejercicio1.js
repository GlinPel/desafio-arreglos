function siempreHambriento(arr) {
    // tu código aquí
    if(arr.includes("comida")){
        arr.forEach(e =>  e === "comida" && console.log("delicioso"));
    }else{
        console.log("Tengo hambre")
    }
    
}
   
siempreHambriento([3.14, "comida", "pastel", true, "comida"]);
// esto debería mostrar "delicioso, "delicioso"

siempreHambriento([4, 1, 5, 7, 2]);
// esto debería mostrar "Tengo hambre"