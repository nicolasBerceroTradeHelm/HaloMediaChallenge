const { test } = require('@playwright/test');
const { pageActions } = require('../pages/pageActions.page');

let playwrightTest;

test.beforeEach(async ({ page }) => {
  playwrightTest = new pageActions(page);
  // Open the homepage.
  await playwrightTest.gotoHomePage();
});

test('Search browserContext and validate URL', async () => {
  // Navigate to the Docs section from the main menu.
  await playwrightTest.clickButton('Docs');
  // Confirm that the page title is "Installation".
  await playwrightTest.validateText('Installation');
  // Click the search icon
  // Type browserContext into the search input.
  await playwrightTest.searchInSearchField('browserContext');
  // Click on the result related to browserContext.
  await playwrightTest.clickOnFirstSearchResult('browserContext');
  //Verify that the URL contains /class-browsercontext.
  await playwrightTest.validateUrl(/class-browsercontext/);
});
