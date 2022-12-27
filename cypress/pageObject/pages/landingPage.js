import { SamsungGalaxyS6Page } from "./samsungS6Page"
export class LandingPageSGS6 {
    landingPageUrl = 'https://www.demoblaze.com'
    samsungLinkLocator = ':nth-child(1) > .card > .card-block > .card-title > .hrefch'
    cartButtonLocator = '#cartur'
    constructor() {
        cy.visit(this.landingPageUrl)
    }

    clickSamsungGalaxyS6() {
        cy.get(this.samsungLinkLocator).click()
        return new SamsungGalaxyS6Page
    }
}

