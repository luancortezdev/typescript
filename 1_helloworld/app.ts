function helloWorld(nome: string) { // Tipando o nome com string, o código não irá aceitar outro tipo de dado
    return `Hello World ${nome}`
}

let nome = 'Cortez'

console.log(helloWorld(nome))
