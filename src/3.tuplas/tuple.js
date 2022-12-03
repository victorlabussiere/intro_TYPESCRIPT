"use strict";
class Tupla {
    constructor(array) {
        this.tuplaArray = array;
    }
    // Uso simples de Tupla.
    static exibeTupla(pessoa) {
        return pessoa;
    }
    static acessaIndex(array, index) {
        return array[index];
    }
}
module.exports = Tupla;
