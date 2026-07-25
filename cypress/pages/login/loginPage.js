class LoginPage {
  visit() {
    cy.visit("https://www.saucedemo.com/");
  }
  inputUsername(username) {
    cy.get("#user-name").type(username);
  }
  inputPassword(password) {
    cy.get("#password").type(password);
  }
  clickLoginButton() {
    cy.get("#login-button").click();
  }
  validateSuccessLogin() {
    cy.url().should("include", "/inventory.html");
  }
  validateErrorMessageLogin(expectedMessage) {
    cy.get("[data-test='error']").should("be.visible").and("have.text", expectedMessage);
  }
}

export default new LoginPage();
