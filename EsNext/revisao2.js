const soma = (a,b) => a + b //return é implicitamente chamdo quando não há escopo da funçaõ
//função arrow sempre é uma função anônima, não se atribui um nome a ela
const soma1 = (a,b) => {return a + b} //return é implicitamente chamdo quando não há escopo da funçaõ

console.log(soma(2,3))
console.log(soma1(2,3))

const lexico1 = () => console.log(this === exports)
// o this de uma arrow function está associado ao local em que a mesma foi escrita
lexico1()

const lexico2 = lexico1.bind({})
lexico2()

function log(texto = 'Node') {
    console.log(texto)
}
log()