const { defineConfig } = require('cypress')

module.exports = defineConfig({
  video: false,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:8080',
  },
  // e2e: {
  //   setupNodeEvents(on, config) {
  //     // implement node event listeners here
  //   }
  // },
  chromeWebSecurity: false
})
