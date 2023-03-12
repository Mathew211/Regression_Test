exports.ProducList = class ProductList {

    constructor(page) {

        this.page = page;
        this.nameOfCategoryMenuSelector = '.menu-category-item:nth-child(6) .item-name';
        this.nameOfCategoryMenuSecondSelector = '.menu-category-item:nth-child(6) .column:nth-child(1) .group:nth-child(1) > .group-title';
        this.nameOfAnotherCategoryMenuSelector = '.menu-category-list li:nth-of-type(5) .spark-link-raw';
        this.nameOfAnotherCategoryMenuSecondSelector = 'li:nth-of-type(5) > .menu-content > .item-content.menu-category-content  .columns > div:nth-of-type(1) > .groups > div:nth-of-type(1) > .group-links > a:nth-of-type(1)'
        this.choosenFirstChebox = ' .filter-item:nth-of-type(5) .filter-child:nth-of-type(2) .spark-checkbox-icon'
        this.choosenSeondChebox = '.filter-item:nth-of-type(12) .filter-child:nth-of-type(1) .spark-checkbox-icon'
        this.incorrectFilter = '.filter-child:nth-of-type(19) .spark-checkbox-icon'
        this.confirmButton = '.buttons .spark-button'
        this.clickCleanButton = '.clear.has-contrast'
        this.showMeMore = '.filter-item:nth-child(40) .show-more'
        this.addToWIshLisFirstItem = '.dynamic-offer-wrapper.offer-box .icon-left.is-button-link.is-default.is-desktop.is-icon.is-show-list.spark-button.wishlist  .wishlist-text'
        this.addToWishListNextTime = '.offers-list > span:nth-of-type(1) > .offer-box .icon-left.is-button-link.is-default.is-desktop.is-icon.is-show-list.spark-button.wishlist  .wishlist-text'
        this.wishListButton = 'a > .heart.icon.icon-heart4.is-desktop.utility-nav-icon'
        this.removeAllItemFromWIshList = '.icon-left.is-default.is-secondary.remove-all-btn.spark-button > span'
        this.addFirstItemCompare = 'span:nth-of-type(7) > .offer-box > .content > .column-left > a > .compare-link-text.label'
        this.removeAllItemFromWIshList = '.icon-left.is-default.is-secondary.remove-all-btn.spark-button > span'
        this.addFirstItemCompare = 'span:nth-of-type(7) > .offer-box > .content > .column-left > a > .compare-link-text.label'
        this.addSecondItemCompare = 'span:nth-of-type(5) > .offer-box > .content > .column-left > a > .compare-link-text.label'
        this.addFirstItemCompareFormAnotherCategory = '.offers-list > span:nth-of-type(1) > .offer-box > .content > .column-left > a > .compare-link-text.label'
        this.addSecondItemCompareFormAnotherCategory = 'span:nth-of-type(5) > .offer-box > .content > .column-left > a > .compare-link-text.label'
        this.linkCOmpare = '.spark-link-primary .is-small'

    }

    async menuCategoryNameHover() {
        await this.page.locator(this.nameOfCategoryMenuSelector).hover();
    }

    async menuAnothereCategoryNameHover() {
        await this.page.locator(this.nameOfAnotherCategoryMenuSelector).hover();
    }

    async clickOnCategory() {
        await this.page.locator(this.nameOfAnotherCategoryMenuSecondSelector).hover({ force: true });
        await this.page.locator(this.nameOfAnotherCategoryMenuSecondSelector).click();
    }
    async clickOnAnotherCategory() {
        await this.page.locator(this.nameOfCategoryMenuSecondSelector).hover({ force: true });
        await this.page.locator(this.nameOfCategoryMenuSecondSelector).click();
    }
    async waitForLoad() {
        await this.page.waitForLoadState('networkidle');
    }
    async waitForNavigation() {
        await this.page.waitForNavigation('load')
    }
    async slowly() {
        await this.page.waitForTimeout(8000);
    }


    async selectMoreThenOneCheckbox() {

        await this.page.locator(this.choosenFirstChebox).click();
        await this.page.locator(this.choosenSeondChebox).click();

    }
    async incorrectFIlter() {

        await this.page.locator(this.choosenFirstChebox).click();
        await this.expendList();
        await this.page.locator(this.incorrectFilter).click();


    }
    async expendList() {

        await this.page.locator(this.showMeMore).click();

    }

    async confirmhYourSelect() {

        await this.page.locator(this.confirmButton).click();

    }

    async cleanCheckBoxes() {

        await this.page.locator(this.clickCleanButton).click();

    }

    async addToWishList() {
        await this.page.locator(this.addToWIshLisFirstItem).click();
    }
    async addNextOneItemToWishList() {
        await this.page.locator(this.addToWishListNextTime).click();
    }
    async navigateToWishList() {

        await this.page.locator(this.wishListButton).click();
    }

    async clearWholeWishList() {
        await this.page.locator(this.removeAllItemFromWIshList).click();
    }

    async scroll() {

        for (let i = 0; i < 10; i++) {

            await this.page.evaluate(() => {

                window.scrollBy(0, 400);

            });

            await this.waitForLoad();
        }
    }

    async addFirstProductToCompare() {

        //Określenie pozycji 
        // const element = await this.page.locator(this.addFirstItemCompare);
        // const boundingBox = await element.boundingBox();
        // const elementPositionY = boundingBox.y;
        // console.log(`Pozycja elementu na stronie: ${elementPositionY}`);

        // await this.page.evaluate((y) => window.scrollBy(0, y), -704.966796875);
        await this.page.locator(this.addFirstItemCompare).click();



    }
    async addSecondProductToCompare() {

        // const element = await this.page.locator(this.addSecondItemCompare);
        // const boundingBox = await element.boundingBox();
        // const elementPositionY = boundingBox.y;
        // console.log(`Pozycja elementu na stronie: ${elementPositionY}`);

        // await this.page.evaluate((y) => window.scrollBy(0, y), 1270.7666015625);
        await this.page.locator(this.addSecondItemCompare).click();

    }

    async clickCOmpareLink() {

        await this.page.locator(this.linkCOmpare).click();
    }




    async roouteToProductList() {
        await this.menuCategoryNameHover();
        await this.waitForLoad();
        await this.clickOnCategory();
        await this.waitForLoad();

    }

    async selectYwoCheckboxes() {
        await this.menuCategoryNameHover();
        await this.clickOnCategory();
        await this.waitForLoad();
        await this.selectMoreThenOneCheckbox();
        await this.waitForLoad();
        await this.confirmhYourSelect();
        await this.waitForLoad();
    }

    async cleanAllCheckBoxes() {
        await this.menuCategoryNameHover();
        await this.clickOnCategory();
        await this.selectMoreThenOneCheckbox();
        await this.confirmhYourSelect();
        await this.cleanCheckBoxes();


    }
    async choosenIncorrectFilter() {

        await this.menuCategoryNameHover();
        await this.clickOnCategory();
        await this.waitForLoad();
        await this.incorrectFIlter();
        await this.waitForLoad();
        await this.confirmhYourSelect();
        await this.waitForLoad();

    }

    async addFirstItemToWIshLIst() {
        await this.menuCategoryNameHover();
        await this.clickOnCategory();
        await this.waitForLoad();
        await this.addToWishList();
        await this.waitForLoad();
        await this.slowly()

    }

    async addMoreItemToWIshLIst() {
        await this.menuCategoryNameHover();
        await this.clickOnCategory();
        await this.waitForLoad();
        await this.addToWishList();
        await this.addNextOneItemToWishList();
        await this.waitForLoad();
        await this.navigateToWishList()
        await this.slowly();

    }

    async navigateToWIhLiting() {

        await this.menuCategoryNameHover();
        await this.clickOnCategory();
        await this.waitForLoad();
        await this.addToWishList();
        await this.waitForLoad();
        await this.navigateToWishList()
        await this.waitForLoad();
        await this.slowly();

    }

    async clearWIshList() {

        await this.menuCategoryNameHover();
        await this.clickOnCategory();
        await this.waitForLoad();
        await this.addToWishList();
        await this.waitForLoad();
        await this.navigateToWishList();
        await this.waitForLoad();
        await this.clearWholeWishList();
        await this.waitForLoad();
        await this.slowly();

    }

    async addProductToCompare() {
        await this.menuCategoryNameHover();
        await this.clickOnCategory();
        await this.waitForLoad();
        await this.scroll()
        await this.addFirstProductToCompare();
        await this.waitForLoad();
        await this.slowly();
    }

    async activeComparingWithOneProductsGroup() {
        await this.menuCategoryNameHover();
        await this.clickOnCategory();
        await this.waitForLoad();
        await this.scroll()
        await this.addFirstProductToCompare();
        await this.waitForLoad();
        await this.scroll()
        await this.addSecondProductToCompare();
        await this.waitForLoad();
        await this.slowly();

    }

    async compareWIthOneGroup() {

        await this.menuCategoryNameHover();
        await this.clickOnCategory();
        await this.waitForLoad();
        await this.scroll()
        await this.addFirstProductToCompare();
        await this.scroll()
        await this.addSecondProductToCompare();
        await this.clickCOmpareLink()
        await this.waitForLoad();

    }

    async compareWithTwoGroups() {

        await this.activeComparingWithOneProductsGroup();
        await this.menuAnothereCategoryNameHover();
        await this.clickOnAnotherCategory();



    }

}