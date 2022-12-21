import { CartPage } from "./cartPage";

export class SamsungGalaxyS6Page {
    addToCartButtonLocator = '.col-sm-12 > .btn'
    cartButtonLocator = '#cartur'

    clickAddToCart() {
        cy.get(this.addToCartButtonLocator).click()
    }
    goToCart() {
        cy.get(this.cartButtonLocator).click()
        return new CartPage
    }
}