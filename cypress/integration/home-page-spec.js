describe("The Home Page", function() {
  beforeEach(() => {
    cy.visit("/");
  });

  it("h2 should have proper text", () => {
    cy.get("h2:first").should(
      "have.text",
      "Here are some links to help you start: "
    );
  });

  it("links should have proper text", () => {
    cy.get("ul").within(() => {
      cy.get("h2 a:first").should(
        "have.attr",
        "href",
        "https://angular.io/tutorial"
      );
      cy.get("h2 a:last").should(
        "have.attr",
        "href",
        "https://blog.angular.io/"
      );
    });
  });
});
