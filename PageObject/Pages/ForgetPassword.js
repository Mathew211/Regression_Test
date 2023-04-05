
exports.ForgetPassword = class ForgetPassword {

    constructor(page) {
        this.page = page;
        this.accountHeader = '#section_header-desktop .account';
        this.remindButton = '.remind';
        this.emailInput = '.is-floating';
        this.resetButton = '.email-container .spark-button';
    }

    async waitForload() {

        await this.page.waitForLoadState('networkidle');

    }
    async accountHeaderHover() {

        await this.page.locator(this.accountHeader).hover({ force: true });
    }
    async clickLoginINButton() {

        await this.page.locator(this.accountHeader).click();
        await this.waitForload()
    }

    async clickRemindMePasswordButton() {

        await this.page.locator(this.remindButton).click()
        await this.waitForload()
    }

    async enterEmailAddress(email) {

        await this.page.locator(this.emailInput).click()
        await this.page.type(this.emailInput, email);
    }
    async clickkResetButton() {

        await this.page.locator(this.resetButton,).click()
        await this.waitForload()
    }

    //Case
    async remindProcessCorrect(email) {

        await this.accountHeaderHover();
        await this.clickLoginINButton();
        await this.clickRemindMePasswordButton();
        await this.enterEmailAddress(email);
        await this.clickkResetButton();
    }

    async remindProcessIsNotCorrect() {

        await this.accountHeaderHover();
        await this.clickLoginINButton();
        await this.clickRemindMePasswordButton();
        await this.enterEmailAddress('mateuszoliszewskitestop.pl');
        await this.clickkResetButton();

    }

}

