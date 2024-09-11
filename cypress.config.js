const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",


  e2e: {
    supportFile: false,
    video: true,
    photo: true,
    watchForFileChanges: false,
    failOnStatusCode: false,
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);


    },
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
});
