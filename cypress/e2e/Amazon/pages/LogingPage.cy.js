export class LoginPage {
   
  
    emailInput() {
      return cy.get('#ap_email');
    }
  
    continueButton() {
      return cy.get('.a-button-input');
    }
  
    passwordInput() {
      return cy.get('#ap_password');
    }
  
    signInSubmitButton() {
      return cy.get('#signInSubmit');
    }

   
  
    enterEmail(email) {
      this.emailInput().type(email);
    }
  
    clickContinue() {
      this.continueButton().click();
    }
  
    enterPassword(password) {
      this.passwordInput().type(password, { log: false });
    }
  
    clickSignInSubmit() {
      this.signInSubmitButton().click();
    }
  }
  