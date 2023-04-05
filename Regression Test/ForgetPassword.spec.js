const { test } = require('@playwright/test');
const { ForgetPasswordAssertions } = require('../PageObject/Assertions/ForgetPasswordAssertions');
const { Before } = require('../PageObject/Pages/Before');
const { ForgetPassword } = require('../PageObject/Pages/ForgetPassword');


test.describe('Remind process ', () => {

    let reimindProcessCorrect
    let reimindProcessIsNotCorrect

    test.beforeEach(async ({ page }) => {

        const homePage = new Before(page);
        await homePage.doBefore();
    });
    test.afterEach(async ({ page }) => {
        const homePage = new Before(page);
        await homePage.visit()
    })

    test('When remind process is correct', async ({ page }) => {
        const email = 'mateuszoliszewskitest@op.pl';
        reimindProcessCorrect = new ForgetPassword(page);
        await reimindProcessCorrect.remindProcessCorrect(email);

        const remindisCorrect = new ForgetPasswordAssertions(page)
        await remindisCorrect.remindIsCorrect()

    })
    test('When user writes wrong email address', async ({ page }) => {
        reimindProcessIsNotCorrect = new ForgetPassword(page);
        await reimindProcessIsNotCorrect.remindProcessIsNotCorrect()

        const remindisNoCorrect = new ForgetPasswordAssertions(page);
        await remindisNoCorrect.wrongRemindEmail();

    })

})






