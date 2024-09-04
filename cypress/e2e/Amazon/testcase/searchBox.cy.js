const inputs = require("../../../fixtures/searchData.json");
const { HomePage } = require("../pages/HomePage.cy");
const { LoginPage } = require("../pages/LogingPage.cy");


beforeEach(() => {
    cy.visit("https://www.amazon.in/");
    cy.clearAllCookies();
    cy.clearAllLocalStorage();
})
const homePage = new HomePage();
describe('search the product and the click the page', ()=>{


    inputs.forEach(productName  => {
       
    it("inputs", ()=>{
       homePage.searchProduct(productName.text)
       cy.url().should('include', productName.text)
    })
        
    });
})