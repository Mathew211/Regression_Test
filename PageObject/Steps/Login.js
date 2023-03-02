exports.Login = class Login {
    constructor(page) {
        this.page = page
    }
    async correctLogin() {
        await this.page.locator('#section_header-desktop .account').hover({ force: true });
        await this.page.locator('.icon-left.is-secondary.is-small.spark-button').click();
        await this.page.waitForLoadState();
        await this.page.locator('.field-email .untouched').click()
        await this.page.type('.field-email .input-inner', 'mateuszoliszewskitest@op.pl');
        await this.page.locator('.is-password').click()
        await this.page.type('.is-password .input-inner', 'Testy123!!');
        await this.page.locator(('button:has-text("Zaloguj się")')).click()
        await this.page.waitForNavigation();
        await this.page.waitForTimeout(21000);
    }
    async wrongLogin() {
        await this.page.locator('#section_header-desktop .account').hover({ force: true });
        await this.page.locator('.icon-left.is-secondary.is-small.spark-button').click();
        await this.page.waitForLoadState();
        await this.page.locator('.field-email .untouched').click()
        await this.page.type('.field-email .input-inner', 'mateuszoliszewskitest@op.pl');
        await this.page.locator('.is-password').click()
        await this.page.type('.is-password .input-inner', 'Test123!!');
        await this.page.locator('.submit').click()
       
        
    }
    async emptyFieldsDurningLogin() {
        await this.page.locator('#section_header-desktop .account').hover({ force: true });
        await this.page.locator('.icon-left.is-secondary.is-small.spark-button').click();
        await this.page.waitForLoadState();
        await this.page.locator('.submit').click()
        await this.page.waitForTimeout(500)
    }

    async wrongEmail(){ 
        await this.page.locator('#section_header-desktop .account').hover({ force: true });
        await this.page.locator('.icon-left.is-secondary.is-small.spark-button').click();
        await this.page.waitForLoadState();
        await this.page.locator('.field-email .untouched').click()
        await this.page.type('.field-email .input-inner', 'mateuszoliszewskitestop.pl');
        await this.page.locator('.is-password').click()
    }

}
