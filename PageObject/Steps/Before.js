exports.Before = class Before {

    constructor(page) {

        this.page = page;
        this.buttonSelector = '.cookie-wrapper .spark-button';
    }

    async visit() {
        await this.page.goto("https://www.mediaexpert.pl");
        await this.page.waitForLoadState('networkidle')
    }

    async closeCookies() {


        await this.page.locator(this.buttonSelector).click();

    }

    async doBefore() {

        await this.visit();
        await this.closeCookies();
    }

}