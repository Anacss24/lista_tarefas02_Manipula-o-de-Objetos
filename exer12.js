/*  Objetivo: Crie um array de objetos estoque, onde cada objeto tem
produto, quantidade e minimo. Use forEach para atualizar a quantidade
dos produtos que estão abaixo do mínimo, duplicando suas quantidades.*/

let estoque = [
    {
        produto: 'Caneta',
        quantidade: 3,
        minimo: 5
    },

    {
        produto: 'Borracha',
        quantidade: 2,
        minimo: 3
    },

]

estoque.forEach(produto => {
    if (produto.quantidade < produto.minimo){
        produto.quantidade *= 2 
    }
})

console.log(estoque)