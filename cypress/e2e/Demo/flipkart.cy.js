const { it } = require("mocha");


it('mouse Actions', ()=>{
    cy.visit("https://www.flipkart.com")
    cy.get('.Pke_EE').type('clothes{enter}')
    cy.url().should('include', 'clothes')
    cy.get('body').rightclick({force:true})
    cy.scrollTo('bottom')

})