describe('Nosso primeiro teste automatizado', () => {

    beforeEach(() => {
        cy.visit('https://practicetestautomation.com/practice-test-login/')
    })

    it('Login com credenciais válidas', () => {
        cy.login('student', 'Password123')
        cy.get('h1').contains('Logged In Successfully').should('be.visible')
    })

    it('Login com credenciais inválidas', () => {
        cy.login('student', 'Password1234')
        cy.get('#error').contains('Your password is invalid!').should('be.visible')
    })

    it('Login com campo de senha em branco', () => {
        cy.login('student', '')
        cy.get('#error').contains('Your password is invalid!').should('be.visible')
    })

    it('Login com campo de e-mail em branco', () => {
        cy.login('', 'student')
        cy.get('#error').contains('Your password is invalid!').should('be.visible')
    })

})


