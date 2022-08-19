/// <reference types="Cypress" />
const dataJson = require("../../fixtures/example");
describe("api test cases", () => {
  var payload = "";
  let accesstoken =
    "d3f03d0f4218b3db1ea04a4f7d844ecf80d4b3cf46b523917b8f1eb08bd322bb";
  it("get user", () => {
    cy.request({
      method: "GET",
      url: "https://gorest.co.in/public-api/users/3550/posts",
      headers: {
        Authorization: "Bearer " + accesstoken,
      },
    }).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body.meta.pagination).has.property("limit", 10);
      expect(res.body).has.to.deep.equal({
        code: 200,
        meta: {
          pagination: {
            total: 0,
            pages: 0,
            page: 1,
            limit: 10,
          },
        },
        data: [],
      });
    });
  });

  it("get user by id", () => {
    cy.request({
      method: "GET",
      url: "https://gorest.co.in/public/v2/users/3547",
      headers: {
        authorization: "Bearer " + accesstoken,
      },
    }).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body.name).to.eq("Fr. Vedanshi Nair");
    });
  });
});
