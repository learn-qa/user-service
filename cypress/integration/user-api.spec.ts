/// <reference types="cypress"/>

describe('User rest api - service tests', () => {
    before(() => {
        cy.request({
            method: 'DELETE',
            url: '/users'
        })

        cy.request({
            method: 'POST',
            url: '/users',
            body: {firstName: 'F', lastName: 'Ch', age: 22, address: '5, ghgh, 787'}
        })
    })

    it('Test GET request', ()=> {
        cy.request({
            method: 'GET',
            url: '/users/1'
        })
        .then((response: any)=> {
            expect(response.isOkStatusCode).to.be.true;
            expect(response.body.message).to.have.property('id', 1)
            expect(response.body.message).to.have.property('firstName')
            expect(response.body.message).to.have.property('lastName')
            expect(response.body.message).to.have.property('age')
            expect(response.body.message).to.have.property('address')
        })
    })

    it('Test invalid GET request', ()=> {
        cy.request({
            method: 'GET',
            url: '/usersx/1',
            failOnStatusCode: false
        })
        .then((response: any)=> {
            expect(response.status).to.eq(404)
        })  
    })

    it('Test GET all request', ()=> {
        cy.request({
            method: 'GET',
            url: '/users'
        })
        .then((response: any)=> {
            expect(response.isOkStatusCode).to.be.true;
            expect(response.body.message[0]).to.have.property('id', 1)
            expect(response.body.message[0]).to.have.property('firstName')
            expect(response.body.message[0]).to.have.property('lastName')
            expect(response.body.message[0]).to.have.property('age')
            expect(response.body.message[0]).to.have.property('address')
        })
    })

    it('Test POST request', ()=> {
        cy.request({
            method: 'POST',
            url: '/users',
            body: {firstName: 'F', lastName: 'Ch', age: 22, address: '5, ghgh, 787'}
        })
        .then((response: any)=> {
            expect(response.isOkStatusCode).to.be.true;
        })
    })
})