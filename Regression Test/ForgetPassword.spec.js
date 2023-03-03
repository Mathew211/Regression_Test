const { test, expect } = require('@playwright/test');
const { ForgetPasswordAssertions } = require('../PageObject/Assertions/ForgetPasswordAssertions');
const { Before } = require('../PageObject/Steps/Before');
const { ForgetPassword } = require('../PageObject/Steps/ForgetPassword');




test.beforeEach(async ({ page }) => {

    const homePage = new Before(page);
    await homePage.doBefore();
});

// test ('Check website wchich remind you your password ', async({page}) => {
//   const forgetPassword = new ForgetPassword(page)
//   await forgetPassword.forgetPassworDontWorry()
//   const remindisCorrect = new ForgetPasswordAssertions(page)
//   await remindisCorrect.remindIsCorrect()
// })
test ('Check on remind website when email is wrong   ', async({page}) => {
    const wrongEmail = new ForgetPassword(page)
    await wrongEmail.wrongEmail()
    const remindisEmailIncorrect = new ForgetPasswordAssertions(page)
    await remindisEmailIncorrect.wrongRemindEmail()
  })