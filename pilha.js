var elementos=[];
var topo = -1;
const MAX = 10;

function push(num){
    if(topo < MAX){
        topo = topo+1;
        elementos[topo] = num;
    }else{
        console.log("Pilha esta cheia");
    }
}

function estaVazia(){
    return topo == -1;
}

function pop(){
    if(topo != -1){
        let num = elementos[topo];
        topo = topo -1;
        return num;
    }
    else{ 
        console.log("Pilha Esta Vazia!");
    }
}

//--Parte do Código Que Usa A Pilha //
push(10);
push(20);
push(30);

console.log(elementos);

console.log(pop());
console.log(pop());