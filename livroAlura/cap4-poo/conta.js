var Conta = /** @class */ (function () {
    function Conta(numeroDaConta, titular, saldo) {
        this.numeroDaConta = numeroDaConta;
        this.titular = titular;
        this.saldo = saldo;
    }
    return Conta;
}());
var primeiraConta = new Conta(0, 'Cortez', 100);
console.log(primeiraConta);
