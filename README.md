# Huma-Tests — QA Automation & Security Test Suite (Cypress)

This repository contains a full **End-to-End test automation suite (Cypress)** along with a **manual QA & Security Assessment Report** for a Tic-Tac-Toe web application.

It was created as part of a **QA Automation Engineer assessment for Huma**, focusing on:
- Functional testing
- Game logic validation
- Security & session analysis
- Exploratory bug discovery (OWASP-aligned)

---

## 📌 Project Overview

This project evaluates a browser-based Tic-Tac-Toe application using both:

- 🧪 Automated E2E testing (Cypress)
- 🕵️ Manual exploratory testing
- 🔐 Security-focused analysis (OWASP Top 10 inspired)

It covers authentication flaws, session handling issues, game logic defects, input validation weaknesses, and localization problems.

---

## ⚙️ Setup

Install dependencies:

```bash
npm install
```

---

## 🚀 How to Run Tests

### Step 1 — Start the application

Serve the `index.html` file locally:

```bash
npx serve /path/to/folder-containing-index.html
```

Application will be available at:
```
http://localhost:3000
```

---

### Step 2 — Run Cypress Tests

#### Run all tests (headless mode)
```bash
npm test
```

#### Open Cypress UI (interactive mode)
```bash
npm run test:open
```

---

## 🧪 Test Suite Structure

| File                           | Coverage Area                          |
|--------------------------------|--------------------------------------|
| `cypress/e2e/auth.spec.js`     | Authentication, validation, BUG-03   |
| `cypress/e2e/gameplay.spec.js` | Game logic, win/draw/reset, BUG-07   |
| `cypress/e2e/hint.spec.js`     | Hint system behavior, BUG-02         |

---

## 🧠 Test Strategy

This project uses a hybrid QA approach:

### 🔹 Functional Testing
- Login / registration flows
- Game mechanics (moves, win/draw conditions)
- Reset and new game behavior

### 🔹 Negative Testing
- Invalid usernames
- Emoji-only inputs
- Edge-case gameplay scenarios

### 🔹 Security Testing (OWASP-inspired)
- Session manipulation via localStorage
- Authentication bypass attempts
- Data exposure in client storage

### 🔹 Exploratory Testing
- Multi-tab behavior
- Page refresh persistence
- UI overflow & input abuse

---

## 📊 Manual Test Report

A full **Bug & Security Assessment Report (14 findings)** is included:

📄 [Bug_Security_Report.pdf](./Manual-Test-Report/Bug_Security_Report.pdf)

### Summary:
- 🔴 4 Critical issues
- 🟠 6 High severity issues
- 🟡 3 Medium issues
- 🔵 1 Informational finding

---

## 🚨 Key Security Findings

- No password-based authentication
- Session token is the username (insecure design)
- User data stored in plain text (localStorage)
- Session persistence vulnerabilities across tabs
- Input validation gaps (length, emoji, Unicode abuse)

---

## 🧾 Test Plan (High-Level)

Testing was performed using a structured exploratory approach covering:

- Authentication & session security
- Game logic correctness
- Input validation rules
- Data storage security
- Localization consistency
- UI state persistence (refresh / multi-tab)

---

## 📝 Notes

- Tests marked with `[BUG-XX]` correspond to known issues documented in the manual report.
- Some tests are intentionally expected to fail until bugs are fixed.
- Default Cypress base URL:
```
http://localhost:3000
```

---

## 🎯 Purpose of This Project

This repository demonstrates practical QA engineering work on a real web application, including:

- Cypress-based end-to-end test automation for core user flows
- Manual exploratory testing across authentication, game logic, and session handling
- Identification and documentation of functional and security-related defects
- Application of OWASP Top 10 concepts in real testing scenarios (e.g. authentication, session management, and insecure storage)
- Structured QA documentation including a Test Plan and a detailed Bug & Security Report

The focus of this project is on practical testing quality, defect discovery, and real-world QA reasoning rather than theoretical coverage.
