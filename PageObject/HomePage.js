const { expect } = require('@playwright/test');
exports.HomePage = class HomePage {

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

    async clickSearchField() {
        const selector = '#section_header-desktop .input-inner';
        await this.page.click(selector);
    }
    async doBefore() {
        await this.visit();
        await this.closeCookies();
    }
}
