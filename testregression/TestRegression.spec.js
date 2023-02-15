const { test, expect } = require('@playwright/test');
const { HomePage } = require('../PageObject/HomePage');


test('HomePage', async ({ page }) => {
    const homePage = new HomePage(page)
    await homePage.doBefore()
})