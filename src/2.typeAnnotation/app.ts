type Nome = string
type Carro = {
    modelo: string,
    ano: number,
    emDia: boolean
}
type Animais = string[]
const multiplica = (n1: number, n2: number) => n1 * n2

function show(nome: Nome, carro: Carro, animais: Animais) {

    let model_nome: Nome = nome
    let model_animais: Animais = animais
    let model_carro: Carro = carro

    return {
        model_nome,
        model_animais,
        model_carro,
        multiplica
    }
}
module.exports = show