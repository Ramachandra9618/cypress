
export class ElectronicsPage {
    clickAccessories() {
      cy.get('a').contains('Accessories').click();
    }
  
    searchProduct(productName) {
      cy.get('#twotabsearchtextbox').type(`${productName}{enter}`);
    }
  
    clickFirstProduct() {
      cy.xpath('(//a[@class="a-link-normal s-no-outline"])[1]').invoke('removeAttr', 'target').click({ force: true });
    }
  }
  