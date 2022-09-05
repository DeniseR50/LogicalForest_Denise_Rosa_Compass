//Medidor de velocidade
//Velocidade máxima de 80
// A cada 5km acima do limite ganha 1 ponto
//Math.Floor() arrendonda o valor de 1.3 para 1 - testado no console
//caso ponto maior que 09 => 'Carteira Suspendida'
verificarVelocidade(130);

function verificarVelocidade(velocidade) {
    const velocidadeMaxima = 80;
    const KmPorPonto = 5;
        if ( velocidade <= velocidadeMaxima)
        console.log('ok');
        else {
            const pontos = Math.floor (((velocidade - velocidadeMaxima / KmPorPonto)));
            if(pontos >= 10)
                console.log('Carteira Suspensa');
            else
                console.log('Pontos, pontos');
        }
}

