var perfil1 = "admin";
var perfil2 = null;
var perfil3 = undefined;
console.log(perfil1 !== null && perfil1 !== void 0 ? perfil1 : 'Usuário comum');
console.log(perfil2 !== null && perfil2 !== void 0 ? perfil2 : 'Usuário comum');
console.log(perfil3 !== null && perfil3 !== void 0 ? perfil3 : 'Usuário comum');
// aqui o nullish coalescing vai verificar se perfil é null ou undefined, caso seja, ele retorna
// o valor a direita das (??): a string 'Usuário comum' caso não, ele retorna o valor padrão que
// nesse caso é a string "admin"
