const assert = require('assert')
const Hello = require('./../src/1.helloWorld/app.js')
const TypeAnnotation = require('../src/2.typeAnnotation/app.js')
const Tupla = require('../src/3.tuplas/tuple')
const aulaInterface = require('../src/5.interface/interface')


describe('Suite de testes Typescript', function () {
    const DEFAULT_CORRETO = ['Victor', 'Javascript', 27]

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

    it('Deve retornar um array com os tipos corretos', () => {
        const TUPLA = Tupla.exibeTupla(DEFAULT_CORRETO)
        const result = [typeof TUPLA[0], typeof TUPLA[1], typeof TUPLA[2]]
        const expected = ['string', 'string', 'number']
        assert.deepEqual(expected, result)
    })

    it('Deve retornar o tipo correto da sua posição', () => {
        const tipoCorreto = 'string'
        const result = Tupla.acessaIndex(DEFAULT_CORRETO, 1)
        assert.deepEqual(typeof result, tipoCorreto)
    })

    it('Deve testar o tipo do objetco criado com o recurso "interface" do Typescript', () => {
        const DEFAULT_INTERFACE = {
            firstName: 'Victor',
            lastName: 'Labussiere'
        }

        const Interface = new aulaInterface(DEFAULT_INTERFACE)
        const result = Interface.exibeObj()
        assert.ok(result.fullName === DEFAULT_INTERFACE.firstName + " " + DEFAULT_INTERFACE.lastName)
        assert.deepEqual(typeof result.fullName, 'string')
    })
})
