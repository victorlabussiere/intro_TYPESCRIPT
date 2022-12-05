const assert = require('assert')
const Hello = require('./../src/1.helloWorld/app.js')
const TypeAnnotation = require('../src/2.typeAnnotation/app.js')
const Tupla = require('../src/3.tuplas/tuple')
const ExemploInterface = require('../src/5.interface/interface')
const ExemploClasses = require('../src/6.classes/classesTypescript')


describe('Suite de testes Typescript', function () {
    const PESSOA_DEFAULT = ['Victor', 'Javascript', 27]

    const NOME_DEFAULT = {
        firstName: 'Victor',
        lastName: 'Labussiere'
    }

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
        const TUPLA = Tupla.exibeTupla(PESSOA_DEFAULT)
        const result = [typeof TUPLA[0], typeof TUPLA[1], typeof TUPLA[2]]
        const expected = ['string', 'string', 'number']
        assert.deepEqual(expected, result)
    })

    it('Deve retornar o tipo correto da sua posição', () => {
        const tipoCorreto = 'string'
        const result = Tupla.acessaIndex(PESSOA_DEFAULT, 1)
        assert.deepEqual(typeof result, tipoCorreto)
    })

    it('Deve testar o tipo do objetco criado com o recurso "interface" do Typescript', () => {

        const Interface = ExemploInterface
        const result = Interface(NOME_DEFAULT)
        assert.ok(result.fullName === NOME_DEFAULT.firstName + " " + NOME_DEFAULT.lastName)
        assert.deepEqual(typeof result.fullName, 'string')
    })

    it('Deve retornar um nome e sobreonome', () => {
        const ClassTS = new ExemploClasses(NOME_DEFAULT.firstName, NOME_DEFAULT.lastName)
        const result = ClassTS.nomeCompleto()
        assert.ok(result === `${NOME_DEFAULT.firstName} ${NOME_DEFAULT.lastName}`)
    })
})
