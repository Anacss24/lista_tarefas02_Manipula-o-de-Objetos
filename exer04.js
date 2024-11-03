/* Crie um array de objetos pessoas, onde cada objeto representa
uma pessoa com nome, idade, e cidade. Use for of para exibir as
informações de cada pessoa no console.

*/

let pessoas = [
   {
    nome: 'Ana',
    idade: 26,
    cidade: 'São Paulo'

   },
   
   {
    nome: 'Pedro',
    idade: 20,
    cidade: 'Rio de Janeiro'

   }


]

for( let key of pessoas){
   console.log(key)
}

