/* Crie um array de objetos pedidos, onde cada pedido tem
cliente, produto, e quantidade. Use forEach para criar um objeto que
agrupa a quantidade total de produtos por cliente.*/

let pedidos = [
    {
        cliente: 'Gabriel',
        produto: 'Televisão',
        quantidade: 5 
    },

    {
        cliente: 'Gustavo',
        produto: 'Celular',
        quantidade: 2 
    },
    {
        cliente: 'Gustavo',
        produto: 'Capa de Celular',
        quantidade: 10 
    },
]

let totalCliente = {}

pedidos.forEach(pedido => {
  if (totalCliente[pedido.cliente]) {
    totalCliente[pedido.cliente] += pedido.quantidade
  } else {
    totalCliente[pedido.cliente] = pedido.quantidade
  }

})

console.log(totalCliente)