var Carro;
(function (Carro) {
    Carro[Carro["Mala"] = 1] = "Mala";
    Carro[Carro["Motor"] = 1] = "Motor";
    Carro[Carro["Pneus"] = 4] = "Pneus";
})(Carro || (Carro = {}));
var NumeroDePneus = Carro.Pneus;
console.log(Carro);
console.log(NumeroDePneus);
