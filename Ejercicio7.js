function hayAlgunNegativo (par){
    if (par.some(i => i<0)){
        return "Hay un número negativo";
    }else{
        return "No hay ningún número negativo";
    }
}

var arr = [1,2,3];
var arr1 = [-1,-2,-3];
var arr2 = [1,2,-4];

console.log(hayAlgunNegativo(arr));
console.log(hayAlgunNegativo(arr1));
console.log(hayAlgunNegativo(arr2));