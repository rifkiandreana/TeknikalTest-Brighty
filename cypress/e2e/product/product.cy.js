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

  it("TC-01 | Add item to cart", { tags: ["@smoke", "@regression"] }, () => {
    ProductPage.clickAddToCartButton("Sauce Labs Onesie");
    ProductPage.verifyAddToCart("Sauce Labs Onesie");
  });

  it("TC-02 | Remove item from cart", { tags: ["@regression"] }, () => {
    ProductPage.clickAddToCartButton("Test.allTheThings() T-Shirt (Red)");
    ProductPage.verifyAddToCart("Test.allTheThings() T-Shirt (Red)");
    ProductPage.clickRemoveFromCartButton("Test.allTheThings() T-Shirt (Red)");
    ProductPage.verifyRemoveFromCart("Test.allTheThings() T-Shirt (Red)");
  });

  it("TC-03 | Item should not appear in cart before add", { tags: ["@regression"] }, () => {
    ProductPage.verifyRemoveFromCart("Sauce Labs Onesie");
    ProductPage.verifyCartBadgeNotExist();
  });

  it("TC-04 | Sorting items", { tags: ["@regression"] }, () => {
    ProductPage.selectActiveSortOptionsButton("Name (Z to A)");
    ProductPage.verifyActiveSortOption("za");
  });

  it("TC-05 | Show Detail product", { tags: ["@smoke", "@regression"] }, () => {
    ProductPage.clickProductName("Sauce Labs Backpack");
    ProductPage.verifyProductDetailName("Sauce Labs Backpack");
  });
});
