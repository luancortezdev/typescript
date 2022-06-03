enum Carro {Mala = 1, Motor = 1, Pneus = 4}

let NumeroDePneus = Carro.Pneus

console.log(Carro)
console.log(NumeroDePneus)



function imprimirInformacoes(obj: {nome: string, idade: number}) {
    console.log(obj.nome, obj.idade)
}

let pessoa = {nome: 'Sião', idade: 15}

imprimirInformacoes(pessoa)