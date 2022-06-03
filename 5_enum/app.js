// Declarando um Enum
// em suma: o Enum só aceita números
// enum Carro {Motor = 1, Portas = 4, Pedais = 3}
// let numeroDeMotores = Carro.Motor
// let numeroDePedais = Carro.Pedais
// console.log(Carro)
// console.log(numeroDeMotores)
// console.log(numeroDePedais)
var Barco;
(function (Barco) {
    Barco[Barco["Motor"] = 2] = "Motor";
    Barco[Barco["Proa"] = 1] = "Proa";
    Barco[Barco["Popa"] = 1] = "Popa";
})(Barco || (Barco = {}));
var numeroDeMotores = Barco.Motor;
Barco.Motor = '2 motores';
// Motor é inauterável, só podemos acessar/resgatar esse valor, mas não alterar. Por isso do erro
console.log(Barco);
console.log(numeroDeMotores);
var Moto;
(function (Moto) {
    Moto[Moto["Motor"] = 1] = "Motor";
    Moto[Moto["Rodas"] = 2] = "Rodas";
    Moto[Moto["Retrovisor"] = 2] = "Retrovisor";
})(Moto || (Moto = {}));
var numeroDeRetrovisores = Moto.Retrovisor;
console.log(Moto);
console.log(numeroDeRetrovisores);
