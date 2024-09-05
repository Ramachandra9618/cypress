import 'cypress-xpath';

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

    get langOPN(){
        return cy.get('#icp-nav-flyout');
    }


    mouseOnLangOPN(){
        this.langOPN.trigger('mouseover');
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


    selectLangugage(language){

        switch (language) {
            case "English":
                
                  cy.xpath(`//a[contains(@href, 'IN') and contains(@lang, 'en-IN')]`).first().click();
                  cy.url().should('include', 'en_IN');
                break;
            case "Telugu" :
                cy.xpath(`//a[contains(@href, 'IN') and contains(@lang, 'te-IN')]`).first().click();
                cy.url().should('include', 'te_IN');
                break;
            case "Hindi" :
                cy.xpath(`//a[contains(@href, 'IN') and contains(@lang, 'hi-IN')]`).first().click();
                cy.url().should('include', 'hi_IN');
            default:
                break;
        }
    }

    
}
  