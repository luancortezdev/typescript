var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Conta = /** @class */ (function () {
    function Conta(numeroDaConta, titular, saldo) {
        this.numeroDaConta = numeroDaConta;
        this.titular = titular;
        this.saldo = saldo;
    }
    Conta.prototype.consultaSaldo = function () {
        return "O seu saldo atual \u00E9: ".concat(this.saldo);
    };
    Conta.prototype.adicionarSaldo = function (saldo) {
        this.saldo + saldo;
    };
    Conta.prototype.sacarDoSaldo = function (valor) {
        this.saldo -= valor;
    };
    return Conta;
}());
var primeiraConta = new Conta(0, 'Cortez', 100);
var ContaPF = /** @class */ (function (_super) {
    __extends(ContaPF, _super);
    function ContaPF(cpf, numeroDaConta, titular, saldo) {
        var _this = _super.call(this, numeroDaConta, titular, saldo) || this;
        _this.cpf = cpf;
        return _this;
    }
    return ContaPF;
}(Conta));
var ContaPJ = /** @class */ (function (_super) {
    __extends(ContaPJ, _super);
    function ContaPJ(cnpj, numeroDaConta, titular, saldo) {
        var _this = _super.call(this, numeroDaConta, titular, saldo) || this;
        _this.cnpj = cnpj;
        return _this;
    }
    return ContaPJ;
}(Conta));
var pessoaFisica = new ContaPF(11300794496, 1, 'Luan', 200);
var pessoaJuridica = new ContaPJ(1130079449666, 2, 'Cortez Dev', 3546);
console.log(pessoaFisica);
console.log(pessoaJuridica);
