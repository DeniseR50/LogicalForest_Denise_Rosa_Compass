// Encontre a igualdade - Igualdade de Objeto

function Endereço(rua,cidade,cep) {
    this.rua = rua, 
    this.cidade = cidade,
    this.cep = cep
}

const endereco1 = new Endereço('a','b','c');
const endereco2 = new Endereço('a','b','c');
const endereco3 = endereco1;

function saoIguais(endereco1,endereco2) {
    //comparar se as propriedades são iguais
    return endereco1.rua === endereco2.rua &&
        endereco1.cidade === endereco2.cidade &&
            endereco1.cep == endereco2.cep
    }

    console.log(saoIguais(endereco1,endereco2));

    function temEnderecoMemoriaIguais(endereco1,endereco2){
        // comparando se a referência do objeto aponta para o mesmo local na memória
        return endereco1 === endereco3;
    }

    console.log(temEnderecoMemoriaIguais(endereco1,endereco2));