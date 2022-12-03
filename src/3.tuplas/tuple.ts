// Uma tupla é um array de tipos primitivos fixos,
type pessoaDefault =    // forma de declarar mais de uma possível sequencia de tipos. '|' == 'ou'
    | [string, string, number]  // nome, sobrenome e idade
    | [string, string, string, number]  // nome, nome do meio, sobrenome e idade

class Tupla {
    tuplaArray: pessoaDefault
    constructor(array: pessoaDefault) {
        this.tuplaArray = array
    }
    // Uso simples de Tupla.
    static exibeTupla(pessoa: pessoaDefault) {
        return pessoa
    }

    static acessaIndex(array: pessoaDefault, index: number) {
        return array[index]
    }
}

module.exports = Tupla