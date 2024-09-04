import { CartPage } from "../pages/CartPage.cy";
import { ElectronicsPage } from "../pages/ElectronicsPage.cy";
import { HomePage } from "../pages/HomePage.cy";
import { LoginPage } from "../pages/LogingPage.cy"; 


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
    // Use the fixture data from alias
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

          const linkText = link.text+"";

          cy.get('a').contains(linkText).click(); 
          cy.url().should('include', linkText.toLocaleLowerCase()); 

          cy.scrollTo('20%',  '50%')
          

          cy.go('back'); // Uncomment if you need to go back to the previous page
      });

});
});
