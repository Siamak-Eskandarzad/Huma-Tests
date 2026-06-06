// cypress/support/commands.js

// Register a new user and land on the game screen
Cypress.Commands.add('register', (name) => {
  cy.visit('/')
  cy.get('[data-testid="input-name"]').type(name)
  cy.get('[data-testid="btn-register"]').click()
})

// Log in with an existing user
Cypress.Commands.add('login', (name) => {
  cy.visit('/')
  // Switch to login mode if needed
  cy.get('[data-testid="auth-form"]').then(($form) => {
    if ($form.attr('data-mode') === 'register') {
      cy.get('[data-testid="btn-switch-mode"]').click()
    }
  })
  cy.get('[data-testid="input-name"]').type(name)
  cy.get('[data-testid="btn-login"]').click()
})

// Click a board cell by index (0–8)
Cypress.Commands.add('clickCell', (index) => {
  cy.get(`[data-testid="cell-${index}"]`).click({force: true})
})
