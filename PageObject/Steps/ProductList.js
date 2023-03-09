exports.ProducList = class ProductList {

    constructor(page) {
        this.page = page;
        this.nameOfCategoryMenuSelector = '.menu-category-item:nth-child(6) .item-name';
        this.nameOfCategoryMenuSecondSelector = '.menu-category-item:nth-child(6) .column:nth-child(1) .group:nth-child(1) > .group-title';
        this.choosenFirstChebox = '.filter-item:nth-of-type(5) .filter-child:nth-of-type(2) .spark-checkbox-icon'
        this.choosenSeondChebox = '.filter-item:nth-of-type(12) .filter-child:nth-of-type(1) .spark-checkbox-icon'
        this.confirmButton = '.buttons .spark-button'

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

    async selectMoreThenOneCheckbox() {

        await this.page.locator(this.choosenFirstChebox).click();
        await this.page.locator(this.choosenSeondChebox).click();

    }

    async confirmhYourSelect() {

        await this.page.locator(this.confirmButton).click();

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
        await this.confirmhYourSelect()

    }
}