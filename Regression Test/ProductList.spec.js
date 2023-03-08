const { test } = require('@playwright/test');
const { ProductListAssertion } = require('../PageObject/Assertions/ProducListAssertion');
const { Before } = require('../PageObject/Steps/Before');
const { ProducList } = require('../PageObject/Steps/ProductList');



test.describe('Routing to ProductList by using menu ', () => {

    let listing
    test.beforeEach(async ({ page }) => {

        const homePage = new Before(page);
        await homePage.doBefore();
    })

    test('Listing route  ', async ({ page }) => {

        const listing = new ProducList(page);
        await listing.roouteToProductList();
        const listingAssertion = new ProductListAssertion(page);
        await listingAssertion.productListRoutingAssertion()

    })

})