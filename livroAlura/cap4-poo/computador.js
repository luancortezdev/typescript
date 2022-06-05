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
var Computador = /** @class */ (function () {
    function Computador(marcaMonitor, tamanhoMonitor, gabineteCor, precoDeVenda) {
        this.marcaMonitor = marcaMonitor;
        this.tamanhoMonitor = tamanhoMonitor;
        this.gabineteCor = gabineteCor;
        this.precoDeVenda = precoDeVenda;
    }
    return Computador;
}());
var computadorDeLuan = new Computador('LG', 27, 'preto', 5000);
console.log(computadorDeLuan);
var ComputadorDeTonelada = /** @class */ (function (_super) {
    __extends(ComputadorDeTonelada, _super);
    function ComputadorDeTonelada(situacaoDaTela, marcaMonitor, tamanhoMonitor, gabineteCor, precoDeVenda) {
        var _this = _super.call(this, marcaMonitor, tamanhoMonitor, gabineteCor, precoDeVenda) || this;
        _this.situacaoDaTela = situacaoDaTela;
        return _this;
    }
    return ComputadorDeTonelada;
}(Computador));
var pcTonelada = new ComputadorDeTonelada('quebrada', 'LG', 25, 'Preto Fosco', 2000);
console.log(pcTonelada);
