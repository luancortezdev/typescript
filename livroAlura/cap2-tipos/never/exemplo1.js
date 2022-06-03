// Podemos utilizá-lo em funções com exception
function verificandoTipo(x) {
    if (typeof x === "string") {
        return true;
    }
    else if (typeof x === "number") {
        return false;
    }
    return fail("Esse metodo nao aceita esse tipo de type!");
}
function fail(message) { throw new Error(message); }
verificandoTipo("teste String");
verificandoTipo(10);
var ativo = true;
verificandoTipo(ativo);
