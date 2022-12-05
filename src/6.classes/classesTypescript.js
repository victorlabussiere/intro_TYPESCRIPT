"use strict";
/*
    Classes em POO servem para:
    - Organizar e pensar sobre o código
    - Unidade primária de encapsulamento
    - Suporte a:
        - Modificadores;
        - Inicializadores;
        - Polimorfismo;
        - Decorators e Interfaces.

    Definindo Classes:
    - Fields;
    - Methods;
    - Constructors;
    - Nested Class & Interfaces, -> Quando uma classe pode conter outra
*/
class Pessoa {
    constructor(nome, sobrenome) {
        //construtor
        this.firstName = nome;
        this.lastName = sobrenome;
    }
    // metodos
    nomeCompleto() {
        return `${this.firstName} ${this.lastName}`;
    }
}
module.exports = Pessoa;
