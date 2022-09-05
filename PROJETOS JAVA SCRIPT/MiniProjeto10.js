//Criar função para mostrar os números primos(divisível por 1 ou ele mesmo)

exibirNumerosPrimos(17);

function exibirNumerosPrimos(limite){
    for(let numero = 2; numero <= limite; numero++){
        if (NumeroPrimo(numero)) console.log(numero);
    }
}

function NumeroPrimo(numero){
    for (let divisor = 2; divisor < numero; divisor++){
        if(numero % divisor === 0) {
            return false;
        }
    }
    return true
}
