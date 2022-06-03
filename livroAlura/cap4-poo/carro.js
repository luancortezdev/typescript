var Carro = /** @class */ (function () {
    function Carro(pneu, porta, marca, tetoSolar) {
        this.pneu = pneu;
        this.porta = porta;
        this.marca = marca;
        this.tetoSolar = tetoSolar;
    }
    return Carro;
}());
var fiatUno = new Carro(4, 4, 'fiat', false);
console.log(fiatUno);
