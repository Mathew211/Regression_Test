const { test, expect } = require('@playwright/test');
const { SearchAssertions } = require('../PageObject/Assertions/SearchAssertions');
const { After } = require('../PageObject/Steps/After');
const { Before } = require('../PageObject/Steps/Before');
const { Searching } = require('../PageObject/Steps/Searching');




test.describe('Searching  status ', () => {

    let searchingCheck


    test.beforeEach(async ({ page }) => {

        const homePage = new Before(page);
        await homePage.doBefore();

    });
    test.afterEach(async ({ page }) => {
        const homePage = new Before(page);
        await homePage.visit();
    })

    test.afterAll(async ({ page }) => {
        const closePage = new After(page)
        await closePage.close()

    })

    // test('Searchign by ID bu route is on the product card ', async ({ page }) => {
    //     const id = '465939'
    //     searchingCheck = new Searching(page);
    //     await searchingCheck.searchingCheck(id)

    //     const asserttest = new SearchAssertions(page)
    //     await asserttest.searchResultsByID();
    // })
    // test('Searching by ID but route is ont the listing  ', async ({ page }) => {
    //     const id = '111111'
    //     searchingCheck = new Searching(page)
    //     await searchingCheck.searchingCheck(id)

    //     const asserttest = new SearchAssertions(page);
    //     await asserttest.searchResultsCaseTwo();
    // })
    // test('Searching by brand but route is on the listing', async ({ page }) => {
    //     const brand = 'Samsung'
    //     searchingCheck = new Searching(page)
    //     await searchingCheck.searchingCheck(brand)

    //     const asserttest = new SearchAssertions(page);
    //     await asserttest.searchResultsCaseThree();
    // })
    test('Searching by full name of product  ', async ({ page }) => {
        const fullname = 'Telewizor SAMSUNG QE55Q77B 55" QLED 4K 120HZ Tizen TV'
        searchingCheck = new Searching(page)
        await searchingCheck.searchingCheck(fullname)

        const asserttest = new SearchAssertions(page);
        await asserttest.searchResultsCaseFour();
    })
    // test('Cheacking wrong searching  ', async ({ page }) => {
    //     const unexpectedname = 'xxxxxxxxxxxxxxxxxxxxxxx'
    //     searchingCheck = new Searching(page)
    //     await searchingCheck.searchingCheck(unexpectedname)

    //     const asserttest = new SearchAssertions(page);
    //     await asserttest.searchResultsCaseFive();

    // })
})