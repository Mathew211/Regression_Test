const { test, expect } = require('@playwright/test');
const { LoginAssertions } = require('../PageObject/Assertions/LoginAssertions');
const { Before } = require('../PageObject/Steps/Before');
const { Login } = require('../PageObject/Steps/Login');



test.beforeEach(async ({ page }) => {

    const homePage = new Before(page);
    await homePage.doBefore();
});
// test('Check looging when is correct  ', async({page}) => {

//     const newLogiging = new Login(page)    
//     await newLogiging.correctLogin()
//     const correctLogin = new LoginAssertions(page)
//     await correctLogin.assertLoggingWhereIsCorrect()

// })
// test ('Check when login/password is wrong ', async({page}) => {
//     const wrongLogin = new Login(page);
//     await wrongLogin.wrongLogin()
//     const assertWrongLogin = new LoginAssertions(page)
//     await assertWrongLogin.assertLoggingWhereIsNoCorrect()

// })

// test ('Check where fields are epmty ', async({page}) => {
//     const emptyFields = new Login(page);
//     await emptyFields.emptyFieldsDurningLogin();
//     const assertEmptyFields = new LoginAssertions(page);
//     await assertEmptyFields.assertWhereFieldsAreEmpty();

// })

test ('Check is eamil correct', async({page}) => {
    const wrongEmail = new Login(page);
    await wrongEmail.wrongEmail();
    const assertInCorrectEmail = new LoginAssertions(page);
    await assertInCorrectEmail.assertWhenEmailIsWrong();

})
