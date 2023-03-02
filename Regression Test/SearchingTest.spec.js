const { test, expect } = require('@playwright/test');
const { Before } = require('../PageObject/Before');
const { Searching } = require('../PageObject/Searching');
const { SearchAssertions } = require('../Assertions/SearchAssertions');




test.beforeEach(async ({ page }) => {

    const homePage = new Before(page);
    await homePage.doBefore();

});

test.afterAll(async () => {
    console.log('Test done ');
});

test('Cheack searching input after written index ', async ({ page }) => {

    const searching = new Searching(page);
    await searching.searchAfterIndexWhenRouteISOnProducTCard();
    await searching.pressSearchingButton();

    const asserttest = new SearchAssertions(page);
    await asserttest.searchResultsCaseONe();
})
test('Cheack searching input after written index when route is on the listing  ', async ({ page }) => {

    const searching = new Searching(page)
    await searching.searchAfterIndexWhenRouteIsOnListing();
    await searching.pressSearchingButton();

    const asserttest = new SearchAssertions(page);
    await asserttest.searchResultsCaseTwo();
})
test('Cheack searching input after written name when route is on the listing  ', async ({ page }) => {

    const searching = new Searching(page)
    await searching.searchAfterName();
    await searching.pressSearchingButton();

    const asserttest = new SearchAssertions(page);
    await asserttest.searchResultsCaseThree();
})
test('Cheack searching input after written full name when route is on product card  ', async ({ page }) => {

    const searching = new Searching(page)
    await searching.searchAfterFullName();
    await searching.pressSearchingButton();

    const asserttest = new SearchAssertions(page);
    await asserttest.searchResultsCaseFour();
})
test('Cheacking wrong searching  ', async ({ page }) => {

    const searching = new Searching(page)
    await searching.wrongSearching();
    await searching.pressSearchingButton();

    const asserttest = new SearchAssertions(page);
    await asserttest.searchResultsCaseFive();
 
})
