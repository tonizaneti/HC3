    function sumNumber(){
        let result = 1 + 1;
        if(result===2){

            successCallback();

        }else{
            errorCallback();

        }
    }

    function    successCallback(){
        console.log('Sim! É o número 2');

    }

    function errorCallback(){
        console.log('Ops! Houve um erro!');
    }

    sumNumber();


    //reescrevendo nossa função no formato de um promise
    let p = new Promise(
        // recebe uma callback, a qual é uma função com 2 paramentros, (uma do tipo resolve, e outra do tipo reject(erro))
        (resolve, reject) =>{
            let a = 1+1;
            if(a===2){
                resolve('Success')

            }else{
                reject('Error')

            }
        }
    );

    p
    .then( (/*message*/)=>{ console.log('Sim é o Número 2')} )
    .catch(()=>console.log('Ops! Houve um erro!'));


