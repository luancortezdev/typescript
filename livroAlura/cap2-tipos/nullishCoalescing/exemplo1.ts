let perfil1 = "admin"
let perfil2 = null
let perfil3 = undefined
console.log(perfil1 ?? 'Usuário comum')
console.log(perfil2 ?? 'Usuário comum')
console.log(perfil3 ?? 'Usuário comum')
// aqui o nullish coalescing vai verificar se perfil é null ou undefined, caso seja, ele retorna
// o valor a direita das (??): a string 'Usuário comum' caso não, ele retorna o valor padrão que
// nesse caso é a string "admin"