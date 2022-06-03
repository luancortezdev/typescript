enum DiaDaSemana {
    Segunda = 1,
    Terca = 2,
    Quarta = 3,
    Quinta = 4,
    Sexta = 5,
    Sabado = 6,
    Domingo = 7
}

let dia = DiaDaSemana[2]
let diaNumero = DiaDaSemana[dia]
let diaString = DiaDaSemana["Segunda"]

console.log(dia)
console.log(diaNumero)
console.log(diaString)