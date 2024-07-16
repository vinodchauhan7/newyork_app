import React from "react";

describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/');
    cy.get("[data-testid=heading]")
      .should("exist")
      .should("have.text", "The New York Times");
  });

  it("Render Articles", () => {
    cy.visit("http://localhost:3000/");
    cy.intercept({
      method: "GET",
      url: "https://api.nytimes.com/svc/mostpopular/**",
    }).as("getArticles");
    cy.wait(3000);

    cy.get('[data-testid^="articleCard"]').should("exist");
  });
});