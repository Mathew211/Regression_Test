exports.Rejestration = class Rejestration {


    constructor(page) {
        this.page = page
    }

    async emptyFieldsInRejestrationFromStart() {
        await this.page.locator('#section_header-desktop .account').hover({ force: true });
        await this.page.locator('.spark-button.is-link span').click();
        await this.page.waitForLoadState('networkidle');

    }
    async correctCreateAccount() {

        await this.page.locator('#section_header-desktop .account').hover({ force: true });
        await this.page.locator('.spark-button.is-link span').click();
        await this.page.waitForLoadState('networkidle');
        await this.page.locator('.form .is-floating:nth-of-type(2) .required').click()
        await this.page.type('.form .is-floating:nth-of-type(2) .input-inner', 'Test');
        await this.page.locator('.form .is-floating:nth-of-type(3) .required').click()
        await this.page.type('.form .is-floating:nth-of-type(3) .input-inner', 'Test');
        await this.page.locator('.field-email .spark-input').click()
        await this.page.locator('.field-email .input-inner').press('Control+V')
        await this.page.locator('.is-password').click()
        await this.page.type('.is-password .input-inner', 'Test123!!');
        await this.page.locator('.is-required .spark-checkbox-body').click();
        await this.page.waitForSelector('.register-button')
        await this.page.locator('.register-button').click();

    }
    async tenminutesmail() {
        await this.page.goto("https://10minutemail.net/");
        await this.page.locator('button#copy-button').click()
    }

    async emptyFieldsValidAfterClear() {
        
        await this.page.locator('#section_header-desktop .account').hover({ force: true });
        await this.page.locator('.spark-button.is-link span').click();
        await this.page.waitForLoadState('networkidle');
        await this.page.locator('.form .is-floating:nth-of-type(2) .required').click()
        await this.page.type('.form .is-floating:nth-of-type(2) .input-inner', 'Test');
        await this.page.clear();
        await this.page.locator('.form .is-floating:nth-of-type(3) .required').click()
        await this.page.type('.form .is-floating:nth-of-type(3) .input-inner', 'Test');
        await this.page.clear();
        await this.page.locator('.field-email .spark-input').click()
        await this.page.locator('.field-email .input-inner').press('Control+V')
        await this.page.clear();
        await this.page.locator('.is-password').click()
        await this.page.type('.is-password .input-inner', 'Test123!!');
        await this.page.clear();
        await this.page.locator('.is-required .spark-checkbox-body').click();
        await this.page.locator('.is-required .spark-checkbox-body').click();
        await this.page.waitForSelector('.register-button')
        await this.page.locator('.register-button').click();

    }
}

