/// <reference types="cypress" />



describe( 'Empty Test',() =>{

  beforeEach(() =>{
    cy.visit('http://localhost:3000')
    cy.viewport(1280,720)
})
  it.only('test one', () => {
     
      cy.get('.appointment').click()

      
      cy.get('.appointment').should('exist')

      cy.contains('Book now').click()


      cy.url().should('include','appointment')

      cy.contains('Make an Appointment').should('exist')

  });

  it('description', () => {

    cy.visit('http://localhost:3000/appointment')
    cy.get('.description').type('description')

    cy.get('.email').type('email@email.com')

    cy.get('.name').type('binura owin')

    cy.get('.date').type('2021-04-16')

    cy.get('.phone').type('0452288529')

    cy.get('.makeappointment').click()

    // cy.contains('Please fill out this field.').should('exist')
  });
})