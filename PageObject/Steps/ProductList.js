exports.ProducList = class ProductList {

    constructor(page) {

        //Selectors /Urls
        this.page = page;
        this.nameOfCategoryMenuSelector = '.menu-category-item:nth-child(6) .item-name';
        this.nameOfCategoryMenuSecondSelector = '.menu-category-item:nth-child(6) .column:nth-child(1) .group:nth-child(1) > .group-title';
        this.nameOfAnotherCategoryMenuSelector = '.menu-category-item:nth-child(5) .item-name';
        this.nameOfAnotherCategoryMenuSecondSelector = '.menu-category-list li:nth-of-type(5) .column:nth-of-type(1) .group:nth-of-type(1) .group-links .spark-link:nth-of-type(1)'
        this.choosenFirstChebox = '.filter-item:nth-of-type(8) .is-group:nth-of-type(2) .spark-checkbox-icon'
        this.choosenSeondChebox = '.filter-item:nth-of-type(12) .filter-child:nth-of-type(1) .spark-checkbox-icon'
        this.incorrectFilter = '.filter-item:nth-of-type(14) .filter-child:nth-of-type(4) .spark-checkbox-icon'
        this.confirmButton = '.buttons .spark-button'
        this.clickCleanButton = '.clear.has-contrast'
        this.showMeMore = '.filter-item:nth-child(40) .show-more'
        this.addToWIshLisFirstItem = '.offers-list > span:nth-of-type(1) > .offer-box .icon-left.is-button-link.is-default.is-desktop.is-icon.is-show-list.spark-button.wishlist  .icon.icon-heart4'
        this.addToWishListNextTime = 'span:nth-of-type(3) > .offer-box .icon-left.is-button-link.is-default.is-desktop.is-icon.is-show-list.spark-button.wishlist  .icon.icon-heart4'
        this.wishListButton = 'a > .heart.icon.icon-heart4.is-desktop.utility-nav-icon'
        this.removeAllItemFromWIshList = '.icon-left.is-default.is-secondary.remove-all-btn.spark-button > span'
        this.addFirstItemCompare = 'span:nth-of-type(7) > .offer-box > .content > .column-left > a > .compare-link-text.label'
        this.removeAllItemFromWIshList = '.icon-left.is-default.is-secondary.remove-all-btn.spark-button > span'
        this.addFirstItemCompare = 'span:nth-of-type(5) > .offer-box > .content > .column-left > a > .compare-link-text.label'
        this.addSecondItemCompare = 'span:nth-of-type(7) > .offer-box > .content > .column-left > a > .compare-link-text.label'
        this.addFirstItemCompareFromAnotherCategory = 'span:nth-of-type(8) > .offer-box > .content > .column-left > a > .compare-link-text.label'
        this.addSecondItemCompareFromAnotherCategory = 'span:nth-of-type(9) > .offer-box > .content > .column-left > a > .compare-link-text.label'
        this.linkCOmpare = '.spark-link-primary .is-small'
        this.menuCategory = '.menu-button:nth-child(2)'
        this.noteBookUR = 'https://www.mediaexpert.pl/komputery-i-tablety/laptopy-i-ultrabooki/laptopy'
        this.removeButton = '.remove-all-groups'
        this.confirmRemoveButton = '.is-secondary.is-normal'
        this.cancelRemoveButton = '.is-tertiary.is-normal'
        this.movingBetween = '.ui-tabs-item:nth-of-type(2) .ui-tabs-link'
        this.thirdItemToCompare = 'span:nth-of-type(4) > .offer-box > .content > .column-left > a > .compare-link-text.label    '
        this.fourthItemToCompare = 'span:nth-of-type(6) > .offer-box > .content > .column-left > a > .compare-link-text.label'
        this.fiffthItemToCompare = 'span:nth-of-type(8) > .offer-box > .content > .column-left > a > .compare-link-text.label'
        this.closeButtonCMaxCompare = '.too-many-offers .icon-left:nth-of-type(2)'
        this.goToCompareButton = '.first-btn span'

    }
    //Steps 
    async menuCategoryNameHover() {
        await this.page.locator(this.nameOfCategoryMenuSelector).hover();
    }

    async menuAnothereCategoryNameHover() {
        await this.page.locator(this.nameOfAnotherCategoryMenuSelector).hover();
    }

    async clickOnAnotherCategory() {
        await this.page.locator(this.nameOfAnotherCategoryMenuSecondSelector).hover({ force: true });
        await this.page.locator(this.nameOfAnotherCategoryMenuSecondSelector).click();
    }
    async clickOnCategory() {
        await this.page.locator(this.nameOfCategoryMenuSecondSelector).hover({ force: true });
        await this.waitForLoad();
        await this.page.locator(this.nameOfCategoryMenuSecondSelector).click();
    }
    async waitForLoad() {
        await this.page.waitForLoadState('networkidle');
    }
    async waitForNavigation() {
        await this.page.waitForNavigation('load')
    }
    async slowly() {
        await this.page.waitForTimeout(6000);
    }

    async selectMoreThenOneCheckbox() {

        await this.page.locator(this.choosenFirstChebox).click();
        await this.waitForLoad();
        await this.scrollDwon()
        await this.page.locator(this.choosenSeondChebox).click();
        await this.waitForLoad();

    }

    async incorrectFIlter() {

        await this.page.locator(this.choosenFirstChebox).click();
        await this.waitForLoad();
        await this.scrollDwon()
        await this.page.locator(this.incorrectFilter).click();

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

    async scrollDwon() {

        for (let i = 0; i < 10; i++) {

            await this.page.evaluate(() => {

                window.scrollBy(0, 400);

            });

        }
    }

    async scrollUp() {

        for (let i = 0; i < 10; i++) {

            await this.page.evaluate(() => {

                window.scrollBy(0, -400);

            });

            await this.waitForLoad();
        }
    }

    async addFirstProductToCompare() {


        const firstItem = await this.page.locator(this.addFirstItemCompare)
        await firstItem.scrollIntoViewIfNeeded();
        await this.page.waitForSelector(this.addFirstItemCompare, { timeout: 5000 });
        await this.page.locator(this.addFirstItemCompare).click();

    }

    async addSecondProductToCompare() {

        await this.page.locator(this.addSecondItemCompare).click();
        // await this.page.waitForSelector(this.addSecondItemCompare, { timeout: 5000 });
        // await this.page.locator(this.addSecondItemCompare).click();

    }

    async addFirstProductToCompareFromAnothereGroup() {

        await this.page.locator(this.addFirstItemCompareFromAnotherCategory).click();
        // await this.page.waitForSelector(this.addFirstItemCompareFromAnotherCategory, { timeout: 5000 });
        // await this.page.locator(this.addFirstItemCompareFromAnotherCategory).click();


    }
    async addSecondProductToCompareFromAnothereGroup() {

        const secondNote = await this.page.locator(this.addSecondItemCompareFromAnotherCategory)
        await secondNote.scrollIntoViewIfNeeded();
        await this.page.waitForSelector(this.addSecondItemCompareFromAnotherCategory, { timeout: 5000 });
        await this.page.locator(this.addSecondItemCompareFromAnotherCategory).click();

    }



    async clickCOmpareLink() {

        await this.page.locator(this.linkCOmpare).click();
    }

    async navigateToAnotherProductLitsting() {

        await this.page.goto(this.noteBookUR);

    }
    async clickToRemoveAllGropup() {

        await this.page.locator(this.removeButton).click()

    }
    async confirmRemove() {

        await this.page.locator(this.confirmRemoveButton).click()

    }
    async cancelRemove() {

        await this.page.locator(this.cancelRemoveButton).click()

    }
    async moveToNextGroup() {

        await this.page.locator(this.movingBetween).click()

    }


    async tooMuchToCOmpare() {

        await this.addFirstProductToCompare()
        await this.slowly()
        await this.addSecondProductToCompare()
        await this.slowly()
        await this.page.locator(this.thirdItemToCompare).click();
        await this.slowly()
        await this.page.locator(this.fourthItemToCompare).click();
        await this.slowly()
        await this.page.locator(this.fiffthItemToCompare).click();
        await this.slowly()
    }
    async clouseMaxComparePopUp() {
        await this.page.locator(this.closeButtonCMaxCompare).click();

    }
    async goToCompareByClickInButton() {
        await this.page.locator(this.goToCompareButton).click();

    }
    //Case 

    async roouteToProductList() {
        await this.menuCategoryNameHover();
        await this.clickOnCategory();
        await this.waitForLoad();

    }

    async selectYwoCheckboxes() {
        await this.roouteToProductList();
        await this.selectMoreThenOneCheckbox();
        await this.waitForLoad();
        await this.confirmhYourSelect();
        await this.waitForLoad();
    }

    async cleanAllCheckBoxes() {

        await this.selectYwoCheckboxes();
        await this.cleanCheckBoxes();

    }
    async choosenIncorrectFilter() {

        await this.roouteToProductList();
        await this.incorrectFIlter();
        await this.slowly()
        await this.confirmhYourSelect();
        await this.waitForLoad()
        await this.slowly()

    }

    async addFirstItemToWIshLIst() {

        await this.roouteToProductList();
        await this.scrollDwon();
        await this.waitForLoad();
        await this.addToWishList();
        await this.waitForLoad();
        await this.slowly()

    }

    async addMoreItemToWIshLIst() {

        await this.roouteToProductList();
        await this.scrollDwon();
        await this.addToWishList();
        await this.waitForLoad();
        await this.slowly();
        await this.addNextOneItemToWishList();
        await this.waitForLoad();
        await this.slowly();
        await this.navigateToWishList()
        await this.waitForLoad();
        await this.slowly();

    }

    async navigateToWIhLiting() {

        await this.roouteToProductList();
        await this.addToWishList();
        await this.waitForLoad();
        await this.navigateToWishList()
        await this.waitForLoad();
        await this.slowly();

    }

    async clearWIshList() {

        await this.navigateToWIhLiting()
        await this.clearWholeWishList();
        await this.waitForLoad();
        await this.slowly();

    }

    async addProductToCompare() {

        await this.roouteToProductList();
        await this.scrollDwon();
        await this.addFirstProductToCompare();
        await this.slowly();

    }
    async tooMuchYouWantComapre() {
        await this.roouteToProductList();
        await this.scrollDwon()
        await this.tooMuchToCOmpare();
        await this.slowly();
    }

    async closeTooMuchPopIpCompare() {
        await this.tooMuchYouWantComapre();
        await this.clouseMaxComparePopUp();
        await this.slowly();
    }

    async tooMuchInCompareGoThere() {
        await this.tooMuchYouWantComapre();
        await this.goToCompareByClickInButton()
        await this.slowly();
    }

    async activeComparingWithOneProductsGroup() {

        await this.addProductToCompare();
        await this.scrollDwon();
        await this.addSecondProductToCompare();
        await this.waitForLoad();
        await this.slowly();

    }

    async compareWIthOneGroup() {

        await this.activeComparingWithOneProductsGroup();
        await this.addSecondProductToCompare();
        await this.clickCOmpareLink()
        await this.waitForLoad();

    }

    async compareWithTwoGroups() {

        await this.roouteToProductList();
        await this.scrollDwon()
        await this.addFirstProductToCompare();
        await this.slowly();
        await this.scrollDwon()
        await this.addSecondProductToCompare();
        await this.slowly();
        await this.navigateToAnotherProductLitsting();
        await this.slowly();
        await this.scrollDwon()
        await this.scrollDwon()
        await this.addFirstProductToCompareFromAnothereGroup()
        await this.slowly();
        await this.scrollDwon()
        await this.addSecondProductToCompareFromAnothereGroup();
        await this.slowly();
        await this.clickCOmpareLink()
        await this.waitForLoad();

    }

    async movingBetweenGroups() {
        await this.compareWithTwoGroups()
        await this.moveToNextGroup()
        await this.waitForLoad();

    }

    async removeAllFormCompareCancelmButton() {
        await this.compareWithTwoGroups()
        await this.clickToRemoveAllGropup()
        await this.slowly();
        await this.cancelRemove()
        await this.slowly();
        await this.waitForLoad();
    }

    async removeAllFormCompareConfirmButton() {
        await this.compareWithTwoGroups()
        await this.clickToRemoveAllGropup()
        await this.confirmRemove()
        await this.slowly();
        await this.waitForLoad();
    }


}