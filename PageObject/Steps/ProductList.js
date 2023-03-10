exports.ProducList = class ProductList {

    constructor(page) {
        this.page = page;
        this.nameOfCategoryMenuSelector = '.menu-category-item:nth-child(6) .item-name';
        this.nameOfCategoryMenuSecondSelector = '.menu-category-item:nth-child(6) .column:nth-child(1) .group:nth-child(1) > .group-title';
        this.choosenFirstChebox = '.filter-item:nth-of-type(5) .filter-child:nth-of-type(2) .spark-checkbox-icon'
        this.choosenSeondChebox = '.filter-item:nth-of-type(12) .filter-child:nth-of-type(1) .spark-checkbox-icon'
        this.incorrectFilter = '.filter-child:nth-of-type(19) .spark-checkbox-icon'
        this.confirmButton = '.buttons .spark-button'
        this.clickCleanButton = '.clear.has-contrast'
        this.showMeMore = '.filter-item:nth-child(40) .show-more'
        this.addToWIshLisFirstItem = '.dynamic-offer-wrapper.offer-box .icon-left.is-button-link.is-default.is-desktop.is-icon.is-show-list.spark-button.wishlist  .wishlist-text'
        this.addToWishListNextTime = '.offers-list > span:nth-of-type(1) > .offer-box .icon-left.is-button-link.is-default.is-desktop.is-icon.is-show-list.spark-button.wishlist  .wishlist-text'
        this.wishListButton = 'a > .heart.icon.icon-heart4.is-desktop.utility-nav-icon'

    }

    async menuCategoryNameHover() {
        await this.page.locator(this.nameOfCategoryMenuSelector).hover();
    }

    async clickOnCategory() {
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
        await this.page.waitForTimeout(5000);
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
        await this.page.locator(this.this.addToWishListNextTime).click();
    }
    async navigateToWishList() {

        await this.page.locator(this.wishListButton).click();
    }


    async roouteToProductList() {
        await this.menuCategoryNameHover();
        await this.waitForLoad();
        await this.clickOnCategory();
        await this.waitForLoad();

    }

    async selectYwoCheckboxes() {
        await this.menuCategoryNameHover();
        await this.waitForLoad();
        await this.clickOnCategory();
        await this.waitForLoad();
        await this.selectMoreThenOneCheckbox();
        await this.confirmhYourSelect();

    }

    async cleanAllCheckBoxes() {
        await this.menuCategoryNameHover();
        await this.waitForLoad();
        await this.clickOnCategory();
        await this.waitForLoad();
        await this.selectMoreThenOneCheckbox();
        await this.confirmhYourSelect();
        await this.cleanCheckBoxes();
        await this.slowly()

    }
    async choosenIncorrectFilter() {

        await this.menuCategoryNameHover();
        await this.waitForLoad();
        await this.clickOnCategory();
        await this.waitForLoad();
        await this.incorrectFIlter();
        await this.confirmhYourSelect();

    }

    async addFirstItemToWIshLIst() {
        await this.menuCategoryNameHover();
        await this.waitForLoad();
        await this.clickOnCategory();
        await this.waitForLoad();
        await this.addToWishList();
        await this.slowly()

    }

    async addMoreItemToWIshLIst() {
        await this.menuCategoryNameHover();
        await this.waitForLoad();
        await this.clickOnCategory();
        await this.waitForLoad();
        await this.addToWishList();
        await this.slowly();
        await this.addNextOneItemToWishList();

    }


    async navigateToWIhLiting() {

        await this.menuCategoryNameHover();
        await this.waitForLoad();
        await this.clickOnCategory();
        await this.waitForLoad();
        await this.addToWishList();
        await this.slowly()
        await this.navigateToWishList()

    }
}