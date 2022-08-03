//estrutura não indexada que não aceita repetição

const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Palmeiras').add('Corinthians')
times.add('Galo')
times.add('Vasco')

console.log(times)
console.log(times.size)
console.log(times.has('Vasco'))
times.delete('Palmeiras')
console.log(times.has('Palmeiras'))

const nomes = ['Raquel', 'Lucas', 'Júlia', 'Lucas']
const nomeSet = new Set(nomes)
console.log(nomeSet)