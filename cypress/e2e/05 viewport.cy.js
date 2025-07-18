describe('Before each', () => {

    beforeEach(() => {
        cy.visit('/practice-test-login/')
    })

    it('Login com credenciais válidas', () => {
        cy.viewport('ipad-2')
        cy.login('student', 'Password123')
        cy.get('h1').contains('Logged In Successfully').should('be.visible')
    })

    it('Login com credenciais inválidas', () => {
        cy.viewport('macbook-11')
        cy.login('student', 'Password1234')
        cy.get('#error').contains('Your password is invalid!').should('be.visible')
    })

    it('Login com campo de senha em branco', () => {
        cy.viewport('iphone-xr')
        cy.login('student', ' ')
        cy.get('#error').contains('Your password is invalid!').should('be.visible')
    })

    it('Login com campo de e-mail em branco', () => {
        cy.viewport('samsung-note9')
        cy.login(' ', 'student')
        cy.get('#error').contains('Your username is invalid!').should('be.visible')
    })

})