// Podemos utilizá-lo em funções com exception

function verificandoTipo(x: string | number): boolean {
    if (typeof x === "string") {
        return true
    } else if (typeof x === "number") {
        return false;
    }
    return fail("Esse metodo nao aceita esse tipo de type!")
}
function fail(message: string): never {throw new Error (message)}

verificandoTipo("teste String")
verificandoTipo(10)
let ativo = true
verificandoTipo(ativo)
