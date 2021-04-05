import { MenuContentPage, ProductListPage, ShoppingCartPage, LoginPage, AddressPage, ShippingPage, PaymentPage } from "../page/index"

const menuContentPage = new MenuContentPage()
const productListPage = new ProductListPage()
const shoppingCartPage = new ShoppingCartPage()
const loginPage = new LoginPage()
const addressPage = new AddressPage()
const paymentPage = new PaymentPage()
const shippingPage = new ShippingPage()
const email = "aperdomobo@gmail.com"
const password = "WorkshopProtractor"
const orderCompleted = "Your order on My Store is complete."
 

describe("Buy a t-shirt", () => {

    it("then the t-shirt should be bought", () => {
      menuContentPage.visitMenuContentPage()
      menuContentPage.goToTShirtMenu()
      productListPage.goToAddToCartButton()
      productListPage.goToProceedToCheckoutInOptionCartButton()
      shoppingCartPage.goToProceedToCheckoutInOptionSummaryButton()
      loginPage.typeEmailAddress(email)
      loginPage.typePassword(password)
      loginPage.goToSignInButton()
      addressPage.goToProceedToCheckoutInOptionAddressButton()
      shippingPage.checkTermsOfService()
      shippingPage.goToProceedToCheckoutInOptionShippingButton()
      paymentPage.goToPayByBankWireOption()
      paymentPage.goToConfirmMyOrderButton()
      paymentPage.verifyOrderCompleted(orderCompleted)
    });
  });
