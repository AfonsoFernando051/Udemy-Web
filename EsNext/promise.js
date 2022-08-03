//O promisse serve para processar algo de forma assíncrona;
//Como numa callback, que determina o sucesso de uma função quando é chamada.
//A promisse aceita somente um parâmetro

function falarDepoisDe(segundos, frase) {
     return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(frase)
        }, segundos * 1000)
     })
}

falarDepoisDe(3, 'Que legal!')
    .then((frase) => {
         return frase.concat('?!?')
        })
        .then(outraFrase => console.log(outraFrase))
        .catch(e => console.log(e))