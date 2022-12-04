interface Pessoa {
    firstName: string;
    lastName: string
}

interface IntExample {
    firstName: string;
    lastName: string;
    fullName: string;
}

class Interface {
    Pessoa: IntExample;
    constructor(pessoa: Pessoa) {
        this.Pessoa = {
            firstName: pessoa.firstName,
            lastName: pessoa.lastName,
            fullName: `${pessoa.firstName} ${pessoa.lastName}`
        }
    }

    exibeObj() {
        return this.Pessoa
    }
}

module.exports = Interface