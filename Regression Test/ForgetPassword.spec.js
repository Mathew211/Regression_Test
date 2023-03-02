const { test, expect } = require('@playwright/test');
const { Before } = require('../PageObject/Steps/Before');
const { ForgetPassword } = require('../PageObject/Steps/ForgetPassword');




test.beforeEach(async ({ page }) => {

    const homePage = new Before(page);
    await homePage.doBefore();
});

test ('Check website wchich remind you your password ', async({page}) => {
  const forgetPassword = new ForgetPassword(page)
  await forgetPassword.forgetPassworDontWorry()
})