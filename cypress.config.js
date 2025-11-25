const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '5atmoj',
  retries: 0,
  e2e: {
    baseUrl: "https://qamid.tmweb.ru",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
