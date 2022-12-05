"use strict";
// Enums são uma forma de enumerar valores possíveis para um tipo.
// Estrutura de dados não ordenados => Mapeam dados para valores
// Objetos com chaves fixas em tempo de compilação para que o TS possa verificar se chave fornecidade realmente existe.
// Suporta númericos baseado em strings
var Idiomas;
(function (Idiomas) {
    Idiomas[Idiomas["Portugues"] = 0] = "Portugues";
    Idiomas[Idiomas["Espanhol"] = 1] = "Espanhol";
    Idiomas[Idiomas["Italiano"] = 2] = "Italiano";
    Idiomas[Idiomas["Japones"] = 3] = "Japones";
})(Idiomas || (Idiomas = {}));
