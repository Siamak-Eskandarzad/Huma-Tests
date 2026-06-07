# Huma-Tests — Cypress Test Suite for Tic-Tac-Toe

This repository contains automated E2E tests (Cypress) and a manual Bug & Security Assessment Report for a Tic-Tac-Toe web application, prepared as part of the QA Automation Engineer assessment for Huma.

---

## Setup

```bash
npm install
```

---

## How to Run

**Step 1 — Serve the app**

Serve `index.html` on a local server first:

```bash
npx serve /path/to/folder-containing-index.html
```

This starts a server at `http://localhost:3000`.

**Step 2 — Run the tests**

```bash
# Run all tests in the terminal
npm test

# Open Cypress UI (easier to see what is happening)
npm run test:open
```

---

## Test Files

| File                           | What it tests                             |
| ------------------------------ | ----------------------------------------- |
| `cypress/e2e/auth.spec.js`     | Register, login, validation, BUG-03       |
| `cypress/e2e/gameplay.spec.js` | Moves, win, draw, new game, reset, BUG-07 |
| `cypress/e2e/hint.spec.js`     | Hint button behavior, BUG-02              |

---

## Manual Test Report

A full Bug & Security Assessment Report (14 findings, OWASP-aligned) is available here:
[Bug\_Security\_Report.pdf](./Manual-Test-Report/Bug_Security_Report.pdf)

---

## Notes

- Tests marked `[BUG-XX]` are **expected to fail** — they document known bugs and will catch them once fixed.
- The `baseUrl` in `cypress.config.js` is set to `http://localhost:3000`. Change it if your server runs on a different port.
