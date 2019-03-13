describe("NgDoc.io Tests", function() {
  beforeEach(() => {
    cy.visit("http://ngdoc.io");
  });

  it("input should allow search", () => {
    cy.get("input#keyword").type("NgRx{enter}");

    cy.get("article").should("have.length", 27);
  });

  describe("stubbed tests", () => {
    beforeEach(() => {
      cy.server();
      cy.fixture("articles.json").as("articlesJSON");
      cy.fixture("articles.full.json").as("articlesFullJSON");
    });

    it("stubbed data calls", () => {
      cy.route({
        method: "POST",
        url: "/api/articles/search",
        response: []
      });

      cy.get("input#keyword").type("NgRx{enter}");

      cy.get("article").should("have.length", 0);
    });

    it("stubbed data calls using fixtures with small return", () => {
      cy.route("POST", "/api/articles/search", "@articlesJSON");

      cy.get("input#keyword").type("NgRx{enter}");

      cy.get("article").should("have.length", 3);
    });

    it("stubbed data calls using fixtures with full return", () => {
      cy.route("POST", "/api/articles/search", "@articlesFullJSON");

      cy.get("input#keyword").type("NgRx{enter}");

      cy.get("article").should("have.length", 26);
    });
  });
});
