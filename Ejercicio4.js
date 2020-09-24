function espar (par){
    if (par.some(i => i % 2 === 0)){
        return true;
}else{
        return false;
        }
}
var arr = [1,2,3,4,5,6];
var x = espar(arr);
console.log(x);
