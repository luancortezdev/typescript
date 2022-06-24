interface Array<T> {
    includes(searchElement: T, fromIndex?: number): boolean;
}

// nesse exemplo T é uma string
const nomes: Array<string> = ['pessoa1', 'pessoa2', 'pessoa3']

// nesse exemplo T é um number
const dias: Array<number> = [5, 25, 28]