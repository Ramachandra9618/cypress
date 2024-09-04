export class CheckoutPage {

 get CODOption(){
    return cy.get("#pp-szTP8t-295");
 }
 get EMIoption(){
    return cy.get("#pp-e41izT-225");
 }

 get placeOrderOption(){
    return cy.get("#pp-EqqzzS-297 > .a-button-inner > .a-button-input");
 }

  selectOption(optionType) {
    switch (optionType) {
        case 'COD':
            this.CODOption.click({force:true});
            break;
        case 'EMI':
            this.EMIoption.click({force:true});
            break;
        default:
            throw new Error(`Unknown option type: ${optionType}`);
    }
}

clickOnPlaceOrder(){
    this.placeOrderOption.click();
}




}