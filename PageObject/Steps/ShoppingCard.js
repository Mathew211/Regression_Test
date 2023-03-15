const { Searching } = require("./Searching");

exports.ShoppingCard = class ShoppingCard {

    constructor(page) {
        this.page = page

        this.shoppingcard = '.icon-cart3'
        this.addToShopCard = '.add-to-cart.is-hydrated span'
        this.next = '.icon-right.is-default.is-primary.next.spark-button'
        this.goTOShoppingCard = '.is-primary.icon-right'
        this.add = '.icon-plus'
        this.minnus = '.icon-minus'
    }

    async waitForLoad() {
        await this.page.waitForLoadState('networkidle');
    }
    async slowly() {
        await this.page.waitForTimeout(6000);
    }

    async clickOnTheShopppingCard() {

        await this.page.locator(this.shoppingcard).click();
        await this.slowly();
    }

    async choseProductToShoppingCard(id) {

        const searchProduct = new Searching(this.page);
        await searchProduct.searchingCheck(id);
    }
    async addToShoppingCard() {

        await this.page.locator(this.addToShopCard).click();
    }
    async goNext() {

        await this.page.locator(this.next).click();
    }
    async goToShoppingCard() {

        await this.page.locator(this.goTOShoppingCard).first().click();

    }

    async increase() {

        await this.page.locator(this.add).click();
    }



    async emptyShoppiingCard() {

        await this.clickOnTheShopppingCard()

    }

    async addProductToShoppingCard(id) {

        await this.choseProductToShoppingCard(id);
        await this.addToShoppingCard();
        await this.goNext();
        await this.waitForLoad();
        await this.goToShoppingCard();
        await this.waitForLoad();

    }


    async plsuOne(id) {

        await this.addProductToShoppingCard(id);
        await this.increase();
        await this.waitForLoad();
        await this.slowly()

    }

    async maxLimitForOneItem(id) {

        await this.plsuOne(id);
        await this.increase();
        await this.waitForLoad();
        await this.slowly()

    }
    async minusOne() {
        maxLimitForOneItem(id)
        await this.minnus();
        await this.waitForLoad();
        await this.slowly()
    }

    async selectSomeServices() {

    }

    async removeFromShoppingCart() {

    }
}