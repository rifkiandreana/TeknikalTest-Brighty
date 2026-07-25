class CartPage {
  clickCartButton() {
    cy.get('[data-test="shopping-cart-link"]').click();
  }
  clickBacktoProductsButton() {
    cy.get('[data-test="back-to-products"]').click();
  }
  clickContinueShoppingButton() {
    cy.get('[data-test="continue-shopping"]').click();
  }
  clickCheckoutButton() {
    cy.get('[data-test="checkout"]').click();
  }
  clickRemoveButtonInCart(itemName) {
    cy.contains(".cart_item", itemName).find("button").click();
  }
  clickProductName(itemName) {
    cy.contains(".cart_item", itemName).find('[data-test="inventory-item-name"]').click();
  }
  verifyIteminCart(itemName) {
    cy.contains(".cart_item", itemName).should("be.visible");
  }
  verifyItemNotinCart(itemName) {
    cy.contains(".cart_item", itemName).should("not.exist");
  }
  verifyInventoryPage() {
    cy.url().should("include", "/inventory.html");
  }
  verifyCheckoutStepOnePage() {
    cy.url().should("include", "/checkout-step-one.html");
  }
}

export default new CartPage();
