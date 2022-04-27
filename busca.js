var valores = [5,8,10,22,38, 45];

/*function busca(num){
    for (i=0; i<6; i++){
        if(num==valores[i]){
            return i;
        }
    }
    return -1;
}*/

function buscaBin(num){
    let inicio, fim;
    let meio;
    let passos = 0;

    inicio = 0;
    fim = 9;

    while(inicio<=fim){
        meio = parseInt((inicio+fim)/2);
        passos = passos+1;
        if(num == valores[meio])
        {
            console.log("Achei em " + passos + " passos")
            return meio;
        }
        else{
            if(num > valores[meio]){
                inicio = meio+1;
            }
            else{
                fim = meio-1;
            }
        }
    }
    console.log("Nao Achei em " +  passos + " passos!!!");
    return -1;  
}

//usando a nossa ferramenta de busca
console.log(buscaBin(10));
//console.log(passos);
console.log(buscaBin(50));
//console.log(passos);