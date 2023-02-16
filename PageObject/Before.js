const { expect } = require('@playwright/test');
exports.Before = class Before {

    constructor(page) {
        this.page = page;
    }

    async visit() {
        await this.page.goto("https://www.mediaexpert.pl");
    }

    async closeCookies() {

        const buttonSelector = '.cookie-wrapper .spark-button';
        await this.page.locator(buttonSelector)
        await this.page.waitForSelector(buttonSelector, { visible: true });
        await this.page.click(buttonSelector);
    }


    async doBefore() {
        await this.visit();
        await this.closeCookies();
    }
}
