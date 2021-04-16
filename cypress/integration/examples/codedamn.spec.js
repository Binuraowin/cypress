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
    
    it('Login work fine', () => {


        cy.contains('Sign In').click()

        cy.contains('Unable to authorize').should('not.exist')

        cy.get('[data-testid=username]').type('blabs')
        cy.get('[data-testid=password]').type('80216620Bi')

        cy.get('[data-testid=login]').click()

        // cy.contains('Unable to authorize').should('not.exist')

        cy.contains('My pending courses').should('exist')
    });

    it('playground', () => {
        cy.contains('Sign In').click()

        cy.contains('Unable to authorize').should('not.exist')

        cy.get('[data-testid=username]').type('blabs')
        cy.get('[data-testid=password]').type('80216620Bi')

        cy.get('[data-testid=login]').click()

        // cy.contains('Unable to authorize').should('not.exist')

        cy.contains('Unable to authorize',{timeout: 1*1000}).should('not.exist')

        cy.contains('Playgrounds').click()
        
       
        cy.get('div')
        cy.debug()
        
    });


    it.only('playground', () => {
        cy.contains('Sign In').click()

        cy.contains('Unable to authorize').should('not.exist')

        cy.get('[data-testid=username]').type('blabs')
        cy.get('[data-testid=password]').type('80216620Bi')

        cy.get('[data-testid=login]').click()

        // cy.contains('Unable to authorize').should('not.exist')

        cy.contains('Unable to authorize',{timeout: 1*1000}).should('not.exist')

        cy.contains('Playgrounds').click()

        cy.contains('Raw HTML playground',{timeout:4*1000}).click()

        cy.contains('Setting up the challenge',{timeout:100*1000}).should('not.exist')
        
        cy.get('.xterm-helper-textarea',{timeout:10*1000}).type('{ctrl}{c}').type('touch test.js{enter}')

        cy.contains('test.js').should('exist')
        
    });

})