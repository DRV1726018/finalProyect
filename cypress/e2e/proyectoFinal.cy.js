import { LandingPage } from "../pages/landingPage"
describe('UI TESTING WITH CYPRESS', () => {
  const expectedText = 'Samsung galaxy s6'
  it('Adding Samsung galaxy s6 to the cart', () => {
    const home = new LandingPage
    const SamsungGalaxyS6 = home.clickSamsungGalaxyS6()
    SamsungGalaxyS6.clickAddToCart()
    const Cart = SamsungGalaxyS6.goToCart()
    Cart.checkFirstElementName(expectedText)
  })


})