const URL = "http://localhost:3000";

describe("Agregar frutas", () => {
  beforeEach(() => {
    cy.visit(URL);
  });

  it("Agrega una manzana correctamente", () => {
    cy.get("input").type("manzana{enter}");
    cy.get("div#fruit-list").find("div").should("have.length", 1);
    cy.get("div").should("contain.text", "😊 🍎 Manzana");
  });

  it("Agrega otras frutas correctamente", () => {
    cy.get("input").type("pera{enter}");
    cy.get("div").should("contain.text", "🤬 pera");

    cy.get("input").type("fresa{enter}");
    cy.get("div#fruit-list").find("div").should("have.length", 2);
    cy.get("div:nth-child(2)").should("contain.text", "🤬 fresa");
  });

  it("Borra todas las frutas", () => {
    cy.get("input").type("manzana{enter}");
    cy.get("input").type("pera{enter}");
    cy.get("div#fruit-list").find("div").should("have.length", 2);

    cy.contains("Borrar todo").click();

    cy.get("div#fruit-list").should("not.exist");
  });
});
