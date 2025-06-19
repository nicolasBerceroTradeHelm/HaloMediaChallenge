# 📘 Part 1 – PlaywrightTestKopius  
**Playwright Challenge**

This project is an automated test suite built with [Playwright](https://playwright.dev/) for validating core functionality of the Playwright documentation website. 

**Author**  
- Nicolas Bercero

---

This Playwright test project automates the functional validation of the Playwright documentation site.  
It uses a modular Page Object Model (POM) structure to promote code reusability and maintainability.

The `pageActions` class encapsulates user interactions such as:
- Navigating to the homepage
- Clicking buttons
- Interacting with the search bar
- Verifying text on the page
- Validating the resulting URL

Each interaction is abstracted behind descriptive methods, making the test flow clean and readable.

---

The actual test, **Search browserContext and validate URL**, mimics a realistic user scenario:
- The user navigates to the Docs section
- Verifies the landing page
- Searches for `browserContext` using the site's built-in search feature
- Clicks on the first result
- Confirms the URL change corresponds to the **BrowserContext** class documentation

Utility locators in `pageObjects.js` abstract selectors by role, class, and text, enabling dynamic element resolution without hardcoding complex selectors.  
This structure supports scalable, readable, and maintainable automated testing.

---

## 📁 Project Structure

```text
.
├── pages/
│   ├── pageActions.page.js       # Encapsulates user interactions (POM)
│   └── pageObjects.js            # Reusable dynamic locator utilities
├── tests/
│   └── playwright-docs.spec.js   # Functional test cases
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the Test

```bash
npx playwright test
```

> 💡 Tip: To run in headed mode:
```bash
npx playwright test --headed
```

---

# 📝 Part 2 – Functional Test Case

### **User Story**

> As a user, I want to edit my phone number in the profile section so I can keep my contact information up to date.

---

### **Acceptance Criteria**
- The "Phone" field shows the current phone number.
- The **Save** button is only enabled if the field was modified with a valid value.
- The phone number must be validated (10 numeric digits).
- A confirmation message appears after saving.
- If there's a network error, a clear error message must be displayed.

---

### ✅ Test Case: Edit Phone Number with Valid Input and Handle Network Failure

#### **Test Data**
- Figma Mockups  
- Valid Phone Numbers  
- Valid User  

#### **Preconditions**
- User is logged in (Valid Login)
- User navigates to the Profile section
- The Phone field is visible and displays the current phone number

#### **Test Steps**

```text
1. Validate that the Phone field shows a valid number and Save is disabled
2. Clear the Phone field
3. Enter a new valid 10-digit phone number 
4. Confirm that Save becomes enabled
5. Click Save
6. Validate that a confirmation message is displayed
```

#### **Expected Result**

- Save button activates only after valid input
- If a network error occurs during save:
  - An error message appears
  - No change is saved

---

###  Simulating a Network Error 

You can simulate an error using the following methods:

- **DevTools**: Block the save request manually in the Network tab
- **Requestly or similar tool**: Force a 500 response
- **Backend override**: Temporarily return a 500 error
- **Quick method**: Disable your network or Wi-Fi before clicking Save

---

### 🧪 How to Validate the Error Message

```text
1. Confirm that the UI displays an error message appropriately
2. Verify the message content and styling follows design/UX specs
3. Ensure the page does not crash or reload unexpectedly
4. Check the console for proper error logging (no unhandled exceptions)
```

---
