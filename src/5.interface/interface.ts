interface Nomes {
    firstName: string;
    lastName: string
}

interface NomeCompleto {
    firstName: string;
    lastName: string;
    fullName: string;
}

let pessoa: Nomes = {
    firstName: 'Victor',
    lastName: "Labussiere"
}

function exemploInterface(param: Nomes): NomeCompleto {
    return {
        ...param,
        fullName: `${param.firstName} ${param.lastName}`
    }
}

module.exports = exemploInterface