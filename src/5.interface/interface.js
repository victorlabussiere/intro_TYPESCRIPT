"use strict";
class Interface {
    constructor(pessoa) {
        this.Pessoa = {
            firstName: pessoa.firstName,
            lastName: pessoa.lastName,
            fullName: `${pessoa.firstName} ${pessoa.lastName}`
        };
    }
    exibeObj() {
        return this.Pessoa;
    }
}
module.exports = Interface;
