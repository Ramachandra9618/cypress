
export class CartPage {
    addToCartButton() {
      return cy.get('#add-to-cart-button');
    }
    get proceedToBuyButton(){
      return cy.get(`#sc-buy-box-ptc-button > .a-button-inner > .a-button-input`);
    }
    get reviewOrderButton(){
      return cy.get(`#spcViewButtonId > .a-button-inner > [data-testid]`);
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
    clickProceedToBuyButton(){
      this.proceedToBuyButton.click();
    }

    clickReviewOrderButton(){
      this.reviewOrderButton();
    }

  }
  