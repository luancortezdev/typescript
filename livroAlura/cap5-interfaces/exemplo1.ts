interface Pessoa {
    nome: string;
    idade: number;
    email: string;
    telefone: number;
}

let pessoa: Pessoa;
let pessoa2: Pessoa

interface PessoaJuridica extends Pessoa {
    conta: number;
    cnpj: number;
    abrirConta(): boolean;
}

interface IPessoa {
    nome: string;
    idade: number;
    email: string;
    telefone?: number;
}


const example1 = 'string';
const example2 = Symbol();

interface MeuExemplo {
    [example1]: string;
    [example2]: boolean;
}