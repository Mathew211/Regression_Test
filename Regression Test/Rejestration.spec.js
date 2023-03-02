const { test, expect } = require('@playwright/test');
const { RejestrationAssertions } = require('../PageObject/Assertions/RejestrationAssertions');
const { Before } = require('../PageObject/Steps/Before');
const { Rejestration } = require('../PageObject/Steps/Rejestration');


test.beforeEach(async ({ page }) => {

    const homePage = new Before(page)
    await homePage.doBefore();
});


// test('Checking rejestration',async({ page }) => {

//     const copyEmail = new Rejestration(page)
//     await copyEmail.tenminutesmail()
//     const newaccount = new Rejestration(page);
//     await newaccount.correctCreateAccount();

//     const craetedccount = new RejestrationAssertions(page)
//     await craetedccount.rejestrationResult()
// });

// test('Checking rejestration before write something',async({ page }) => {

//     const rejestrationWebsite =  new Rejestration(page);
//     await rejestrationWebsite.emptyFieldsInRejestrationFromStart();
//     const assertRejestrationWebsite = new RejestrationAssertions(page);
//     await assertRejestrationWebsite.whereYouGetToRejestration();

// })


test('Checking fields validation ', async ({ page }) => {

    const validFields = new Rejestration(page)
    await validFields.validTooShortText()
    const assertionOFValidFIELDS = new RejestrationAssertions(page);
    await assertionOFValidFIELDS.validShortText();

})