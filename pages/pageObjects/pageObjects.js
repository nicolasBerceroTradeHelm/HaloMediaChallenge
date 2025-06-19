module.exports = {
    getByRole: (page, role, name) => page.getByRole(role, { name }),
    headingByName: (page, expectedText) => page.locator(`role=heading[name="${expectedText}"]`),
    getByText: (page, text) => page.locator(`text=${text}`),
    getByClass: (page, classList) => page.locator(`.${classList.split(' ').join('.')}`),
};
