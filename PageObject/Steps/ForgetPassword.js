
exports.ForgetPassword = class ForgetPassword {

    constructor(page) {
        this.page = page
    }

    async forgetPassworDontWorry() {
        await this.page.locator('#section_header-desktop .account').hover({ force: true });
        await this.page.locator('.icon-left.is-secondary.is-small.spark-button').click();
        await this.page.waitForLoadState();
        await this.page.locator('.remind').click()
        await this.page.waitForLoadState();
        await this.page.locator('.is-floating').click()
        await this.page.type('.is-floating', 'mateuszoliszewskitest@op.pl');
        await this.page.locator('.email-container .spark-button').click()
        await this.page.waitForLoadState();

    }
    async wrongEmail() {
        await this.page.locator('#section_header-desktop .account').hover({ force: true });
        await this.page.locator('.icon-left.is-secondary.is-small.spark-button').click();
        await this.page.waitForLoadState();
        await this.page.locator('.remind').click()
        await this.page.waitForLoadState();
        await this.page.locator('. touched pristine required').click()
        await this.page.type('.touched .input-inner', 'mateuszoliszewskitestop.pl');
        await this.page.locator('.email-container .spark-button').click()


    }

}

