
export class CartPage {
    addToCartButton() {
      return cy.get('#add-to-cart-button');
    }

   get deleteButton(){
      return cy.get('input').contains('Delete')
    }
    get cartEmpty(){
      return cy.get('.a-size-extra-large');
    }
  
    clickAddToCart() {
      this.addToCartButton().should('be.visible').click();
    }
    clickDeleteButton(){
      this.deleteButton.click({multiple: true})
    }

  }
  