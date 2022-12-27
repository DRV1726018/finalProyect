export class CartPage {
    firstProductNameLocator = '.success > :nth-child(2)'
    checkFirstElementName(name) {
        cy.get(this.firstProductNameLocator).should('have.text', name)
    }
}