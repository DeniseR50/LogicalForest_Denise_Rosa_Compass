//Montador de endereço - Objeto Endereço

//Criar um objeto endereço que contem:
//rua, cidade, exibirEndereço(endereço)

let endereco = {
    rua: 'Pequi',
    cidade: 'Assis',
    cep: '19820000'
};

function exibirEndereco(endereco){
    for (let chave in endereco)
        console.log(chave,endereco[chave]);
}

exibirEndereco(endereco);