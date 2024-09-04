import { CartPage } from "../pages/CartPage.cy";
import { CheckoutPage } from "../pages/CheckoutPage.cy";
import { HomePage } from "../pages/HomePage.cy";
import { LoginPage } from "../pages/LogingPage.cy";
import { ProductPage } from "../pages/ProductPage.cy";
const loginData = require("../../../fixtures/login.json");


beforeEach(() => {
    cy.visit("https://www.amazon.in/");
    cy.clearAllCookies();
    cy.clearAllLocalStorage();
})


const loginPage = new LoginPage();
const homePage = new HomePage();
const cartPage = new CartPage();
const productPage = new ProductPage();
const checkoutPage = new CheckoutPage();

loginData.forEach(data => {
    it("place order", ()=>{
    homePage.clickSignIn();
    loginPage.enterEmail(data.phoneNumber);
    loginPage.clickContinue();
    loginPage.enterPassword(data.password);
    loginPage.clickSignInSubmit();
    homePage.searchProduct('shirt for men');
    productPage.clickFirstProduct()
    productPage.selectQty(2);
    // productPage.selectSize('m')
    productPage.clickBuyNowBtn();
    checkoutPage.selectOption('COD');
    checkoutPage.clickOnPlaceOrder();
    
})
});
