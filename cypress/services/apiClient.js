const BASE_URL = "https://reqres.in";

export const apiRequest = ({ method, endpoint, body = null, headers = {} }) => {
  return cy.request({
    method,

    url: `${BASE_URL}${endpoint}`,

    body,

    headers: {
      "x-api-key": Cypress.env("apiKey"),

      "Content-Type": "application/json",

      ...headers,
    },
  });
};
