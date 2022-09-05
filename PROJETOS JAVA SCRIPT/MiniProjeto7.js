//Criar função de soma que retorna a
//Soma de todos os múltiplos de 3 e 5

//3: são 3,6,9
//5: são 5,10
//Somando todos os múltiplos temos 33

//Somando os multiplos
//Armazenar os multiplos de 3
//Armazenar os multiplos de 5
//Somar os dois multiplos


somar(10);
    function somar(limite){
        let multiplosDe3 = 0;
        let multiplosDe5 = 0;
        for (i =0;i <= limite;i++){
            if(i % 3 ===0)
            multiplosDe3 +=i;
            if(i % 5 === 0)
            multiplosDe5 += i;

    }
    console.log(multiplosDe3 + multiplosDe5);
    }