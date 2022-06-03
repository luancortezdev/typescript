class Casa {
    porta: number;
    quarto: number;
    laje: boolean;
    rua: string;

    constructor(porta: number, quarto: number, laje: boolean, rua: string,) {
        this.porta = porta
        this.quarto = quarto
        this.laje = laje
        this.rua = rua
    }

}

let cortezHouse = new Casa(5, 2, true, 'Manoel alguma coisa')

console.log(cortezHouse)