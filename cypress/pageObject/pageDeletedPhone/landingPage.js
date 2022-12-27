import { NokiaLumia1520Page } from "./nokiaLumia1520"
export class LandingPageNL {
    landingPageUrl = 'https://www.demoblaze.com/index.html'
    nokiaLumiaLinkLocator = ':nth-child(2) > .card > .card-block > .card-title > .hrefch'
    constructor() {
        cy.visit(this.landingPageUrl)
    }
    clickNokiaLumia() {
        cy.get(this.nokiaLumiaLinkLocator).click()
        return new NokiaLumia1520Page
    }

}