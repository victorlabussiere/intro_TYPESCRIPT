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
    // campo
    firstName: string
    lastName: string
    constructor(nome: string, sobrenome: string) {
        //construtor
        this.firstName = nome
        this.lastName = sobrenome
    }
    // metodos

    nomeCompleto(): string {
        return `${this.firstName} ${this.lastName}`
    }
}

module.exports = Pessoa