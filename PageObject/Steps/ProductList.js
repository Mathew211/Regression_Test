exports.ProducList = class ProductList {

    constructor(page) {
        this.page = page;
        this.nameOfCategoryMenuSelector = '.menu-category-item:nth-child(6) .item-name';
        this.nameOfCategoryMenuSecondSelector = '.menu-category-item:nth-child(6) .column:nth-child(1) .group:nth-child(1) > .group-title';

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

    async roouteToProductList() {
        await this.menuCategoryNameHover();
        await this.waitForLoad();
        await this.clickOnCategory();
        await this.waitForLoad();

    }
}