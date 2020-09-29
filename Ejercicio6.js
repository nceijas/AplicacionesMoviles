var arr = [[4,5,6,7,8,9],[1,2,3],[4,5,6,1]];

function aprobo (par){
    if (par.some (i => i < 4)){
        return "No aprobó";
    }else{
        return "Aprobó";
    }
};

arr.forEach(i => {console.log(aprobo(i));
    
});

//En este ejercicio no logro encontrar la falla en la lógica.
// En el 3er juego de datos el resultado del forEach es "undefined".