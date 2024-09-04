export class HomePage {
    visit() {
      cy.visit('https://www.amazon.in/');
    }
  
    get cartButton(){
        return cy.get("#nav-cart");
    }
    
    clickCartButton(){
        this.cartButton.click();
    }

//   get signInButton() {
//         return cy.get('#nav-link-accountList');
//       }
  
    clickSignIn() {
      this.accountOPN().click();
    }
    
    searchProduct(productName) {
        cy.get('#twotabsearchtextbox').type(`${productName}{enter}`);
      }
    
    accountOPN() {
        return cy.get('#nav-link-accountList');
    }
    
    signOutButton() {
        return cy.get('#nav-item-signout');
    }
    
    mouseOnAccount() {
        this.accountOPN().trigger('mouseover');
    }
    
    signOut() {
        this.signOutButton().click();
    }
    clickElectronics() {
      cy.get('a').contains('Electronics').click();
    }

    
}
  