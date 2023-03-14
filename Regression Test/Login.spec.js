const { test, expect } = require('@playwright/test');
const { LoginAssertions } = require('../PageObject/Assertions/LoginAssertions');
const { Before } = require('../PageObject/Steps/Before');
const { Login } = require('../PageObject/Steps/Login');



test.describe('Login process ', () => {


    test.beforeEach(async ({ page }) => {

        const homePage = new Before(page);
        await homePage.doBefore();
    });
    test.afterEach(async ({ page }) => {
        const homePage = new Before(page);
        await homePage.visit()
    })

    test('When login is correct ', async ({ page }) => {
        const email = 'mateuszoliszewskitest@op.pl'
        const password = 'Testy123!!'
        const correctLoginProcess = new Login(page)
        await correctLoginProcess.correctLogIn(email, password)
        const correctLogin = new LoginAssertions(page)
        await correctLogin.assertLoggingWhereIsCorrect()

    })
    test('When login/password is wrong ', async ({ page }) => {
        const email = 'mateuszoliszewkitest@op.pl'
        const password = 'Testy23!!'
        const wrongPasswordOrEmail = new Login(page);
        await wrongPasswordOrEmail.wrongLogIn(email, password);
        const assertIncorrectLoginOrPassword = new LoginAssertions(page);
        await assertIncorrectLoginOrPassword.assertWhenEmailIOrPasswordWrong();

    })
    test('When fields are epmty ', async ({ page }) => {
        const emptyFields = new Login(page);
        await emptyFields.emptyFiedls();
        const assertEmptyFields = new LoginAssertions(page);
        await assertEmptyFields.assertWhereFieldsAreEmpty();

    })
    test('When eamil is incorrect', async ({ page }) => {
        const email = 'testtest.com '
        const wrongEmail = new Login(page);
        await wrongEmail.wrongEmail(email)
        const assertInCorrectEmail = new LoginAssertions(page);
        await assertInCorrectEmail.assertWhenEmailIsNotCorrect();

    })

})





