const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    // Point this to wherever you serve index.html
    // e.g. run: npx serve . then set baseUrl to http://localhost:3000
    baseUrl: 'http://localhost:3000',
    specPattern: 'cypress/e2e/**/*.spec.js',
    supportFile: 'cypress/support/e2e.js',
    viewportWidth: 1280,
    viewportHeight: 800,
  },
})
