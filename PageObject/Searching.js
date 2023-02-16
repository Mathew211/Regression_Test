const { text, expect } = require('@playwright/test')
exports.Searching = class Searching {

    constructor(page) {
        this.page = page
        this.name = 'Search';
    }
    async searchAfterIndex() {
        const searchingInput = '#section_header-desktop .input-inner';
        const productID = '477155';
        await this.page.locator(searchingInput).click();
        await this.page.fill(searchingInput, productID.toString());
        return productID
    }
    async pressSearchingButton() {
        const selectorNutton = '#section_header-desktop .search-input-button'
        await this.page.locator(selectorNutton).click()
    }
    async searchAfterName() {
        const searchingInput = '#section_header-desktop .input-inner';
        const productID = 'Samsung'
        await this.page.click(searchingInput);
        await this.page.type(searchingInput, productID.toString());
    }
}