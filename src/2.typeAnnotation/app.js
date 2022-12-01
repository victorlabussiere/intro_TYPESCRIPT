"use strict";
const multiplica = (n1, n2) => n1 * n2;
function show(nome, carro, animais) {
    let model_nome = nome;
    let model_animais = animais;
    let model_carro = carro;
    return {
        model_nome,
        model_animais,
        model_carro,
        multiplica
    };
}
module.exports = show;
