import { CartPage } from "../pages/CartPage.cy";
import { ElectronicsPage } from "../pages/ElectronicsPage.cy";
import { HomePage } from "../pages/HomePage.cy";
import { LoginPage } from "../pages/LogingPage.cy";
import { ProductPage } from "../pages/ProductPage.cy";


const loginPage = new LoginPage();
const homepage = new HomePage();
const productPage = new ProductPage();
const cartPage = new CartPage();
beforeEach(() => {
  cy.visit("https://www.amazon.in/");
});

it('Verify that Add to Wishlist only works after login', ()=>{
  homepage.searchProduct("t-shirt");
  productPage.clickFirstProduct();
  productPage.selectQty(2);
  cy.wait(2000)
  productPage.clickAddWishListButton();

  cy.url().should('contain', 'signin')

})