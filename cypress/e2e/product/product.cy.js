import ProductPage from "../../pages/product/productPage";
import LoginPage from "../../pages/login/loginPage";

describe("Product Test", () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
    LoginPage.visit();
    LoginPage.inputUsername("standard_user");
    LoginPage.inputPassword("secret_sauce");
    LoginPage.clickLoginButton();
    LoginPage.validateSuccessLogin();
  });

  it("TC-01 | Add item to cart", () => {
    ProductPage.clickAddToCartButton("Sauce Labs Onesie");
    ProductPage.verifyAddToCart("Sauce Labs Onesie");
  });

  it("TC-02 | Remove item from cart", () => {
    ProductPage.clickAddToCartButton("Test.allTheThings() T-Shirt (Red)");
    ProductPage.verifyAddToCart("Test.allTheThings() T-Shirt (Red)");
    ProductPage.clickRemoveFromCartButton("Test.allTheThings() T-Shirt (Red)");
    ProductPage.verifyRemoveFromCart("Test.allTheThings() T-Shirt (Red)");
  });

  it.only("TC-03 | Negative case: item should not appear in cart before add", () => {
    ProductPage.verifyRemoveFromCart("Sauce Labs Onesie");
    ProductPage.verifyCartBadgeNotExist();
  });

  it("TC-04 | Sorting items", () => {
    ProductPage.selectActiveSortOptionsButton("Name (Z to A)");
    ProductPage.verifyActiveSortOption("za");
  });

  it("TC-05 | Show Detail product", () => {
    ProductPage.clickProductName("Sauce Labs Backpack");
    ProductPage.verifyProductDetailName("Sauce Labs Backpack");
  });
});
