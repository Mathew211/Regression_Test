exports.Before = class Before {

    constructor(page) {
        this.page = page;
        this.buttonSelector = '.cookie-wrapper .spark-button';
    }

    async visit() {
        await this.page.goto("https://www.mediaexpert.pl");
    }

    async closeCookies() {

        await this.page.locator(this.buttonSelector)
        await this.page.waitForSelector(this.buttonSelector, { visible: true });
        await this.page.click(this.buttonSelector);
    }


    async doBefore() {
        await this.visit();
        await this.closeCookies();
    }

}