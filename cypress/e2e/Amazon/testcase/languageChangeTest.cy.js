
const languages = require("../../../fixtures/languages.json")
const { HomePage } = require("../pages/HomePage.cy")

const homePage = new HomePage();

beforeEach(() => {
    cy.visit("https://www.amazon.in/");
});


languages.forEach(data => {
    it('languages change ', () => {

        homePage.mouseOnLangOPN();
        homePage.selectLangugage(data.lan)
    })


})
