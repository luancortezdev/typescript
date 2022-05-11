// Declarando um Enum
// em suma: o Enum só aceita números


// enum Carro {Motor = 1, Portas = 4, Pedais = 3}
// let numeroDeMotores = Carro.Motor

// let numeroDePedais = Carro.Pedais

// console.log(Carro)
// console.log(numeroDeMotores)

// console.log(numeroDePedais)

enum Barco { Motor = 2, Proa = 1, Popa = 1 }

let numeroDeMotores = Barco.Motor

Barco.Motor = '2 motores'
// Motor é inauterável, só podemos acessar/resgatar esse valor, mas não alterar. Por isso do erro

console.log(Barco)
console.log(numeroDeMotores)