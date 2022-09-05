//Nota Escola, obtendo a média a partir de uma array
//0 a 59 F
//60 a 69 D
//70 a 79 C
//80 a 89 D
//90 a 100 A
const array = [70,70,80];
// 75

console.log(mediaDoAluno(array));

function mediaDoAluno(notas) {
    const media = calcularMedia(notas);

    if (media <59) return 'F';
    if (media <69) return 'D';
    if (media <79) return 'C';
    if (media <89) return 'B';
    return 'A'
}

function calcularMedia(array){
    let soma = 0;
    for (let valor of array) {

    }
    return soma/(array.lenght);
}
