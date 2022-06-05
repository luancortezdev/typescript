class Computador{
    marcaMonitor: string;
    tamanhoMonitor: number;
    gabineteCor: string;
    protected precoDeVenda: number

    constructor(marcaMonitor: string, tamanhoMonitor: number, gabineteCor:string, precoDeVenda: number) {
        this.marcaMonitor = marcaMonitor
        this.tamanhoMonitor = tamanhoMonitor
        this.gabineteCor = gabineteCor
        this.precoDeVenda = precoDeVenda
    }

}

let computadorDeLuan = new Computador('LG', 27, 'preto', 5000)
console.log(computadorDeLuan)

class ComputadorDeTonelada extends Computador {
    situacaoDaTela: string

    constructor(situacaoDaTela: string, marcaMonitor: string, tamanhoMonitor: number, gabineteCor: string, precoDeVenda: number) {
        super(marcaMonitor, tamanhoMonitor, gabineteCor, precoDeVenda)
        this.situacaoDaTela = situacaoDaTela
    }

}

const pcTonelada = new ComputadorDeTonelada('quebrada', 'LG', 25, 'Preto Fosco', 2000)

console.log(pcTonelada)