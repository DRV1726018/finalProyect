export class DeletedPhone {
    deleteItemLinkLocator = '.success > :nth-child(4) > a'
    priceLinkLocator = '.success'
    DeletedPhone() {
        cy.get(this.deleteItemLinkLocator).click()
    }
    checkDeletedPhone() {
        cy.get(this.priceLinkLocator).should('not.exist')
        return new DeletedPhone
    }
}