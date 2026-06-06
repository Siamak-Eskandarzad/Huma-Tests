// cypress/e2e/auth.spec.js
// Covers: Register, Login, and related edge cases

describe('Authentication', () => {

  beforeEach(() => {
    // Clear storage before each test so users don't carry over
    cy.clearLocalStorage()
    cy.visit('/')
  })

  // ── Happy path ──────────────────────────────────────────────────────────

  it('registers a new user and lands on the game screen', () => {
    cy.get('[data-testid="input-name"]').type('Alice')
    cy.get('[data-testid="btn-register"]').click()
    cy.get('[data-testid="view-play"]').should('be.visible')
  })

  it('logs in with an existing username', () => {
    // First create the user
    cy.register('Alice')
    cy.clearLocalStorage().then(() => {
      // Re-seed just the users key so the session is gone but the user exists
      cy.window().then((win) => {
        const users = win.localStorage.getItem('ttt_users') || '{}'
        // Just visit again — register creates the user, logout clears session
      })
    })

    // A simpler approach: register, log out, then log back in
    cy.register('Bob')
    cy.get('[data-testid="btn-logout"]').click()
    cy.get('[data-testid="btn-switch-mode"]').click() // switch to login
    cy.get('[data-testid="input-name"]').type('Bob')
    cy.get('[data-testid="btn-login"]').click()
    cy.get('[data-testid="view-play"]').should('be.visible')
  })

  // ── Validation ───────────────────────────────────────────────────────────

  it('shows an error when the name field is empty', () => {
    cy.get('[data-testid="btn-register"]').click()
    cy.get('[data-testid="auth-error"]').should('be.visible')
  })

  it('shows an error when the name is too short (less than 2 chars)', () => {
    cy.get('[data-testid="input-name"]').type('A')
    cy.get('[data-testid="btn-register"]').click()
    cy.get('[data-testid="auth-error"]').should('be.visible')
  })

  it('shows an error when registering with a name that already exists', () => {
    cy.register('Alice')
    cy.get('[data-testid="btn-logout"]').click()
    cy.get('[data-testid="input-name"]').type('Alice')
    cy.get('[data-testid="btn-register"]').click()
    cy.get('[data-testid="auth-error"]').should('be.visible')
  })

  it('shows an error when logging in with a name that does not exist', () => {
    cy.get('[data-testid="btn-switch-mode"]').click()
    cy.get('[data-testid="input-name"]').type('nobody')
    cy.get('[data-testid="btn-login"]').click()
    cy.get('[data-testid="auth-error"]').should('be.visible')
  })

  // ── BUG-03 — Emoji username ───────────────────────────────────────────────
  // Expected: emoji-only usernames should be rejected
  // Actual:   they are accepted (known bug)

  it('[BUG-03] rejects an emoji-only username', () => {
    cy.get('[data-testid="input-name"]').type('😀🔥🎮')
    cy.get('[data-testid="btn-register"]').click()
    cy.get('[data-testid="auth-error"]').should('be.visible')
  })

})
