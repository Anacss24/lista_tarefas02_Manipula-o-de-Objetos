/* Verificando Propriedades
○ Objetivo: Crie um objeto livro com propriedades titulo, autor,
anoPublicacao e genero. Verifique se a propriedade editora existe no
objeto usando for in. Se não existir, adicione essa propriedade ao objeto.

*/

const livro = {
    titulo: '1984',
    autor: ' George Orwell',
    anoPublicacao: 1949 ,
    genero: 'Ficção Científica'
}

let propriedadeProcurada = "editora";
let valorPropriedade = 'Secker and Warburg';


for (key in livro){
    if (key === propriedadeProcurada){
        console.log('A propriedade editora existe')
    } else {
        livro[propriedadeProcurada] = valorPropriedade;
    }
} 

for (key in livro) {
    console.log(`${key}: ${livro[key]}`)
}
