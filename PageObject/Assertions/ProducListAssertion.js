const { expect } = require('@playwright/test');
exports.ProductListAssertion = class ProductListAssertion {

    constructor(page) {
        this.page = page;
        this.page = page
        this.expectedUrl = 'https://www.mediaexpert.pl/smartfony-i-zegarki/smartfony';
        this.pictureIsVisable = '.picture-image:nth-of-type(1) .is-loaded'
        this.nameOfProduct = ' .is-animate '
        this.mainPricee = '.main-price .whole'

    }

    async productListRoutingAssertion() {


        const checkWebsite = await this.page.url();
        expect(checkWebsite).toEqual(this.expectedUrl);

        const imageOfProduct = await this.page.locator(this.pictureIsVisable).first();;
        const isVisible = await imageOfProduct.isVisible();
        expect(isVisible).toBeTruthy();

        const nameOfProduct = await this.page.locator(this.nameOfProduct).first();;
        const porductName = await nameOfProduct.isVisible();
        expect(porductName).toBeTruthy();

        const mainPrice = await this.page.locator(this.mainPricee).first();;
        const priceMain = await mainPrice.isVisible();
        expect(priceMain).toBeTruthy();


    }

}