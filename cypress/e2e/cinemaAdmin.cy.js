const login = require("../fixtures/login.json");

it("should open main page", () => {
  cy.visit("/admin");
  cy.contains("Администраторррская").should("be.visible");
});

it("Should successfully login", () => {
  cy.visit("/admin");
  cy.login(`${login.validEmail}`, `${login.validPass}`);
  cy.contains("Управление залами").should("be.visible");
});

it("Should unsuccessfully login", () => {
  cy.visit("/admin");
  cy.login(`${login.validEmail}`, `${login.invalidPass}`);
  cy.contains("Ошибка авторизации!").should("be.visible");
});

it.only("Selecting a movie from the admin panel", () => {
  cy.visit("/admin");
  cy.login(`${login.validEmail}`, `${login.validPass}`);
  cy.get("div:nth-child(2) > div:nth-child(4) > h3:nth-child(2)")
    .invoke("text")
    .then((nameOfTheMovie) => {
      cy.visit("/client");
      cy.get("a:nth-child(4)").click();
      cy.get(".movie__info")
        .contains(nameOfTheMovie)
        .then(($el) => {
          cy.log($el);
        });
    });
});
