const { defineConfig } = require("cypress");
const { allureCypress } = require("allure-cypress/reporter");
const { plugin: cypressGrepPlugin } = require("@cypress/grep/plugin");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      allureCypress(on, config);
      cypressGrepPlugin(config);
      return config;
      // implement node event listeners here
    },
  },
});
