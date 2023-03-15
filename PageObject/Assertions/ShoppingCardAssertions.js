const { expect } = require('@playwright/test');

exports.ShopppingCardAssertions = class ShopppingCardAssertions {

    constructor(page) {

        this.page = page

        this.selector = {

            shoppingToolTipActive: '.header-tooltip',
            shoppingProductId: '.product-code',
            counterProductInput: '.input .input-inner',
            borderSelector: '.is-closable',
            maxammmountmessage: '.message'
        }

        this.expectation = {

            emptyShopppingCardMessage: 'Twój koszyk jest pusty',
            productID: 'KOD PRODUKTU: 472357',
            borderColor: 'rgb(208, 0, 0)',
            maxammmountmessage: 'Możesz dodać do koszyka maksymalnie 2 szt. produktu.\nW przypadku zainteresowania zakupami hurtowymi zapoznaj się z naszą ofertą skierowaną dla firm (B2B).'
        }

        this.expectedUrl = {
            firstShoppingCardStep: 'https://www.mediaexpert.pl/koszyk/lista',

        }


    }

    async assertWhenShoppingCardIsEmpty() {

        const emptyShoppingCard = await this.page.locator(this.selector.shoppingToolTipActive);
        const toolTip = await emptyShoppingCard.isVisible();
        expect(toolTip).toBe(true);

        const emptyShoppingCardMessage = await this.page.locator(this.selector.shoppingToolTipActive).innerText();
        expect(emptyShoppingCardMessage).toBe(this.expectation.emptyShopppingCardMessage);

    }

    async assertAddingToShoppingCard() {

        const checkWebsite = await this.page.url();
        expect(checkWebsite).toEqual(this.expectedUrl.firstShoppingCardStep);

        const expectedProductID = await this.page.locator(this.selector.shoppingProductId).innerText();
        expect(expectedProductID).toBe(this.expectation.productID);

    }
    async assertWhenUserincreaseAmountProduct() {

        const ammouunt = await this.page.locator(this.selector.counterProductInput).innerText();
        expect(ammouunt).toEqual('2')
    }

    async assertWhenUserincreaseAmountProductOutOffLimit() {

        const borderColorSty = await this.page.evaluate((selector) => {
            const element = document.querySelector(selector);
            const style = window.getComputedStyle(element);
            return style.borderColor;
        }, this.selector.borderSelector);

        expect(borderColorSty).toBe(this.expectation.borderColor);

        const expectedProductID = await this.page.locator(this.selector.maxammmountmessage).innerText();
        expect(expectedProductID).toBe(this.expectation.maxammmountmessage);


    }



}