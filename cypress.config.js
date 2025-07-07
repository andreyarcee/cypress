const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "9jw685",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    video: false,
    screenshots: true,
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/result',
      overwrite: false,
      html: true,
      json: false,
      timestamp: "ammddyyyy_HHMMss"
    },
  },
});
