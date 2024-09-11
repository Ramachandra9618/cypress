import { CartPage } from "../pages/CartPage.cy";
import { ElectronicsPage } from "../pages/ElectronicsPage.cy";
import { HomePage } from "../pages/HomePage.cy";
import { LoginPage } from "../pages/LogingPage.cy"; 
import { ProductPage } from "../pages/ProductPage.cy";

const loginData = require("../../../fixtures/login.json");

import 'cypress-xpath';

const links = require("../../../fixtures/links.json")


  const loginPage = new LoginPage();
  const homePage = new HomePage();
  const cartPage = new CartPage();
  const productPage = new ProductPage();
  const electronisPage = new ElectronicsPage();
  beforeEach(() => {
    cy.visit("https://www.amazon.in/");
  });

  loginData.forEach(data => {
  it("total prize ", ()=>{
    homePage.clickSignIn();
    loginPage.enterEmail(data.phoneNumber);
    loginPage.clickContinue();
    loginPage.enterPassword(data.password);
    loginPage.clickSignInSubmit();
    homePage.searchProduct('shirt for men');
    productPage.clickFirstProduct()
    productPage.selectQty(0);
    cartPage.clickAddToCart()
    cartPage.clickProceedToBuyButton();
    // checkoutPage.selectOption('COD');
    // checkoutPage.clickOnPlaceOrder();
  })
})
