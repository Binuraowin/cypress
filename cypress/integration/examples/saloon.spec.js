/// <reference types="cypress" />



describe( 'Empty Test',() =>{
  it('test one', () => {
      
      cy.visit('http://localhost:3000/')

      cy.contains('Appointment').click()

     
  });
})