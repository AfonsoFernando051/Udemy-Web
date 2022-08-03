//operador rest(juntar)/spread(espalhar)
// usar rest como parêmetro de função

//usar spread com objeto
const funcionario = {nome: 'Nando', salario: 50000}
const clone = { ativo: true, ...funcionario}

console.log(clone)

//usar spread com array
const grupoA = ['João', 'Pedro', 'Glória']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela']
console.log(grupoFinal)
//dentro de um array, espalhamos elementos de outro array.


