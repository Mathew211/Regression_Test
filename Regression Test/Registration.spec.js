const { test } = require('@playwright/test');
const { After } = require('../PageObject/Pages/After');
const { Before } = require('../PageObject/Pages/Before');
const { Registration } = require('../PageObject/Pages/Registration');
const { RegistrationAssertions } = require('../PageObject/Assertions/RegistrationAssertions');



test.describe('Registration process ', () => {

    let whenTooShortWordsDuringRegistration
    let pageRegistrationBeforeDoSomething
    let emailExisitInDB
    let processRegistrationSuccess

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

    test('Registration before do something', async ({ page }) => {

        pageRegistrationBeforeDoSomething = new Registration(page);
        await pageRegistrationBeforeDoSomething.registrationBeforeDoSomething();
        const assertRegistrationWebsite = new RegistrationAssertions(page);
        await assertRegistrationWebsite.whereYouGetToRegistration();

    })

    test('When text into fields are too short  ', async ({ page }) => {
        const name = 'T', surname = 'T', email = 'T', password = 'T';
        whenTooShortWordsDuringRegistration = new Registration(page);
        await whenTooShortWordsDuringRegistration.validTooShortText(name, surname, email, password);
        const assertTooShortAlertMessage = new RegistrationAssertions(page);
        await assertTooShortAlertMessage.validShortText();;

    })

    test('When mail is exist in DB  ', async ({ page }) => {
        const name = 'Test', surname = 'Test', email = 'mateuszoliszewskitest@op.pl', password = 'Test123!!';
        emailExisitInDB = new Registration(page);
        await emailExisitInDB.emailExistInOurService(name, surname, email, password);
        const emailExist = new RegistrationAssertions(page);
        await emailExist.emailExistInOurDB();;

    })

    // test('Correct process registration  ', async ({ page }) => {

    //     const name = 'Test', surname = 'Test', password = 'Test123!!';
    //     processRegistrationSuccess = new Registration(page);
    //     await processRegistrationSuccess.correctRegistration(name, surname, password);
    //     const registraionDone = new RegistrationAssertions(page);
    //     await registraionDone.registrationDone()

    // })

})
