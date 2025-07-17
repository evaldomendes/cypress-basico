describe('Nosso primeiro teste automatizado', () => {

    it('Login com credenciais válidas', () => {
        cy.visit('https://practicetestautomation.com/practice-test-login/')

        cy.get('#username').type('student')

        cy.get('#password').type('Password123')

        cy.get('#submit').click()

        cy.get('h1').contains('Logged In Successfully').should('be.visible')

        cy.get('h1').should('contain.text', 'Logged In Successfully')

        cy.get('h1').should('have.text', 'Logged In Successfully')
    })

    it.only('Login usando comandos customizados', () => {
        cy.visit('https://practicetestautomation.com/practice-test-login/')
        cy.login('student', 'Password123')
        cy.get('h1').contains('Logged In Successfully').should('be.visible')
    })
})


