const { expect } = require('@playwright/test');
const locators = require('./pageObjects/pageObjects.js');

class pageActions {
  constructor(page) {
    this.page = page;
  }

  async gotoHomePage() {
    await this.page.goto('https://playwright.dev/');
    // load Validation
    await expect(this.page).toHaveTitle(/Playwright/);
  }

  async clickButton(buttonString) {
    const buttonLocator = locators.getByText(this.page, buttonString);
    await buttonLocator.click();
  }

  async validateText(expectedTest) {
    await expect(locators.headingByName(this.page, expectedTest)).toBeVisible();
    // I would use a switch statement here dependeing on the expectedTest value on a day to day scenario
  }

  async searchInSearchField(searchString) {
    const searchButton = locators.getByClass(this.page, 'DocSearch DocSearch-Button');
    await searchButton.click();
    await expect(locators.getByRole(this.page, 'searchbox', 'Search')).toBeVisible();
    const searchField = locators.getByRole(this.page, 'searchbox', 'Search');
    await searchField.fill(searchString);
    // added a short wait to ensure the search results are loaded
    await this.page.waitForTimeout(2000);
  }

  async clickOnFirstSearchResult(searchString) {
    const firstSearchResult = locators.getByText(this.page, searchString).first();
    await expect(firstSearchResult).toBeVisible();
    await firstSearchResult.click();
  }

  async validateUrl(expectedUrl) {
    await expect(this.page).toHaveURL(expectedUrl);
  }

}

module.exports = { pageActions };
