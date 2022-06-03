var Carro;
(function (Carro) {
    Carro[Carro["Mala"] = 1] = "Mala";
    Carro[Carro["Motor"] = 1] = "Motor";
    Carro[Carro["Pneus"] = 4] = "Pneus";
})(Carro || (Carro = {}));
var NumeroDePneus = Carro.Pneus;
console.log(Carro);
console.log(NumeroDePneus);
function imprimirInformacoes(obj) {
    console.log(obj.nome, obj.idade);
}
var pessoa = { nome: 'Sião', idade: 15 };
imprimirInformacoes(pessoa);
