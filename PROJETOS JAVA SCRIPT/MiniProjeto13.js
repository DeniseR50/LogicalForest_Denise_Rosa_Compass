//Objeto Postagem de Blog
//Criar um objeto de postagem de blog que vai conter propriedades postagem
/*
//título, mensagem, autor, visualizações, comentários(autor, mensagem), estaAoVivo
*/

let postagem = {
    titulo: 'Centelha Divina',
    mensagem: 'autoconhecimento',
    autor: 'May Andrade',
    visualizacoes: 20,
    comentarios : [
        { autor: 'a',mensagem: 'b'},
        { autor: 'a', mensagem: 'b'}
    ],
    estaAoVivo : true

}

console.log(postagem);
