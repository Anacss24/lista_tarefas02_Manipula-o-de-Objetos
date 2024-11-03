/* Crie um array de objetos filmes, onde cada filme tem titulo,
diretor, e anoLancamento. Use forEach para criar um novo array
contendo apenas os títulos dos filmes.
*/

let filmes = [
    {
        titulo: "O Senhor dos Anéis: A Sociedade do Anel",
        diretor: "Peter Jackson",
        anoLancamento: 2001
    },
    {
        titulo: "Matrix",
        diretor: "Lana Wachowski, Lilly Wachowski",
        anoLancamento: 1999
    },
    {
        titulo: "Inception",
        diretor: "Christopher Nolan",
        anoLancamento: 2010
    }
]
let titulos = []

filmes.forEach(filme => {
    titulos.push(filme.titulo)

})

console.log(titulos)