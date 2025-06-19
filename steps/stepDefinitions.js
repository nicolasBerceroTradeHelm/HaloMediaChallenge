const { Given, When, Then, Before, After, setDefaultTimeout } = require('@cucumber/cucumber');
const { chromium, expect } = require('@playwright/test');
const { pageActions } = require('../pages/pageActions.page');

let browser, context, page, playwrightTest;

setDefaultTimeout(60 * 1000);

Before(async () => {
  browser = await chromium.launch({ headless: true });
  context = await browser.newContext();
  page = await context.newPage();
  playwrightTest = new pageActions(page);
  await playwrightTest.gotoHomePage();
});

After(async () => {
  await browser.close();
});

When('I click the Docs button', async () => {
  await playwrightTest.clickButton('Docs');
});

Then('I should see the text Installation', async () => {
  await playwrightTest.validateText('Installation');
});

When('I search for {string}', async (searchTerm) => {
  await playwrightTest.searchInSearchField(searchTerm);
});

When('I click the first search result for {string}', async (text) => {
  await playwrightTest.clickOnFirstSearchResult(text);
});

Then('the URL should contain {string}', async (partialUrl) => {
  await playwrightTest.validateUrl(partialUrl);
});

When('I click the Community link', async () => {
  await playwrightTest.clickByRole('link', 'Community');
});

Then('I should see the Welcome text', async () => {
  await playwrightTest.validateText('Welcome');
});

When('I click the Learn Playwright button and a new window opens', async () => {
  const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    playwrightTest.clickButton('Learn Playwright'),
  ]);
  global.newPage = newPage;
  await newPage.waitForLoadState();
});

Then('the new window should contain URL matching {string}', async (partialUrl) => {
  await expect(global.newPage).toHaveURL(new RegExp(partialUrl));
});

Then('the new window should contain a heading with {string}', async (text) => {
  await expect(global.newPage.locator('h1')).toContainText(new RegExp(text, 'i'));
});
