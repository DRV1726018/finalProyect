import { AppleMonitorPage } from "./appleMonitor"

export class LandingPageAM {
    landingPageUrl = 'https://www.demoblaze.com'
    nextPageLinkLocator = '#next2'
    appleMonitorLinkLocator = ':nth-child(1) > .card > .card-block > .card-title > .hrefch'
    constructor() {
        cy.visit(this.landingPageUrl)
    }
    clickAppleMonitor() {
        cy.get(this.nextPageLinkLocator).click()
        cy.get(this.appleMonitorLinkLocator).click()
        return new AppleMonitorPage
    }
}