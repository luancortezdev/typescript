class Carro {
    pneu: number;
    porta: number;
    marca: string;
    tetoSolar: boolean;

    constructor(pneu: number, porta: number, marca: string, tetoSolar: boolean) {
        this.pneu = pneu;
        this.porta = porta;
        this.marca = marca;
        this.tetoSolar = tetoSolar;
    }

}

let fiatUno = new Carro(4, 4, 'fiat', false)

console.log(fiatUno)