const assert = require('assert')
const Hello = require('./../src/1.helloWorld/app.js')
const TypeAnnotation = require('../src/2.typeAnnotation/app.js')

describe('Suite de testes Typescript', function () {
    const nome = 'Victor'
    const animais = ['cabra', 'gato', 'cachorro']
    const carro = {
        modelo: 'Corola',
        ano: 2022,
        emDia: true
    }

    it('Deve retornar um Hello World', () => {
        const result = Hello
        assert.ok(result == 'Hello World, Victor!')
    })

    it('Deve retornar os tipos corretos', () => {
        const result = TypeAnnotation(nome, carro, animais)
        const multiplicar = result.multiplica
        assert.ok(multiplicar(3, 2) === 6 && typeof result === 'object')
    })
})
