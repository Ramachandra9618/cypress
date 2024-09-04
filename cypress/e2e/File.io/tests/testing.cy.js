beforeEach("intialize", ()=>{
    cy.visit('http://www.opencartdemo.com/')
})

it("login", ()=>{
    cy.get("#user-name").type('standard_user')
    cy.get('#password{Enter}').type('secret_sauce')

})