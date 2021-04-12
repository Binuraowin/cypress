/// <reference types="cypress" />

describe( 'Empty Test',() =>{
    it('test one', () => {
        
        cy.visit('https://codedamn.com')
        cy.viewport(1280,720)
       
       
    })

    it.only('login page looks good',()=>{
        cy.viewport(1280,720)
        cy.visit('https://codedamn.com')

        cy.contains('Sign In').click()
        cy.contains('Login with your credentials').should('exist')
    })

    it.only('login page links',()=>{
        cy.viewport(1280,720)
        cy.visit('https://codedamn.com')

        cy.contains('Sign In').click()
        cy.contains('Forgot password?').click()

        cy.url().should('include','/password-reset')

        cy.go('back')

        cy.contains('Register an account').click()
        cy.url().should('include','/register')
    })
})