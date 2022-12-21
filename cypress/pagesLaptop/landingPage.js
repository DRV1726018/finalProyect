import { SonyVaioi5Page } from "./sonyVaioi5"

export class LandingPageSV {
    landingPageUrl = 'https://www.demoblaze.com'
    sonyLinkLocator = ':nth-child(8) > .card > .card-block > .card-title > .hrefch'
    cartButtonLocator = '#cartur'
    constructor() {
        cy.visit(this.landingPageUrl)
    }

    clickSonyVaioi5() {
        cy.get(this.sonyLinkLocator).click()
        return new SonyVaioi5Page
    }
}

