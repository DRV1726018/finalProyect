import { LandingPageSGS6 } from "../pageObject/pages/landingPage"
import { LandingPageSV } from "../pageObject/pagesLaptop/landingPage"
import { LandingPageAM } from "../pageObject/pageMonitor/landingPage"
import { LandingPageNL } from "../pageObject/pageDeletedPhone/landingPage"
import { DeletedPhone } from "../pageObject/pageDeletedPhone/deletedPhone"
import { Login } from "../pageObject/pageLogin/landingPage"
describe('UI TESTING WITH CYPRESS', () => {
  const expectedPhone = 'Samsung galaxy s6'
  const expectedLaptop = 'Sony vaio i5'
  const expectedMonitor = 'Apple monitor 24'
  const expectedDeletedPhone = 'Nokia lumia 1520'
  const expectedUser = 'user232'

  it('Adding Samsung galaxy s6 to the cart', () => {
    const home = new LandingPageSGS6
    const SamsungGalaxyS6 = home.clickSamsungGalaxyS6()
    SamsungGalaxyS6.clickAddToCart()
    const Cart = SamsungGalaxyS6.goToCart()
    Cart.checkFirstElementName(expectedPhone)
  })
  it('Adding Sony vaio to the cart', () => {
    const home = new LandingPageSV
    const SonyVaioi5 = home.clickSonyVaioi5()
    SonyVaioi5.clickAddToCart()
    const Cart = SonyVaioi5.goToCart()
    Cart.checkFirstElementName(expectedLaptop)
  })
  it('Adding Apple monitor 24 to the cart', () => {
    const home = new LandingPageAM
    const AppleMonitor = home.clickAppleMonitor()
    AppleMonitor.clickAddToCart()
    const Cart = AppleMonitor.goToCart()
    Cart.checkFirstElementName(expectedMonitor)
  })
  it('Deleting a Nokia Lumia 1520 from the cart', () => {
    const home = new LandingPageNL
    const NokiaLumia = home.clickNokiaLumia()
    NokiaLumia.clickAddToCart()
    const Cart = NokiaLumia.goToCart()
    Cart.checkFirstElementName(expectedDeletedPhone)
    const deleted = new DeletedPhone
    deleted.DeletedPhone()
    deleted.checkDeletedPhone()
  })
  it('Login', () => {
    const login = new Login
    login.selectLoginButton()
    login.typeUsername()
    login.typePassword()
    login.pressLoginButton()
    login.verifyUsername(expectedUser)
  })
})