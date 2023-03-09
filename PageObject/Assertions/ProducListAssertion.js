const { expect } = require('@playwright/test');
exports.ProductListAssertion = class ProductListAssertion {

    constructor(page) {
        this.page = page;
        this.page = page
        this.expectedUrl = 'https://www.mediaexpert.pl/smartfony-i-zegarki/smartfony';
        this.afterUseFIlter = 'https://www.mediaexpert.pl/smartfony-i-zegarki/smartfony/samsung/5g_tak'
        this.pictureIsVisable = '.picture-image:nth-of-type(1) .is-loaded'
        this.nameOfProduct = ' .is-animate '
        this.mainPricee = '.main-price .whole'
        this.cents = '.cents'
        this.currency = '.currency'
        this.currencyContain = 'zł'
        this.whenFilterIsActive = '.hide-optional .heading'
        this.activeFilterTitle = 'AKTYWNE FILTRY'
        this.activeFirstChebox = '.item:nth-of-type(1) .spark-checkbox-icon'
        this.activeSecondChebox = '.item:nth-of-type(2) .spark-checkbox-icon '
        this.cleanLinkIsEnable = '.hide-optional > div:nth-of-type(1) .is-small'
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

        const restFromMainPrice = await this.page.locator(this.cents).first();;
        const cents = await restFromMainPrice.isVisible();
        expect(cents).toBeTruthy();

        const pln = await this.page.locator(this.currency).first().innerText();;
        expect(pln).toContain(this.currencyContain);

    }

    async fileterIsActiveOnProductList() {

        const checkWebsite = await this.page.url();
        expect(checkWebsite).toEqual(this.afterUseFIlter);

        const fileterActive = await this.page.locator(this.whenFilterIsActive).innerText();
        expect(fileterActive).toContain(this.activeFilterTitle);

        const isCheckedFFirstOne = await this.page.locator(this.activeFirstChebox);
        const firstChebox = await isCheckedFFirstOne.isChecked();
        expect(firstChebox).toBeTruthy();

        const isCheckedFSecondOne = await this.page.locator(this.activeSecondChebox);
        const sechonCheckbox = await isCheckedFSecondOne.isChecked();
        expect(sechonCheckbox).toBeTruthy();

        const cleanButton = await this.page.locator(this.cleanLinkIsEnable);
        expect(cleanButton).toBeEnabled({ enable: true })


    }


}