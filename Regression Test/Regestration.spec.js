const { test } = require('@playwright/test');
const { RegestrationAssertions } = require('../PageObject/Assertions/RegestrationAssertions');
const { After } = require('../PageObject/Steps/After');
const { Before } = require('../PageObject/Steps/Before');
const { Regestration } = require('../PageObject/Steps/Regestration');



test.describe('Regestration process ', () => {

    let whenTooShortWordsDuringRegestration
    let pageRegestrationBeforeDoSomething
    let emailExisitInDB
    let processRegestrationSuccess

    test.beforeEach(async ({ page }) => {

        const homePage = new Before(page);
        await homePage.doBefore();

    });
    test.afterEach(async ({ page }) => {
        const reloadPage = new After(page)
        await reloadPage.reload()
    })

    test.afterAll(async ({ page }) => {
        const closePage = new After(page)
        await closePage.close()

    })


    // test('Regestration before do something', async ({ page }) => {

    //     pageRegestrationBeforeDoSomething = new Regestration(page);
    //     await pageRegestrationBeforeDoSomething.regestrationNeforeDoSomething();
    //     const assertRegestrationWebsite = new RegestrationAssertions(page);
    //     await assertRegestrationWebsite.whereYouGetToRegestration();

    // })

    // test('When words into fields are too short  ', async ({ page }) => {
    //     const name = 'T', surname = 'T', email = 'T', password = 'T';
    //     whenTooShortWordsDuringRegestration = new Regestration(page);
    //     await whenTooShortWordsDuringRegestration.validTooShortText(name, surname, email, password);
    //     const assertTooShortAlertMessage = new RegestrationAssertions(page);
    //     await assertTooShortAlertMessage.validShortText();;

    // })

    // test('When mail is exist in DB  ', async ({ page }) => {
    //     const name = 'Test', surname = 'Test', email = 'mateuszoliszewskitest@op.pl', password = 'Test123!!';
    //     emailExisitInDB = new Regestration(page);
    //     await emailExisitInDB.emailISExistInOurService(name, surname, email, password);
    //     const emailExist = new RegestrationAssertions(page);
    //     await emailExist.emailExistInOurDB();;

    // })

    test('Correct Process Regestration  ', async ({ page }) => {
        const name = 'Test', surname = 'Test', password = 'Test123!!';
        processRegestrationSuccess = new Regestration(page);
        await processRegestrationSuccess.correctRegestration(name, surname, password);
        const regestraionDone = new RegestrationAssertions(page);
        await regestraionDone.regestraionDone();;

    })


})
