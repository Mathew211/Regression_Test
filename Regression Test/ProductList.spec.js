const { test } = require('@playwright/test');
const { ProductListAssertion } = require('../PageObject/Assertions/ProducListAssertion');
const { Before } = require('../PageObject/Steps/Before');
const { ProducList } = require('../PageObject/Steps/ProductList');



test.describe('Productlsit : ', () => {

    let listing
    test.beforeEach(async ({ page }) => {

        const homePage = new Before(page);
        await homePage.doBefore();

    })

    test('Listing route  ', async ({ page }) => {

        listing = new ProducList(page);
        await listing.roouteToProductList();
        const listingAssertion = new ProductListAssertion(page);
        await listingAssertion.productListRoutingAssertion()

    })

    test('Using filter on the listing ', async ({ page }) => {

        listing = new ProducList(page)
        await listing.selectYwoCheckboxes();
        const listinassertIsFileterActive = new ProductListAssertion(page);
        await listinassertIsFileterActive.fileterIsActiveOnProductList()

    })


    test('Cleaning cheacked checkboxes   ', async ({ page }) => {

        listing = new ProducList(page)
        await listing.cleanAllCheckBoxes();
        const assertFilterIsCleaned = new ProductListAssertion(page);
        await assertFilterIsCleaned.checkFilterIsAcitve();

    })

    test('Mismatched checkboxes ', async ({ page }) => {

        listing = new ProducList(page)
        await listing.choosenIncorrectFilter();
        const assertMisseCheckboxes = new ProductListAssertion(page);
        await assertMisseCheckboxes.mismatchedCheckboxes()

    })

})

test.describe('Wishlist  : ', () => {

    let wishList;
    test.beforeEach(async ({ page }) => {

        const homePage = new Before(page);
        await homePage.doBefore();

    })

    test('Add first item to wish list ', async ({ page }) => {

        wishList = new ProducList(page);
        await wishList.addFirstItemToWIshLIst();
        const assterWIshList = new ProductListAssertion(page);
        await assterWIshList.howManyItemYuoHaveOnWIshList();


    })

    test('Wish List site with one item ', async ({ page }) => {

        wishList = new ProducList(page);
        await wishList.navigateToWIhLiting();
        const assterWIshList = new ProductListAssertion(page);
        await assterWIshList.whenOnTheWishListIsOnlyOneItem();

    })

    test('Add more items to wish list ', async ({ page }) => {

        wishList = new ProducList(page);
        await wishList.addMoreItemToWIshLIst();
        const assterWIshList = new ProductListAssertion(page);
        await assterWIshList.whenOnTheWishListAreMoreItems();


    })
    test('Wish List is empty', async ({ page }) => {

        wishList = new ProducList(page);
        await wishList.clearWIshList();
        const assterWIshList = new ProductListAssertion(page);
        await assterWIshList.whenWisListIsEmpty();
    })

})


test.describe('Comparison tools  : ', () => {

    let compareProducts;

    test.beforeEach(async ({ page }) => {

        const homePage = new Before(page);
        await homePage.doBefore();

    })
    test('When comper is not possible ', async ({ page }) => {

        compareProducts = new ProducList(page);
        await compareProducts.addProductToCompare();
        const whereComepirngIsNorComplete = new ProductListAssertion(page);
        await whereComepirngIsNorComplete.assertWhenIOnlyOneEItemIsCompering()

    })

    test('Compaiting is active ', async ({ page }) => {

        compareProducts = new ProducList(page);
        await compareProducts.activeComparingWithOneProductsGroup();
        const whenCOmpareIsActive = new ProductListAssertion(page);
        await whenCOmpareIsActive.assertWhenCompareIsActive()

    })

    test('Comparing with one group  ', async ({ page }) => {

        compareProducts = new ProducList(page);
        await compareProducts.compareWIthOneGroup();
        const assertCompareWithOneGroup = new ProductListAssertion(page);
        await assertCompareWithOneGroup.assertCompareInside()


    })

    test('Comparing with two groups ', async ({ page }) => {

        compareProducts = new ProducList(page);
        await compareProducts.compareWithTwoGroups();
        const assertCompareWithOneGroup = new ProductListAssertion(page);
        await assertCompareWithOneGroup.assertCompareInsideWithTwoGroups()

    })

    test('Moving between gropus ', async ({ page }) => {

        compareProducts = new ProducList(page);
        await compareProducts.movingBetweenGroups();
        const assertCompareWithOneGroup = new ProductListAssertion(page);
        await assertCompareWithOneGroup.assertGruopAfterMoving();

    })

    test('Compare cancel  remove between  ', async ({ page }) => {

        compareProducts = new ProducList(page);
        await compareProducts.removeAllFormCompareCancelmButton();
        const removeCancel = new ProductListAssertion(page);
        await removeCancel.assertRemoveCancel();

    })

    test('Compare onfirm remove  nutton ', async ({ page }) => {

        compareProducts = new ProducList(page);
        await compareProducts.removeAllFormCompareConfirmButton();
        const removeCOnfirm = new ProductListAssertion(page);
        await removeCOnfirm.assertRemoveConfirm();

    })


    test('Too much you want to compare', async ({ page }) => {

        compareProducts = new ProducList(page);
        await compareProducts.tooMuchYouWantComapre();
        const outOfRangeCompare = new ProductListAssertion(page);
        await outOfRangeCompare.assertWhenUserWantCompareTooMuch();

    })

    test('Closing pop up after realizzed is too much in compating', async ({ page }) => {

        compareProducts = new ProducList(page);
        await compareProducts.closeTooMuchPopIpCompare();
        const closingPouUp = new ProductListAssertion(page);
        await closingPouUp.assertWhatHappendAffterClosingPopupCompare();

    })

    test('Moving to compare after reach max items ', async ({ page }) => {

        compareProducts = new ProducList(page);
        await compareProducts.tooMuchInCompareGoThere();
        const closingPouUp = new ProductListAssertion(page);
        await closingPouUp.assertWhatHappendAffterClosingPopupCompare();

    })

})



