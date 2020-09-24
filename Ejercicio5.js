    function aprobo (par){
        if (par.every (i => i >= 4)){
            return "Aprobó";
        }else{
            return "No aprobó";
        }
    };
    var arr = [4,5,6,7,8,9];
    var arr2 = [1,2,3];
    var arr3 = [4,5,6,1];

    console.log(aprobo(arr));
    console.log(aprobo(arr2));
    console.log(aprobo(arr3));
