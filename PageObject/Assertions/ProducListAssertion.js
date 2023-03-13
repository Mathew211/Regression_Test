const { expect } = require('@playwright/test');
exports.ProductListAssertion = class ProductListAssertion {

    constructor(page) {

        this.page = page;

        this.selector = {

            pictureIsVisable: '.picture-image:nth-of-type(1) .is-loaded',
            nameOfProduct: ' .is-animate ',
            mainPricee: '.main-price .whole',
            cents: '.cents',
            currency: '.currency',
            whenFilterIsActive: '.hide-optional .heading',
            activeFirstChebox: '.item:nth-of-type(1) .spark-checkbox-icon',
            activeSecondChebox: '.item:nth-of-type(2) .spark-checkbox-icon ',
            cleaningLink: '.hide-optional > div:nth-of-type(1) .is-small',
            cleanLinkIsEnable: '.hide-optional > div:nth-of-type(1) .header',
            choosenFirstChebox: '.filter-item:nth-of-type(5) .filter-child:nth-of-type(2) .spark-checkbox-icon',
            choosenSeondChebox: '.filter-item:nth-of-type(12) .filter-child:nth-of-type(1) .spark-checkbox-icon',
            emptyResults: '.empty-title',
            borderSelector: '.empty-results',
            wishListCountSelector: '#section_header-desktop .count',
            wishListStatusTextSelector: '.offers-list > span:nth-of-type(1) > .offer-box .icon-left.is-button-link.is-default.is-desktop.is-icon.is-show-list.spark-button.wishlist  .wishlist-text',
            onlyOneProductOnTheWishListSelector: '.title-container .spark-link',
            firstItemInWIshListSelector: '.wish-list .wish-list-item:nth-of-type(1) .title-container .is-small',
            secondItemInWIshListSelector: '.wish-list .wish-list-item:nth-of-type(2) .info-container .is-small',
            titleOfEmptyWishListSelector: '.is-subsection',
            oneItemIsComperingMessageSelector: '.text.is-small',
            compareIsActiveSelector: 'a > .is-small',
            oneItmeInCompare: 'span:nth-of-type(5) > .offer-box > .content > .column-left > a > .compare-link-text.label',
            secondIntemInCOmpare: 'span:nth-of-type(5) > .offer-box > .content > .column-left > a > .compare-link-text.label',
            compareNameProducts: '.is-subsection',
            firstGroupProduct: '.ui-tabs-navigation .ui-tabs-item:nth-of-type(1)',
            secondGropuProduct: '.ui-tabs-item:nth-of-type(2) .ui-tabs-link',
            firstNameOfProductnCompare: '.product:nth-of-type(2) .is-tiny',
            secondNameOfProductnCompare: '.product:nth-of-type(3) .is-tiny'
        };

        this.expectation = {

            currencyContain: 'zł',
            activeFilterTitle: 'AKTYWNE FILTRY',
            emptyResultMessage: 'Nie znaleziono produktów spełniających wybrane kryteria. Usuń część filtrów, aby zobaczyć listę produktów.',
            textAfterAddToWIshList: 'W schowku',
            onyOneAddedProductToWishList: 'Smartfon MOTOROLA Moto G72 8/128GB 6.6\" 120Hz Niebieski PAVG0009RO',
            firstItemInWIshListS: 'Smartfon MOTOROLA Moto G72 8/128GB 6.6" 120Hz Niebieski PAVG0009RO',
            secondAddedProductToWishList: 'Smartfon SAMSUNG Galaxy S23 Ultra 8/256GB 5G 6.8" 120Hz Zielony SM-S918',
            titleOfEmptyWishListMessage: 'Mój schowek jest pusty',
            oneItemIsComperingMessage: 'Min. 2 produkty aby porównać',
            borderColor: 'rgb(13, 77, 228)',
            compareText: 'Porównaj',
            textForOneItemInCompare: 'W porównaniu (1 z 4)',
            textForTwoItemsInCompare: 'W porównaniu (2 z 4)',
            compareNameProductsText: 'Smartfony',
            firstproductGrouppNameCompare: 'Laptopy (2)',
            secondProductGriuoNameCompare: 'Smartfony (2)',
            firstNameOfProductnCompare: 'Laptop APPLE MacBook Air 2022 13.6\" Retina M2 8GB RAM 256GB SSD macOS Srebrny',
            secondNameOfProductnCompare: 'Laptop MAXCOM mBook 14\" IPS Celeron J4125 8GB RAM 256GB SSD Windows 10 Home',

        }

        this.expectURL = {

            compare: 'https://www.mediaexpert.pl/compare',
            listing: 'https://www.mediaexpert.pl/smartfony-i-zegarki/smartfony',
            afterUseFIlter: 'https://www.mediaexpert.pl/smartfony-i-zegarki/smartfony/samsung/5g_tak',
            wishList: 'https://www.mediaexpert.pl/ulubione/storage',
        }
    }


    async productListRoutingAssertion() {


        const checkWebsite = await this.page.url();
        expect(checkWebsite).toEqual(this.expectURL.listing);

        const imageOfProduct = await this.page.locator(this.selector.pictureIsVisable).first();
        const isVisible = await imageOfProduct.isVisible();
        expect(isVisible).toBeTruthy();

        const nameOfProduct = await this.page.locator(this.selector.nameOfProduct).first();
        const porductName = await nameOfProduct.isVisible();
        expect(porductName).toBeTruthy();

        const mainPrice = await this.page.locator(this.selector.mainPricee).first();
        const priceMain = await mainPrice.isVisible();
        expect(priceMain).toBeTruthy();

        const restFromMainPrice = await this.page.locator(this.selector.cents).first();
        const cents = await restFromMainPrice.isVisible();
        expect(cents).toBeTruthy();

        const pln = await this.page.locator(this.selector.currency).first().innerText();
        expect(pln).toContain(this.expectation.currencyContain)

    }

    async fileterIsActiveOnProductList() {

        const checkWebsite = await this.page.url();
        expect(checkWebsite).toEqual(this.expectURL.afterUseFIlter);

        const filterActive = await this.page.locator(this.selector.whenFilterIsActive).innerText();
        expect(filterActive).toBe(this.expectation.activeFilterTitle);

        const isCheckedFirstOne = await this.page.locator(this.selector.activeFirstChebox);
        const firstChebox = await isCheckedFirstOne.isChecked();
        expect(firstChebox).toBeTruthy();

        const isCheckedSecondOne = await this.page.locator(this.selector.activeSecondChebox);
        const sechonCheckbox = await isCheckedSecondOne.isChecked();
        expect(sechonCheckbox).toBeTruthy();

        const cleanButton = await this.page.locator(this.selector.cleaningLink);
        const linkToClearChebox = await cleanButton.isVisible();
        expect(linkToClearChebox).toBeTruthy()

    }

    async checkFilterIsAcitve() {

        const isCheckedFirstOne = await this.page.locator(this.selector.choosenFirstChebox);
        const firstChebox = await isCheckedFirstOne.isChecked();
        expect(firstChebox).toBe(false);

        const isCheckedSecondOne = await this.page.locator(this.selector.choosenSeondChebox);
        const sechonCheckbox = await isCheckedSecondOne.isChecked();
        expect(sechonCheckbox).toBe(false);

    }

    async mismatchedCheckboxes() {

        const emptyResultTextMessage = await this.page.locator(this.selector.emptyResults).innerText();
        expect(emptyResultTextMessage).toBe(this.expectation.emptyResultMessage);

        const borderColorSty = await this.page.evaluate((selector) => {
            const element = document.querySelector(selector);
            const style = window.getComputedStyle(element);
            return style.borderColor;
        }, this.selector.borderSelector);

        expect(borderColorSty).toBe(this.expectation.borderColor);
    }

    async howManyItemYuoHaveOnWIshList() {

        const wishListCounter = await this.page.locator(this.selector.wishListCountSelector).innerText();
        expect(wishListCounter).toEqual('1');

        const wishListText = await this.page.locator(this.selector.wishListStatusTextSelector).innerText();
        expect(wishListText).toBe(this.expectation.textAfterAddToWIshList);

    }

    async whenOnTheWishListIsOnlyOneItem() {

        const checkWebsite = await this.page.url();
        expect(checkWebsite).toEqual(this.expectURL.wishList);

        const wishListNameProduct = await this.page.locator(this.selector.onlyOneProductOnTheWishListSelector).innerText();
        expect(wishListNameProduct).toBe(this.expectation.onyOneAddedProductToWishList);

    }
    async whenOnTheWishListAreMoreItems() {

        const checkWebsite = await this.page.url();
        expect(checkWebsite).toEqual(this.expectURL.wishList);

        const wishListCounter = await this.page.locator(this.selector.wishListCountSelector).innerText();
        expect(wishListCounter).toEqual('2');

        const wishListFirstNameProduct = await this.page.locator(this.selector.firstItemInWIshListSelector).innerText();
        expect(wishListFirstNameProduct).toBe(this.expectation.firstItemInWIshListS);

        const wishListSecondNameProduct = await this.page.locator(this.selector.secondItemInWIshListSelector).innerText();
        expect(wishListSecondNameProduct).toBe(this.expectation.secondAddedProductToWishList);
    }
    async whenWisListIsEmpty() {

        const checkWebsite = await this.page.url();
        expect(checkWebsite).toEqual(this.expectURL.wishList);

        const emptyWIshList = await this.page.locator(this.selector.titleOfEmptyWishListSelector).innerText();
        expect(emptyWIshList).toBe(this.expectation.titleOfEmptyWishListMessage);
    }

    async assertWhenIOnlyOneEItemIsCompering() {

        const oneItemCompaeirng = await this.page.locator(this.selector.oneItemIsComperingMessageSelector).innerText();
        expect(oneItemCompaeirng).toBe(this.expectation.oneItemIsComperingMessage);

        const oneItemCompaeirngText = await this.page.locator(this.selector.oneItmeInCompare).innerText();
        expect(oneItemCompaeirngText).toBe(this.expectation.textForOneItemInCompare);

    }
    async assertWhenCompareIsActive() {

        const oneItemCompaeirngText = await this.page.locator(this.selector.secondIntemInCOmpare).innerText();
        expect(oneItemCompaeirngText).toBe(this.expectation.textForTwoItemsInCompare);

    }
    async assertCompareInside() {

        const checkWebsite = await this.page.url();
        expect(checkWebsite).toEqual(this.expectURL.compare);

        const oneItemCompaeirngText = await this.page.locator(this.selector.compareNameProducts).innerText();
        expect(oneItemCompaeirngText).toBe(this.expectation.compareNameProductsText);

    }

    async assertCompareInsideWithTwoGroups() {

        const checkWebsite = await this.page.url();
        expect(checkWebsite).toEqual(this.expectURL.compare);

        const firstGropuCompare = await this.page.locator(this.selector.firstGroupProduct).innerText();
        expect(firstGropuCompare).toBe(this.expectation.firstproductGrouppNameCompare);

        const secondGroupCompare = await this.page.locator(this.selector.secondGropuProduct).innerText();
        expect(secondGroupCompare).toBe(this.expectation.secondProductGriuoNameCompare);


        const firstNameOfProduct = await this.page.locator(this.selector.firstNameOfProductnCompare).first().innerText();
        expect(firstNameOfProduct).toBe(this.expectation.firstNameOfProductnCompare);

        const secondNameOfProduct = await this.page.locator(this.selector.secondNameOfProductnCompare).first().innerText();
        expect(secondNameOfProduct).toBe(this.expectation.secondNameOfProductnCompare);


    }

}
