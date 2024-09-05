import 'cypress-xpath';

export class ProductPage{

   get buyNowButton() {
        return cy.get('#buy-now-button');
      }
     get sizeOption() {
        return cy.get('#native_dropdown_selected_size_name');
      }

      get addWishListButton(){
        return cy.xpath(`//a[@title='Add to Wish List']`)
      }

     get qtyOption(){
        return cy.get("#quantity");
      }

      clickFirstProduct() {
        cy.xpath('(//a[@class="a-link-normal s-no-outline"])[1]').invoke('removeAttr', 'target').click({ force: true });
      }

      selectSize(size){
       try {
         this.sizeOption.select(size);
        
       } catch (error) {
        this.sizeOption.select(40);
       }
      }

      selectQty(qty){
        this.qtyOption.select(qty);
      }

      clickBuyNowBtn(){
        this.buyNowButton.click();
      }

      clickAddWishListButton(){
        this.addWishListButton.click();
      }
}