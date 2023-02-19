const { expect } = require('@playwright/test')
const { Searching } = require("./Searching")

exports.Functions = class Functions {
    constructor(page) {
        this.page = page
    }
    async searchResults() {
        
        const selectorOffProduct = await this.page.locator('.id').innerText();
        const checkIndex = new Searching()
        expect(selectorOffProduct ).toContainText(JSON.stringify(checkIndex.searchAfterIndex()))
    }
  
}