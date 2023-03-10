const { expect } = require('@playwright/test');
exports.ProductListAssertion = class ProductListAssertion {

    constructor(page) {
        this.page = page;
        this.expectedUrl = 'https://www.mediaexpert.pl/smartfony-i-zegarki/smartfony';
        this.afterUseFIlter = 'https://www.mediaexpert.pl/smartfony-i-zegarki/smartfony/samsung/5g_tak';
        this.wishListURL = 'https://www.mediaexpert.pl/ulubione/storage'
        this.pictureIsVisable = '.picture-image:nth-of-type(1) .is-loaded';
        this.nameOfProduct = ' .is-animate ';
        this.mainPricee = '.main-price .whole';
        this.cents = '.cents';
        this.currency = '.currency';
        this.currencyContain = 'zł';
        this.whenFilterIsActive = '.hide-optional .heading';
        this.activeFilterTitle = 'AKTYWNE FILTRY';
        this.activeFirstChebox = '.item:nth-of-type(1) .spark-checkbox-icon';
        this.activeSecondChebox = '.item:nth-of-type(2) .spark-checkbox-icon ';
        this.cleaningLink = '.hide-optional > div:nth-of-type(1) .is-small';
        this.cleanLinkIsEnable = '.hide-optional > div:nth-of-type(1) .header';
        this.choosenFirstChebox = '.filter-item:nth-of-type(5) .filter-child:nth-of-type(2) .spark-checkbox-icon'
        this.choosenSeondChebox = '.filter-item:nth-of-type(12) .filter-child:nth-of-type(1) .spark-checkbox-icon'
        this.emptyResults = '.empty-title'
        this.emptyResultMessage = 'Nie znaleziono produktów spełniających wybrane kryteria. Usuń część filtrów, aby zobaczyć listę produktów..'
        this.wishListCountSelector = '#section_header-desktop .count'
        this.wishListStatusTextSelector = '.dynamic-offer-wrapper.offer-box .icon-left.is-button-link.is-default.is-desktop.is-icon.is-show-list.spark-button.wishlist  .wishlist-text'
        this.textAfterAddToWIshList = 'W schowku'
        this.onlyOneProductOnTheWishListSelector = '.title-container .spark-link'
        this.onyOneAddedProductToWishList = 'Smartfon SAMSUNG Galaxy A53 6/128GB 5G 6.5" 120Hz Czarny SM-A536'



    }

    async productListRoutingAssertion() {


        const checkWebsite = await this.page.url();
        expect(checkWebsite).toEqual(this.expectedUrl);

        const imageOfProduct = await this.page.locator(this.pictureIsVisable).first();
        const isVisible = await imageOfProduct.isVisible();
        expect(isVisible).toBeTruthy();

        const nameOfProduct = await this.page.locator(this.nameOfProduct).first();
        const porductName = await nameOfProduct.isVisible();
        expect(porductName).toBeTruthy();

        const mainPrice = await this.page.locator(this.mainPricee).first();
        const priceMain = await mainPrice.isVisible();
        expect(priceMain).toBeTruthy();

        const restFromMainPrice = await this.page.locator(this.cents).first();
        const cents = await restFromMainPrice.isVisible();
        expect(cents).toBeTruthy();

        const pln = await this.page.locator(this.currency).first().innerText();
        expect(pln).toContain(this.currencyContain)

    }

    async fileterIsActiveOnProductList() {

        const checkWebsite = await this.page.url();
        expect(checkWebsite).toEqual(this.afterUseFIlter);

        const filterActive = await this.page.locator(this.whenFilterIsActive).innerText();
        expect(filterActive).toBe(this.activeFilterTitle);

        const isCheckedFirstOne = await this.page.locator(this.activeFirstChebox);
        const firstChebox = await isCheckedFirstOne.isChecked();
        expect(firstChebox).toBeTruthy();

        const isCheckedSecondOne = await this.page.locator(this.activeSecondChebox);
        const sechonCheckbox = await isCheckedSecondOne.isChecked();
        expect(sechonCheckbox).toBeTruthy();

        const cleanButton = await this.page.locator(this.cleaningLink);
        const linkToClearChebox = await cleanButton.isVisible();
        expect(linkToClearChebox).toBeTruthy()


    }

    async checkFilterIsAcitve() {

        const isCheckedFirstOne = await this.page.locator(this.choosenFirstChebox);
        const firstChebox = await isCheckedFirstOne.isChecked();
        expect(firstChebox).toBe(false);

        const isCheckedSecondOne = await this.page.locator(this.choosenSeondChebox);
        const sechonCheckbox = await isCheckedSecondOne.isChecked();
        expect(sechonCheckbox).toBe(false);

    }

    async mismatchedCheckboxes() {

        const emptyResultTextMessage = await this.page.locator(this.emptyResults).innerText();
        expect(emptyResultTextMessage).toBe(this.emptyResultMessage);

        const borderColorStyle = await this.page.evaluate(() => {
            const element = document.querySelector('.empty-results');
            const style = window.getComputedStyle(element);
            return style.borderColor;
        });
        expect(borderColorStyle).toBe('rgb(13, 77, 228)');
    }

    async howManyItemYuoHaveOnWIshList() {

        const wishListCounter = await this.page.locator(this.wishListCountSelector).innerText();
        expect(wishListCounter).toEqual('1');

        const wishListText = await this.page.locator(this.wishListStatusTextSelector).innerText();
        expect(wishListText).toBe(this.textAfterAddToWIshList);

    }

    async whenOnTheWishListIsOnlyOneItem() {

        const checkWebsite = await this.page.url();
        expect(checkWebsite).toEqual(this.wishListURL);

        const wishListText = await this.page.locator(this.onlyOneProductOnTheWishListSelector).innerText();
        expect(wishListText).toBe(this.onyOneAddedProductToWishList);

    }


}
