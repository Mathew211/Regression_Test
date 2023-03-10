const { test } = require('@playwright/test');
const { ProductListAssertion } = require('../PageObject/Assertions/ProducListAssertion');
const { After } = require('../PageObject/Steps/After');
const { Before } = require('../PageObject/Steps/Before');
const { ProducList } = require('../PageObject/Steps/ProductList');



// test.describe('Productlsit : ', () => {

//     let listing
//     test.beforeEach(async ({ page }) => {

//         const homePage = new Before(page);
//         await homePage.doBefore();

//     })

//     test('Listing route  ', async ({ page }) => {

//         listing = new ProducList(page);
//         await listing.roouteToProductList();
//         const listingAssertion = new ProductListAssertion(page);
//         await listingAssertion.productListRoutingAssertion()

//     })

//     test('Using filter on the listing   ', async ({ page }) => {

//         listing = new ProducList(page)
//         await listing.selectYwoCheckboxes();
//         const listinassertIsFileterActive = new ProductListAssertion(page);
//         await listinassertIsFileterActive.fileterIsActiveOnProductList()

//     })


//     test('Cleaning cheacked checkboxes   ', async ({ page }) => {

//         listing = new ProducList(page)
//         await listing.cleanAllCheckBoxes();
//         const reload = new After(page);
//         const assertFilterIsCleaned = new ProductListAssertion(page);
//         await assertFilterIsCleaned.checkFilterIsAcitve();

//     })

//     test('Mismatched checkboxes ', async ({ page }) => {

//         listing = new ProducList(page)
//         await listing.choosenIncorrectFilter();
//         const assertMisseCheckboxes = new ProductListAssertion(page);
//         await assertMisseCheckboxes.mismatchedCheckboxes()

//     })

test.describe('Wishlist  : ', () => {

    let listing
    test.beforeEach(async ({ page }) => {

        const homePage = new Before(page);
        await homePage.doBefore();

    })

    test('Add first item to wish list ', async ({ page }) => {

        listing = new ProducList(page)
        await listing.addFirstItemToWIshLIst();
        const assterWIshList = new ProductListAssertion(page)
        await assterWIshList.howManyItemYuoHaveOnWIshList()


    })

    test('Add more items to wish list ', async ({ page }) => {

        listing = new ProducList(page)
        await listing.addMoreItemToWIshLIst();
        const assterWIshList = new ProductListAssertion(page)
        await assterWIshList.howManyItemYuoHaveOnWIshList()


    })

    test('Wish List site with one item ', async ({ page }) => {

        listing = new ProducList(page)
        await listing.navigateToWIhLiting();
        const assterWIshList = new ProductListAssertion(page)
        await assterWIshList.whenOnTheWishListIsOnlyOneItem()


    })

})