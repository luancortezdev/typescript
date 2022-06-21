abstract class Conta {
    private readonly _numeroDaConta: number;
    titular: string;
    private _saldo: number;

    get numeroDaConta(): number {
        return this._numeroDaConta
    }

    constructor(titular: string, saldo: number) {
        this._numeroDaConta = Math.floor(Math.random() * 1000) + 1;
        this.titular = titular;
        this._saldo = saldo;
    }

    protected consultaSaldo(): number {
        return this._saldo
    }

    protected adicionarSaldo(saldo: number): void { //void informa que a função não tem retorno
        this._saldo + saldo
    }

    protected sacarDoSaldo(valor: number): void {
        this._saldo -= valor
    }
}

const primeiraConta = new Conta(0, 'Cortez', 100)

class ContaPF extends Conta{
    cpf: number;

    sacar(valor: number) {
        if(this.consultaSaldo() > 0 && valor <= this.consultaSaldo()) {
            this.sacarDoSaldo(valor)
        }
    }

    consultar(): string {
        return `Saldo atual: ${this.consultaSaldo()}`
    }

    constructor(cpf: number, titular: string, saldo: number) {
        super(titular, saldo)
        this.cpf = cpf
    }

}

class ContaPJ extends Conta{
    cnpj: number;

    sacar(valor: number) {
        this.sacarDoSaldo(valor)
    }

    consultar(): string {
        return `Saldo atual: ${this.consultaSaldo()}`
    }

    constructor(cnpj: number, titular: string, saldo: number) {
        super(titular, saldo)
        this.cnpj = cnpj
    }

}

const pessoaFisica = new ContaPF(11300794496, 'Luan', 200)
const pessoaJuridica = new ContaPJ(46173051000116, 'Cortez Empreendimentos', 1000)

console.log(pessoaFisica)
console.log(pessoaJuridica)