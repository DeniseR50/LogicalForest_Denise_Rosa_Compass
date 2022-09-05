//Método para ler propriedades objeto
//exibir somente as propriedades do tipo string que estão nesse objeto

const musica = {
    titulo: 'The Division Bell',
    ano: 1994,
    gravadora: 'EMI',
    banda: 'Pink Floyd'
    }
    exibirPropriedades(musica);
    function exibirPropriedades(obj) {
        for (prop in obj)
         if(typeof obj[prop] === 'string')
            console.log(prop,obj)  
    }