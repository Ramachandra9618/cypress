import 'cypress-iframe';


describe('practice', ()=>{
beforeEach('visit', ()=>{
    cy.visit("https://testautomationpractice.blogspot.com/")

})
    it.skip('multiselected', ()=>{
        // cy.get('#sunday').click();
       cy.get('.form-group').find('.form-check-inline').find('.form-check-input').click( {multiple: true})
    })

    it.skip('second', ()=>{
        cy.on('window:alert', (text) => {
            expect(text).to.contains('I am an alert box!');
        });
        cy.contains('button', 'Alert').click();
    })
    it.skip('third', ()=>{
        cy.on('window:confirm', (text) => {
            expect(text).to.contains('Press a button!');
            
        });
        cy.contains('button', 'Confirm Box').click();
    })


    it.skip('prompt', () => {
        const promptText = 'Please enter your name:';
        const responseText = 'John Doe';
      
        cy.window().then((win) => {
          cy.stub(win, 'prompt').as('promptStub').returns(responseText);
        });
      
        cy.contains('button', 'Prompt').click();
      
       const val =  cy.get('@promptStub').should('have.been.calledOnceWith', promptText);
      });

      it.skip('prompt cancel', () => {
        const promptText = 'Please  your name:';
        const responseText = 'John Doe';
      
        cy.window().then((win) => {
          cy.stub(win, 'prompt').as('promptStub').returns(false);
        });
      
        cy.contains('button', 'Prompt').click();
      
        cy.get('@promptStub').should('not.have.been.calledOnceWith', promptText);
      });
       
      it.skip('name', () => {
        cy.get('div[id="HTML1"] h2[class="title"]').invoke('text').then((data) => {
          cy.log(data);
        });
      });

      it('select', ()=>{
 
        cy.get('select').first().select('india').should('have.value', 'india')

      })
      
})