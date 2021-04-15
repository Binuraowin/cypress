/// <reference types="cypress" />

describe( 'Empty Test',() =>{

    beforeEach(() =>{
        cy.visit('https://codedamn.com')
        cy.viewport(1280,720)
    })
  

    it('login page looks good',()=>{


        cy.contains('Sign In').click()
        cy.contains('Login with your credentials').should('exist')
    })

    it('login page links',()=>{

        cy.contains('Sign In').click()
        cy.contains('Forgot password?').click()

        cy.url().should('include','/password-reset')
        
        //this can't add await method
        cy.url().then(value =>{
            cy.log('Current URL is:',value)
        })

        cy.go('back')

        cy.contains('Register an account').click()
        cy.url().should('include','/register')
    })
    
    it.only('Login work fine', () => {


        cy.contains('Sign In').click()

        cy.contains('Unable to authorize').should('not.exist')

        cy.get('[data-testid=username]').type('admin')
        cy.get('[data-testid=password]').type('admin')

        cy.get('[data-testid=login]').click()

        cy.contains('Unable to authorize').should('exist')
    });
})