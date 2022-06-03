var DiaDaSemana;
(function (DiaDaSemana) {
    DiaDaSemana[DiaDaSemana["Segunda"] = 1] = "Segunda";
    DiaDaSemana[DiaDaSemana["Terca"] = 2] = "Terca";
    DiaDaSemana[DiaDaSemana["Quarta"] = 3] = "Quarta";
    DiaDaSemana[DiaDaSemana["Quinta"] = 4] = "Quinta";
    DiaDaSemana[DiaDaSemana["Sexta"] = 5] = "Sexta";
    DiaDaSemana[DiaDaSemana["Sabado"] = 6] = "Sabado";
    DiaDaSemana[DiaDaSemana["Domingo"] = 7] = "Domingo";
})(DiaDaSemana || (DiaDaSemana = {}));
var dia = DiaDaSemana[2];
var diaNumero = DiaDaSemana[dia];
var diaString = DiaDaSemana["Segunda"];
console.log(dia);
console.log(diaNumero);
console.log(diaString);
