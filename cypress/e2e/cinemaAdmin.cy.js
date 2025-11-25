const login = require("../fixtures/login.json");
const hall = require("../fixtures/hall.json");

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

it("Selecting a movie from the admin panel", () => {
  cy.visit("/admin");
  cy.login(`${login.validEmail}`, `${login.validPass}`);
  cy.get(".conf-step__movie-title")
    .eq(`${hall.movie}`)
    .invoke("text")
    .then((nameOfTheMovie) => {
      cy.visit("/client");
      cy.get(`a:nth-child(${hall.day})`).click();
      cy.get(".movie__info")
        .contains(nameOfTheMovie)
        .parents(".movie")
        .find(".movie-seances__time")
        .first()
        .click();
    });
  cy.get(`div:nth-child(${hall.row}) span:nth-child(${hall.seat})`).click();
  cy.contains("Забронировать").click();
  cy.contains("Вы выбрали билеты").should("be.visible");
});
