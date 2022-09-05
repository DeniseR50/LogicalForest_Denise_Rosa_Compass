import assert from 'assert'
import chai from 'chai'
import Calculadora from '../src/Calculadora.js'

const expect = chai.expect

describe('Testes de soma', ()=>{
    it('Deve somar 1 e 3.5 resultando em 4.5', () => {
        let resultado = Calculadora.soma(1, 3.5)
        expect(resultado).to.be.eq(4.5)
        
    })
    it('Deve somar -4 e 8 resultando em 4', () => {
        let resultado = Calculadora.soma(-4, 8)
        expect(resultado).to.be.eq(4)
        
    })
})

describe('Testes de subração', ()=>{
    it('Deve subtrair 10 e -5 resultando em 15', () => {
        let resultado = Calculadora.sub(10, -5)
        expect(resultado).to.be.eq(15)
        
    })
    it('Deve subtrair -10 e 5 resultando em -15', () => {
        let resultado = Calculadora.sub(-10, 5)
        expect(resultado).to.be.eq(-15)
        
    })
})

describe('Testes de multiplicação', ()=>{
    it('Deve multiplicar 2 e 5 resultando em 10', () => {
        let resultado = Calculadora.mult(2, 5)
        expect(resultado).to.be.eq(10)
        
    })
    it('Deve multiplicar -10 e 5 resultando em -50', () => {
        let resultado = Calculadora.mult(-10, 5)
        expect(resultado).to.be.eq(-50)
        
    })
})

describe('Testes de divisão', ()=>{
    it('Deve dividir 2 e 5 resultando em 0.4', () => {
        let resultado = Calculadora.div(2, 5)
        expect(resultado).to.be.eq(0.4)
        
    })
    it('Deve dividir 20 e 4 resultando em 5', () => {
        let resultado = Calculadora.div(20, 4)
        expect(resultado).to.be.eq(5)
        
    })
})

describe('Testes de raiz quadrada', ()=>{
    it('Teste de raiz quadrada resultando em 144', () => {
        let resultado = Calculadora.raiz(-12)
        expect(resultado).to.be.eq(-12)
        
    })
    it('Teste de raiz quadrada resultando em 25', () => {
        let resultado = Calculadora.raiz(5)
        expect(resultado).to.be.eq(5)
        
    })
})






