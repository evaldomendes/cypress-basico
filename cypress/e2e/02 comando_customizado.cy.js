describe('Comandos customizados', () => {


    it.only('Login usando comandos customizados', () => {
        cy.visit('https://practicetestautomation.com/practice-test-login/')
        cy.login('student', 'Password123')
        cy.get('h1').contains('Logged In Successfully').should('be.visible')
    })
})


