const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',

  e2e: {
    watchForFileChanges : false,
    // defaultCommandTimeout: 3000,
    failOnStatusCode: false,
    setupNodeEvents(on, config) {

      require('cypress-mochawesome-reporter/plugin')(on);

      // implement node event listeners here
    },
  },
});
