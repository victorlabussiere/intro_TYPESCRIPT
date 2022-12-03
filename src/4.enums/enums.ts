// Enums são uma forma de enumerar valores possíveis para um tipo.
// Estrutura de dados não ordenados => Mapeam dados para valores
// Objetos com chaves fixas em tempo de compilação para que o TS possa verificar se chave fornecidade realmente existe.
// Suporta númericos baseado em strings
enum Idiomas {
    Portugues = 'Portugues',
    Espanhol = 'Espanhol',
    Italiano = 'Italiano',
    Japones = 'Japones'
}
console.log('enum idiomas', Idiomas);

class Enums {
}

module.exports = Enums