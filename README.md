# 📘 PlaywrightTest Challenge

## Project Overview

This project is an automated test suite built with [Playwright](https://playwright.dev/) and [Cucumber](https://cucumber.io/) to validate core functionality of the Playwright documentation website. The framework is written in **JavaScript**, using a modular Page Object Model (POM) structure to ensure maintainability and scalability.

The `pageActions` class abstracts user interactions (navigation, clicking, searching, validation), making the test scenarios clean and readable.

---

## Why Playwright + Cucumber?

- **Playwright** was chosen for its fast, reliable browser automation with native support for multiple browsers and modern features like auto-waiting.
- **Cucumber** adds BDD-style human-readable feature files, improving collaboration between technical and non-technical stakeholders.
- This combination balances robust automation capabilities with clear, business-focused test scenarios.

---

## Automated Scenarios

The repo currently automates two key user scenarios on the Playwright docs site:

1. **Search `browserContext` and validate URL**  
   _Reasoning:_ Validates critical search functionality and navigation to API documentation — essential for users exploring Playwright’s core API.

2. **Open a new window from the Community tab and validate contents**  
   _Reasoning:_ Verifies UI behavior involving multiple windows/tabs, a common real-world scenario, ensuring robust multi-page support.

These scenarios were selected because they cover both typical navigation flows and slightly more complex interactions like new window handling.

---

## 📁 Project Structure

```text
├── pages/
│ ├── pageActions.page.js # User actions (POM)
│ └── pageObjects.js # Reusable selectors and locators
├── steps/
│ └── stepDefinitions.js # Cucumber step implementations
├── features/
│ └── playwrightTest.feature # Gherkin feature files describing scenarios
├── generate-report.js # Script to generate HTML report from cucumber JSON
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the Cucumber tests and generate report

```bash
npm run test:cucumber
```
💡 Tip: This command runs Cucumber tests, generates a JSON report, and creates an HTML report that opens automatically.
