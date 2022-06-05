class Conta {
    private numeroDaConta: number;
    titular: string;
    private saldo: number;

    constructor(titular: string, saldo: number) {
        this.numeroDaConta = Math.floor(Math.random() * 1000) + 1;
        this.titular = titular;
        this.saldo = saldo;
    }

    protected consultaSaldo(): string {
        return `O seu saldo atual é: ${this.saldo}`
    }

    protected adicionarSaldo(saldo: number): void { //void informa que a função não tem retorno
        this.saldo + saldo
    }

    protected sacarDoSaldo(valor: number): void {
        this.saldo -= valor
    }
}

const primeiraConta = new Conta(0, 'Cortez', 100)

class ContaPF extends Conta{
    cpf: number;

    constructor(cpf: number, numeroDaConta: number, titular: string, saldo: number) {
        super(numeroDaConta, titular, saldo)
        this.cpf = cpf
    }

}

class ContaPJ extends Conta{
    cnpj: number;

    constructor(cnpj: number, numeroDaConta: number, titular: string, saldo: number) {
        super(numeroDaConta, titular, saldo)
        this.cnpj = cnpj
    }

}

const pessoaFisica = new ContaPF(11300794496, 1, 'Luan', 200)
const pessoaJuridica = new ContaPJ(1130079449666, 2, 'Cortez Dev', 3546)

console.log(pessoaFisica)
console.log(pessoaJuridica)