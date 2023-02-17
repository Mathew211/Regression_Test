const { expect } = require('@playwright/test')
const { Searching } = require("./Searching")

exports.Functions = class Functions {
    constructor(page) {
        this.page = page
    }
    async searchResults() {
        
        const selectorOffProduct = await this.page.locator('.id')
        const urlaftersearch = await this.page.url()
        expect(urlaftersearch).toBe('https://www.mediaexpert.pl/dom-i-ogrod/baseny-i-akcesoria/baseny/basen-bestway-5614v-396-x-107-cm');
        const checkIndex = new Searching()
        expect(await selectorOffProduct ).toHaveValue(checkIndex.Searching())
    }
    async waitForNavigation() {
        await this.page.waitForNavigation();
    }
}