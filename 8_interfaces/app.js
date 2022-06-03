function imprimirDados(obj) {
    console.log("Nome: ".concat(obj.nome, ", idade: ").concat(obj.idade, " anos."));
}
var pessoa1 = { nome: 'Cortez', idade: 27 };
var pessoa2 = { nome: 'Luan' };
imprimirDados(pessoa1);
imprimirDados(pessoa2); // Vai dar um erro porque não declarei a outra propriedade do objeto(idade)
function imprimirAlunos(obj) {
    console.log("O aluno ".concat(obj.nome, " do ").concat(obj.ano, "\u00BA ano. tem a situa\u00E7\u00E3o de cadastro: ").concat(obj.cadastrado));
}
var alunoA = { nome: 'Cortez', ano: 3, cadastrado: true };
var alunoB = { nome: 'Sião', ano: 1, cadastrado: false };
var alunoC = { nome: 'Tonelada', ano: 2 };
imprimirAlunos(alunoA);
imprimirAlunos(alunoB);
imprimirAlunos(alunoC);
