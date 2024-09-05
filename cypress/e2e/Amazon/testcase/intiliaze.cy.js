import { CartPage } from "../pages/CartPage.cy";
import { ElectronicsPage } from "../pages/ElectronicsPage.cy";
import { HomePage } from "../pages/HomePage.cy";
import { LoginPage } from "../pages/LogingPage.cy"; 
import 'cypress-xpath';

const links = require("../../../fixtures/links.json")

describe("Amazon Login and Add to Cart", () => {

  const loginPage = new LoginPage();
  const homepage = new HomePage();
  const cartPage = new CartPage();
  const electronisPage = new ElectronicsPage();
  beforeEach(() => {
    cy.visit("https://www.amazon.in/");
    cy.fixture("login").as("testData"); 

  });

  it.skip("check", () => {
    cy.get("@testData").then((testData) => {
        testData.forEach(({ phoneNumber, password, product }) => {

    loginPage.clickSignIn();
    loginPage.enterEmail(phoneNumber);
    loginPage.clickContinue();
    loginPage.enterPassword(password);
    loginPage.clickSignInSubmit();
    cy.get('#nav-cart-count-container').click();
        })
    })
  });

  it.skip("elecronis", ()=>{
    homepage.clickElectronics();
    cy.wait(2000)
  })

  it.skip("should login and add products to the cart using data from fixture", function () {
    cy.get("@testData").then((testData) => {
      testData.forEach(({ phoneNumber, password, product }) => {
        loginPage.clickSignIn();
        loginPage.enterEmail(phoneNumber);
        loginPage.clickContinue();
        loginPage.enterPassword(password);
        loginPage.clickSignInSubmit();
        electronisPage.searchProduct(product);
        electronisPage.clickFirstProduct();
        cartPage.clickAddToCart();
        homepage.mouseOnAccount();
        homepage.signOut();
      });
    });
  });


   
      links.forEach(link => {
        it('linkNavigationTest', () => {

          const linkText = link.text;

          // cy.xpath(`//a[contains(text(),${linkText})]`).click();
          cy.get('a').contains(linkText).click({force: true});
          cy.url().should('include', linkText.toLocaleLowerCase()); 

          cy.scrollTo('20%',  '50%')
          

          cy.go('back'); 
      });

});
});
