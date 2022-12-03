"use strict";
// Enums são uma forma de enumerar valores possíveis para um tipo.
// Estrutura de dados não ordenados => Mapeam dados para valores
// Objetos com chaves fixas em tempo de compilação para que o TS possa verificar se chave fornecidade realmente existe.
// Suporta númericos baseado em strings
var Idiomas;
(function (Idiomas) {
    Idiomas["Portugues"] = "Portugues";
    Idiomas["Espanhol"] = "Espanhol";
    Idiomas["Italiano"] = "Italiano";
    Idiomas["Japones"] = "Japones";
})(Idiomas || (Idiomas = {}));
console.log('enum idiomas', Idiomas);
class Enums {
}
module.exports = Enums;
