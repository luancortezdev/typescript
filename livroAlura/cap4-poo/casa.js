var Casa = /** @class */ (function () {
    function Casa(porta, quarto, laje, rua) {
        this.porta = porta;
        this.quarto = quarto;
        this.laje = laje;
        this.rua = rua;
    }
    return Casa;
}());
var cortezHouse = new Casa(5, 2, true, 'Manoel alguma coisa');
console.log(cortezHouse);
