import { apiRequest } from "../../services/apiClient";

describe("Users API", () => {
  it("TC-01 | Get User By ID", () => {
    apiRequest({
      method: "GET",
      endpoint: "/api/users/1",
    }).then((response) => {
      cy.log(`Status Code : ${response.status}`);
      cy.log(`Response Time : ${response.duration} ms`);
      cy.log(`Response Body : ${JSON.stringify(response.body)}`);
      expect(response.body.data).to.have.property("id", 1);
      expect(response.body.data).to.have.property("email", "george.bluth@reqres.in");
      expect(response.status).to.eq(200);
    });
  });

  it("TC-02 | Get List Users", () => {
    apiRequest({
      method: "GET",
      endpoint: "/api/users",
    }).then((response) => {
      cy.log(`Status Code : ${response.status}`);
      cy.log(`Response Time : ${response.duration} ms`);
      cy.log(`Response Body : ${JSON.stringify(response.body)}`);
      expect(response.body.data).to.be.an("array");
      expect(response.body.data[0]).to.have.property("email", "george.bluth@reqres.in");
      expect(response.status).to.eq(200);
    });
  });

  it("TC-03 | Create User", () => {
    const requestBody = {
      name: "John Doe",
      job: "Software Engineer",
    };
    apiRequest({
      method: "POST",
      endpoint: "/api/users",
      body: requestBody,
    }).then((response) => {
      cy.log(`Status Code : ${response.status}`);
      cy.log(`Response Time : ${response.duration} ms`);
      cy.log(`Response Body : ${JSON.stringify(response.body)}`);
      expect(response.body).to.have.property("name", requestBody.name);
      expect(response.body).to.have.property("job", requestBody.job);
      expect(response.status).to.eq(201);
    });
  });

  it("TC-04 | Update User", () => {
    const requestBody = {
      name: "Jane Doe",
      job: "Senior Quality Assurance Engineer",
    };
    apiRequest({
      method: "PUT",
      endpoint: "/api/users/1",
      body: requestBody,
    }).then((response) => {
      cy.log(`Status Code : ${response.status}`);
      cy.log(`Response Time : ${response.duration} ms`);
      cy.log(`Response Body : ${JSON.stringify(response.body)}`);
      expect(response.body).to.have.property("name", requestBody.name);
      expect(response.body).to.have.property("job", requestBody.job);
      expect(response.status).to.eq(200);
    });
  });
  it("TC-05 | Delete User", () => {
    apiRequest({
      method: "DELETE",
      endpoint: "/api/users/1",
    }).then((response) => {
      cy.log(`Status Code : ${response.status}`);
      cy.log(`Response Time : ${response.duration} ms`);
      expect(response.status).to.eq(204);
    });
  });
});
