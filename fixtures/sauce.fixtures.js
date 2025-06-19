// fixtures/sauce.fixtures.js
const { test: base } = require('@playwright/test');
const { SaucePage } = require('../pages/sauce.page');

let sharedData = {}; // Shared across tests

exports.test = base.extend({
    saucePage: async ({ page }, use) => {
        const saucePage = new SaucePage(page);
        await saucePage.gotoHomePage();
        await use(saucePage);
    },
    testData: async ({}, use) => {
        await use(sharedData);
    }
});

exports.expect = base.expect; // Re-export if you want to import expect
