//Object.entries == chave e valor de um objeto;
//Object.values ==  valores de um objeto;

const obj = {nome : 'Fernando'}

console.log(Object.values(obj))
console.log(Object.entries(obj))

//Melhorias na Notação Literal
const nome = 'Fernando'
const pessoa = {
    nome,
    ola(nome){

    return `Olá ${nome}`

    } // pode-se criar funções desta maneira
}

console.log(pessoa.ola('Ana'))

//Classe será internamente convertida para uma função
class Animal {}
class Cachorro extends Animal {
    latir(){
        return 'Au Au'
    }
} // o extends é usado nas classes para haver herança

console.log( new Cachorro().latir())
