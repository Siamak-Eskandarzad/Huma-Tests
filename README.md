# Cypress Tests — Tic-Tac-Toe

## Setup

```bash
npm install

```

## How to run

**Step 1 — Serve the app**

You need to serve `index.html` on a local server first.
The easiest way:

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

## Test files

| File                           | What it tests                             |
| ------------------------------ | ----------------------------------------- |
| `cypress/e2e/auth.spec.js`     | Register, login, validation, BUG-03       |
| `cypress/e2e/gameplay.spec.js` | Moves, win, draw, new game, reset, BUG-07 |
| `cypress/e2e/hint.spec.js`     | Hint button behavior, BUG-02              |

---

## Notes

- Tests marked `[BUG-XX]` are **expected to fail** right now because the bug still exists.
  That is normal — they are there to document the bug and catch it when it gets fixed.
- The `baseUrl` in `cypress.config.js` is set to `http://localhost:3000`.
  Change it if your server runs on a different port.
