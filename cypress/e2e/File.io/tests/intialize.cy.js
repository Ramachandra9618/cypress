const { beforeEach } = require("mocha");

beforeEach("baseSetup", ()=>{
    cy.visit("https://www.file.io/");
})


it("start", ()=>{
      cy.get('.css-1xb3qyw').click()
      cy.get('[name="email"]').type("c@gmail.com")
      cy.get('[name="password"]').type('Chandra@143')
      cy.get('#optinUpdates').uncheck()
      cy.get('#optinMarketing').uncheck()
      cy.get('.css-117hzk3').click()
})