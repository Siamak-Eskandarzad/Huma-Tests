// cypress/e2e/hint.spec.js
// Covers: hint button behavior
// Includes BUG-02: hint always suggests the same cell in Easy mode

describe('Hint', () => {

  beforeEach(() => {
    cy.clearLocalStorage()
    cy.register('TestUser')
    cy.get('[data-testid="select-difficulty"]').select('easy')
  })

  // ── Happy path ──────────────────────────────────────────────────────────

  it('hint button is enabled at the start of the game', () => {
    cy.get('[data-testid="btn-hint"]').should('not.be.disabled')
  })

  // it('hint button is disabled after the game ends', () => {
  //   // Play until the game ends (win or draw)
  //   const moves = [0, 2, 4, 6, 8]
  //   moves.forEach((cell) => {
  //     cy.get('[data-testid="status"]').invoke('attr', 'data-status').then((s) => {
  //       if (s === 'playing') cy.clickCell(cell)
  //     })
  //     cy.wait(400)
  //   })
  //   cy.get('[data-testid="status"]').invoke('attr', 'data-status').then((s) => {
  //     if (s !== 'playing') {
  //       cy.get('[data-testid="btn-hint"]').should('be.disabled')
  //     }
  //   })
  // })

  it('highlighted cell after hint is empty (not occupied)', () => {
    cy.get('[data-testid="btn-hint"]').click()
    // The hint cell gets class 'is-hint'
    cy.get('.is-hint').should('have.attr', 'data-state', 'empty')
  })

  // ── BUG-02 — Hint always suggests the same cell ──────────────────────────
  // Expected: hint suggests a different valid cell after the previous one is taken
  // Actual:   hint always points to the same fixed cell (known bug in Easy mode)

  it('[BUG-02] hint should suggest a different cell after the previous one is occupied', () => {
    // Get the first hint
    cy.get('[data-testid="btn-hint"]').click()
    cy.get('.is-hint').invoke('attr', 'data-testid').then((firstHint) => {
      const firstIndex = firstHint.replace('cell-', '')

      // Click that cell to occupy it
      cy.clickCell(Number(firstIndex))
      cy.wait(500) // wait for computer move

      // Get a new hint
      cy.get('[data-testid="status"]').invoke('attr', 'data-status').then((s) => {
        if (s === 'playing') {
          cy.get('[data-testid="btn-hint"]').click()
          cy.get('.is-hint').invoke('attr', 'data-testid').then((secondHint) => {
            // The new hint should be a different cell
            expect(secondHint).not.to.eq(firstHint)
            // And the suggested cell should be empty
            cy.get(`.is-hint`).should('have.attr', 'data-state', 'empty')
          })
        }
      })
    })
  })

})
