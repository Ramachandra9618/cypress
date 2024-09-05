export class CheckoutPage {

 get CODOption(){
    // return cy.get("#pp-szTP8t-295");
    return cy.xpath(`(//div[@class='a-fixed-left-grid-inner'])[30]`);
    // return cy.get('#pp-kdz9sh-328 > .pmts-instrument-box > .a-padding-small');
 }
 get EMIoption(){
    return cy.get("#pp-e41izT-225");
 }

 get placeOrderOption(){
    // return cy.get("#pp-EqqzzS-297 > .a-button-inner > .a-button-input");
    return cy.xpath(`(//input[@name='ppw-widgetEvent:SetPaymentPlanSelectContinueEvent'])[1]`)
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
    this.placeOrderOption.click({force:true});
}




}