
const { test, expect } = require('@playwright/test');
exports.SearchAssertions = class SearchAssertions {

    constructor(page) {
        this.page = page
        this.productIDSelector = '.id'
    }
    async searchResultsByID() {

        const selectorOfProduct = await this.page.locator(this.productIDSelector).innerText();
        expect(selectorOfProduct).toContain('465939')
    }
    async searchResultsCaseTwo() {

        const selectorofListingName = await this.page.locator('.is-wrapper').innerText();
        expect(selectorofListingName).toContain('111111')
    }
    async searchResultsCaseThree() {

        const selectorofListingName = await this.page.locator('.is-wrapper').innerText();
        expect(selectorofListingName).toContain('Samsung')
    }
    async searchResultsCaseFour() {

        const selectroProductName = await this.page.locator('.name.is-title').innerText();
        expect(selectroProductName).toContain('Telewizor SAMSUNG QE55Q77B 55" QLED 4K 120HZ Tizen TV')
    }
    async searchResultsCaseFive() {

        const selectorOfIncorectSearch = await this.page.locator('.is-section').innerText();
        expect(selectorOfIncorectSearch).toContain('Nie udało nam się znaleźć')

    }
}