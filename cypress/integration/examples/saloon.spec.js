/// <reference types="cypress" />



describe( 'Empty Test',() =>{
  it('test one', () => {
      
      cy.visit('http://localhost:3000/appointment')

      cy.contains('Appointment').click()

     
  });
})