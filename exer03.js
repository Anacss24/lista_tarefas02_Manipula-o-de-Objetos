/*  Filtrando Propriedades de Objetos
○ Objetivo: Dado um objeto produto com várias propriedades, crie uma
função que retorna um novo objeto contendo apenas as propriedades cujo
valor seja maior que um valor específico. Use for in para filtrar as
propriedades.
*/
const compras = {
   leite: 5.00,
   café: 15.00,
   tapioca: 12.00,
   laranja: 5.00
}

let produtosMais = 0

function valorEspecifico (objeto) {
    for(key in objeto) {
      if (objeto[key] > 10){
        produtosMais++
        console.log(`${key} foi mais de R$ 10,00`)
      }
    }

    console.log("Total de produtos de mais de R$ 10,00: " , produtosMais)

}

valorEspecifico(compras)

