const { expect } = require('@playwright/test')
const { Searching } = require("./Searching")

exports.Functions = class Functions {
    constructor(page) {
        this.page = page
    }
    async asserIndexSearch() {

        const slectorProductID = '.id'
        await expect(slectorProductID).toContain('477155')
    }
}