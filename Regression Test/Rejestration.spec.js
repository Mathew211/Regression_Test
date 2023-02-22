const { test, expect } = require('@playwright/test');
const { Assertions } = require('../PageObject/Assertions');
const { Before } = require('../PageObject/Before');
const { Rejestration } = require("../PageObject/Rejestration");

test.beforeEach(async ({ page }) => {

    const newaccount = new Rejestration(page);
    await newaccount.tenminutesmail()
    const homePage = new Before(page);
    await homePage.doBefore();
});



test('Checking rejestration',async({ page }) => {
    const newaccount = new Rejestration(page);
    await newaccount.correctCreateAccount();

    const craetedccount = new Assertions(page)
    craetedccount.rejestrationResult()
});
