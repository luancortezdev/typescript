enum Heterogeneous {
    Segunda = "Segunda-Feira",
    Terca = 2,
    Quarta,
    Quinta,
    Sexta,
    Sabado,
    Domingo = 7
}

console.log(Heterogeneous.Segunda)
console.log(Heterogeneous['Segunda'])

console.log(Heterogeneous['Terca'])
console.log(Heterogeneous[2])