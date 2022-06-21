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
    function Conta(titular, saldo) {
        this._numeroDaConta = Math.floor(Math.random() * 1000) + 1;
        this.titular = titular;
        this._saldo = saldo;
    }
    Object.defineProperty(Conta.prototype, "numeroDaConta", {
        get: function () {
            return this._numeroDaConta;
        },
        enumerable: false,
        configurable: true
    });
    Conta.prototype.consultaSaldo = function () {
        return this._saldo;
    };
    Conta.prototype.adicionarSaldo = function (saldo) {
        this._saldo + saldo;
    };
    Conta.prototype.sacarDoSaldo = function (valor) {
        this._saldo -= valor;
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
    ContaPF.prototype.sacar = function (valor) {
        if (this.consultaSaldo() > 0 && valor <= this.consultaSaldo()) {
            this.sacarDoSaldo(valor);
        }
    };
    ContaPF.prototype.consultar = function () {
        return "Saldo atual: ".concat(this.consultaSaldo());
    };
    return ContaPF;
}(Conta));
var ContaPJ = /** @class */ (function (_super) {
    __extends(ContaPJ, _super);
    function ContaPJ(cnpj, titular, saldo) {
        var _this = _super.call(this, titular, saldo) || this;
        _this.cnpj = cnpj;
        return _this;
    }
    ContaPJ.prototype.sacar = function (valor) {
        this.sacarDoSaldo(valor);
    };
    ContaPJ.prototype.consultar = function () {
        return "Saldo atual: ".concat(this.consultaSaldo());
    };
    return ContaPJ;
}(Conta));
var pessoaFisica = new ContaPF(11300794496, 1, 'Luan', 200);
var pessoaJuridica = new ContaPJ(46173051000116, 'Cortez Empreendimentos', 1000);
console.log(pessoaFisica);
console.log(pessoaJuridica);
