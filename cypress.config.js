const { defineConfig } = require("cypress");

module.exports = defineConfig({
  retries: 0,
  e2e: {
    baseUrl: "https://qamid.tmweb.ru",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
