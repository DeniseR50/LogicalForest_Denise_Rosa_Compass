//FizzBuzz é uma função que compara alguns valores (números 3 e 5) e tem um retorno baseado no valor de entrada()
//Divisível por 3 = Fizz
//Divisível por 5 = Buzz
//Divisível por 3 e 5 = FizzBuzz

const resultado = fizzBuzz(30);
console.log(resultado);

function fizzBuzz(entrada){
    if ( typeof entrada!== 'number')
        return 'Não é um número';
    if (entrada % 3 === 0)
        return 'Fizzi';
    if (entrada % 5 === 0)
        return 'Buzz';
    if (entrada % 3 === 0 && entrada % 5 === 0)
    return entrada;

}


