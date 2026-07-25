import CartPage from "../../pages/cart/cartPage";
import LoginPage from "../../pages/login/loginPage";
import ProductPage from "../../pages/product/productPage";

describe("Cart Test", () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
    LoginPage.visit();
    LoginPage.inputUsername("standard_user");
    LoginPage.inputPassword("secret_sauce");
    LoginPage.clickLoginButton();
    LoginPage.validateSuccessLogin();
  });

  it("TC-01 | Add one items to cart", () => {
    ProductPage.clickAddToCartButton("Sauce Labs Bolt T-Shirt");
    CartPage.clickCartButton();
    CartPage.verifyIteminCart("Sauce Labs Bolt T-Shirt");
  });
  it("TC-02 | Add multiple items to cart", () => {
    ProductPage.clickAddToCartButton("Sauce Labs Bolt T-Shirt");
    ProductPage.clickAddToCartButton("Sauce Labs Onesie");
    ProductPage.clickAddToCartButton("Test.allTheThings() T-Shirt (Red)");
    ProductPage.clickAddToCartButton("Sauce Labs Backpack");
    CartPage.clickCartButton();
    CartPage.verifyIteminCart("Sauce Labs Bolt T-Shirt");
    CartPage.verifyIteminCart("Sauce Labs Onesie");
    CartPage.verifyIteminCart("Test.allTheThings() T-Shirt (Red)");
    CartPage.verifyIteminCart("Sauce Labs Backpack");
  });
  it("TC-03 | Remove one items from cart", () => {
    ProductPage.clickAddToCartButton("Sauce Labs Bolt T-Shirt");
    ProductPage.clickAddToCartButton("Test.allTheThings() T-Shirt (Red)");
    CartPage.clickCartButton();
    CartPage.verifyIteminCart("Sauce Labs Bolt T-Shirt");
    CartPage.verifyIteminCart("Test.allTheThings() T-Shirt (Red)");
    CartPage.clickRemoveButtonInCart("Sauce Labs Bolt T-Shirt");
    CartPage.verifyItemNotinCart("Sauce Labs Bolt T-Shirt");
  });
  it("TC-04 | Remove multiple items from cart", () => {
    ProductPage.clickAddToCartButton("Sauce Labs Bolt T-Shirt");
    ProductPage.clickAddToCartButton("Test.allTheThings() T-Shirt (Red)");
    CartPage.clickCartButton();
    CartPage.verifyIteminCart("Sauce Labs Bolt T-Shirt");
    CartPage.verifyIteminCart("Test.allTheThings() T-Shirt (Red)");
    CartPage.clickRemoveButtonInCart("Sauce Labs Bolt T-Shirt");
    CartPage.clickRemoveButtonInCart("Test.allTheThings() T-Shirt (Red)");
    CartPage.verifyItemNotinCart("Sauce Labs Bolt T-Shirt");
    CartPage.verifyItemNotinCart("Test.allTheThings() T-Shirt (Red)");
  });
  it("TC-05 | Show product details in Cart", () => {
    ProductPage.clickAddToCartButton("Sauce Labs Bolt T-Shirt");
    CartPage.clickCartButton();
    CartPage.verifyIteminCart("Sauce Labs Bolt T-Shirt");
    CartPage.clickProductName("Sauce Labs Bolt T-Shirt");
    ProductPage.verifyProductDetailName("Sauce Labs Bolt T-Shirt");
  });
  it("TC-06 | Back to Inventory Page", () => {
    CartPage.clickCartButton();
    CartPage.clickContinueShoppingButton();
    CartPage.verifyInventoryPage();
  });
  it("TC-07 | Checkout items", () => {
    ProductPage.clickAddToCartButton("Sauce Labs Bolt T-Shirt");
    ProductPage.clickAddToCartButton("Sauce Labs Onesie");
    ProductPage.clickAddToCartButton("Test.allTheThings() T-Shirt (Red)");
    ProductPage.clickAddToCartButton("Sauce Labs Backpack");
    CartPage.clickCartButton();
    CartPage.verifyIteminCart("Sauce Labs Bolt T-Shirt");
    CartPage.verifyIteminCart("Sauce Labs Onesie");
    CartPage.verifyIteminCart("Test.allTheThings() T-Shirt (Red)");
    CartPage.verifyIteminCart("Sauce Labs Backpack");
    CartPage.clickCheckoutButton();
    CartPage.verifyCheckoutStepOnePage();
  });
});
