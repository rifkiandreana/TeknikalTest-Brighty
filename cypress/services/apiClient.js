const BASE_URL = "https://reqres.in";

export const apiRequest = ({ method, endpoint, body = null, headers = {}, failOnStatusCode = true }) => {
  return cy.request({
    method,

    url: `${BASE_URL}${endpoint}`,

    body,

    failOnStatusCode,

    headers: {
      "x-api-key": Cypress.env("apiKey"),

      "Content-Type": "application/json",

      ...headers,
    },
  });
};
