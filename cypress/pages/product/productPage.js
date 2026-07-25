class ProductPage {
  clickAddToCartButton(itemName) {
    cy.contains(".inventory_item", itemName).find("button").click();
  }
  verifyAddToCart(itemName) {
    cy.contains(".inventory_item", itemName).find("button").should("have.text", "Remove");
  }
  clickRemoveFromCartButton(itemName) {
    cy.contains(".inventory_item", itemName).find("button").click();
  }
  verifyRemoveFromCart(itemName) {
    cy.contains(".inventory_item", itemName).find("button").should("have.text", "Add to cart");
  }
  selectActiveSortOptionsButton(value) {
    cy.get('[data-test="product-sort-container"]').select(value);
  }
  verifyActiveSortOption(value) {
    cy.get('[data-test="product-sort-container"]').should("have.value", value);
  }
  verifyCartBadgeNotExist() {
    cy.get('[data-test="shopping-cart-badge"]').should("not.exist");
  }
  clickProductName(itemName) {
    cy.contains('[data-test="inventory-item-name"]', itemName).click();
  }
  verifyProductDetailName(itemName) {
    cy.contains('[data-test="inventory-item-name"]', itemName).should("be.visible");
  }
}

export default new ProductPage();
