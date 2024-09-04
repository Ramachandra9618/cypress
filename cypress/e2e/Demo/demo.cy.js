/// <reference types="cypress" />


it("njdnjqndj", ()=>{
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type('standard{Enter}')
    cy.get('.CGtC98').eq(0).click()
    cy.should("have.text", "tables")
    
})