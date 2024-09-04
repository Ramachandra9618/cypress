import { CartPage } from "../pages/CartPage.cy";
import { HomePage } from "../pages/HomePage.cy";
import { LoginPage } from "../pages/LogingPage.cy";
const loginData = require("../../../fixtures/login.json");


beforeEach(() => {
    cy.visit("https://www.amazon.in/");
    cy.clearAllCookies();
    cy.clearAllLocalStorage();
})


const loginPage = new LoginPage();
const homePage = new HomePage();
const cartPage = new CartPage();

loginData.forEach(data => {
    
    it('remove from the cart', ()=>{
        homePage.clickSignIn();
        loginPage.enterEmail(data.phoneNumber);
        loginPage.clickContinue();
        loginPage.enterPassword(data.password);
        loginPage.clickSignInSubmit();
        homePage.clickCartButton();

        if (cartPage.deleteButton) {
            cartPage.clickDeleteButton()

            cartPage.cartEmpty.should('be.visible');
        }else{
            cartPage.cartEmpty.should('be.visible');
            cy.log("no items in the cart")
        }


    })
});