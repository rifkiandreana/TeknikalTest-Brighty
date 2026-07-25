import LoginPage from "../../pages/login/loginPage";

describe("Login Test", () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
    LoginPage.visit();
  });

  it("TC-01 | Login successfully with valid credentials", () => {
    LoginPage.inputUsername("standard_user");
    LoginPage.inputPassword("secret_sauce");
    LoginPage.clickLoginButton();
    LoginPage.validateSuccessLogin();
  });
  it("TC-02 | Login with username and password empty", () => {
    LoginPage.clickLoginButton();
    LoginPage.validateErrorMessageLogin("Epic sadface: Username is required");
  });
  it("TC-03 | Login with username empty", () => {
    LoginPage.inputPassword("secret_sauce");
    LoginPage.clickLoginButton();
    LoginPage.validateErrorMessageLogin("Epic sadface: Username is required");
  });
  it("TC-04 | Login with password empty", () => {
    LoginPage.inputUsername("standard_user");
    LoginPage.clickLoginButton();
    LoginPage.validateErrorMessageLogin("Epic sadface: Password is required");
  });
  it("TC-05 | Login with invalid username", () => {
    LoginPage.inputUsername("invalid_user");
    LoginPage.inputPassword("secret_sauce");
    LoginPage.clickLoginButton();
    LoginPage.validateErrorMessageLogin("Epic sadface: Username and password do not match any user in this service");
  });
  it("TC-06 | Login with invalid password", () => {
    LoginPage.inputUsername("standard_user");
    LoginPage.inputPassword("invalid_password");
    LoginPage.clickLoginButton();
    LoginPage.validateErrorMessageLogin("Epic sadface: Username and password do not match any user in this service");
  });
});
