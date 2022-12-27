export class Login {
    landingPageUrl = 'https://www.demoblaze.com'
    constructor() {
        cy.visit(this.landingPageUrl)
    }

    selectLoginButton() {
        cy.get('#login2').click()
    }

    typeUsername() {
        cy.get('#loginusername').type('user232')
    }

    typePassword() {
        cy.get('#loginpassword').type('password')
    }

    pressLoginButton() {
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    }

    verifyUsername(name) {
        cy.get('#nameofuser').should('have.text', 'Welcome' + ' ' + name)
    }
}