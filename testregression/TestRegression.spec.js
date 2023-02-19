const { test, expect } = require('@playwright/test');
const { Before } = require('../PageObject/Before');
const { Functions } = require('../PageObject/FUnctions');
const { Searching } = require('../PageObject/Searching');


test.beforeEach(async ({ page }) => {

    const homePage = new Before(page);
    await homePage.doBefore();

});
test.afterAll(async () => {
    console.log('After tests');
});
test('Cheack searching input after write index ', async ({ page }) => {

    const searching = new Searching(page)
    await searching.searchAfterIndex();
    await searching.pressSearchingButton();
  
    const asserttest = new Functions(page);
    await asserttest.searchResults();
   

})
