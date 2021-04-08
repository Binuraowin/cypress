/// <reference types="cypress" />

context('Actions', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/appointment')
    })
  
    // https://on.cypress.io/interacting-with-elements
  
    it('.type() - type into a DOM element', () => {
      // https://on.cypress.io/type
      cy.get('.name')
        .type('binura owin').should('have.value', 'binura owin')

      cy.get('.email')
        .type('binura@gmail.com').should('have.value', 'binura@gmail.com')
      cy.get('.date')
        .type('2021-12-21').should('have.value', 'binura owin')
    })
  
  })