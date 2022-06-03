var Heterogeneous;
(function (Heterogeneous) {
    Heterogeneous["Segunda"] = "Segunda-Feira";
    Heterogeneous[Heterogeneous["Terca"] = 2] = "Terca";
    Heterogeneous[Heterogeneous["Quarta"] = 3] = "Quarta";
    Heterogeneous[Heterogeneous["Quinta"] = 4] = "Quinta";
    Heterogeneous[Heterogeneous["Sexta"] = 5] = "Sexta";
    Heterogeneous[Heterogeneous["Sabado"] = 6] = "Sabado";
    Heterogeneous[Heterogeneous["Domingo"] = 7] = "Domingo";
})(Heterogeneous || (Heterogeneous = {}));
console.log(Heterogeneous.Segunda);
console.log(Heterogeneous['Segunda']);
console.log(Heterogeneous['Terca']);
console.log(Heterogeneous[2]);
