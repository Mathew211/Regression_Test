exports.Login = class Login {
    constructor(page) {

        this.page = page
        this.accountHeaderSelector = '#section_header-desktop .account';
        this.accountLoginInButtonSelector = '#section_header-desktop .account';
        this.emailInputSelector = '.field-email .untouched';
        this.emailInputActive = '.field-email .input-inner'
        this.inputPasswordSelector = '.is-password'
        this.inputPasswordActive = '.is-password .input-inner'
        this.LoginButton = 'button:has-text("Zaloguj się")'
        this.LogoutSlector = '.icon-left.is-secondary.is-small.spark-button'
    }
    async accountHeaderHover() {
        await this.page.locator(this.accountHeaderSelector).hover({ force: true });
    }
    async clickLoginINButton() {
        await this.page.locator(this.accountLoginInButtonSelector).click();
        await this.page.waitForLoadState('networkidle');
    }
    async enterEmailAddress(email) {
        await this.page.locator(this.emailInputSelector).click()
        await this.page.type(this.emailInputActive, email);
    }

    async enterPassword(password) {
        await this.page.locator(this.inputPasswordSelector).click()
        await this.page.type(this.inputPasswordActive, password);
    }
    async clickLogInButton() {

        await this.page.locator((this.LoginButton)).click()
    }
    async waitForNavigation() {
        await this.page.waitForNavigation();
        await this.page.waitForTimeout(3000);
    }
    async waitForLoad() {
        await this.page.waitForLoadState('networkidle');
    }
    async Logout() {
        await this.page.locator(this.accountHeaderSelector).hover({ force: true });
        await this.page.locator(this.LogoutSlector).click();

    }

    async correctLogIn(email, password) {

        await this.accountHeaderHover()
        await this.clickLoginINButton()
        await this.enterEmailAddress(email)
        await this.enterPassword(password)
        await this.clickLogInButton()
        await this.waitForNavigation()
        await this.Logout()

    }
    async wrongLogIn(email, password) {

        await this.accountHeaderHover()
        await this.clickLoginINButton()
        await this.enterEmailAddress(email)
        await this.enterPassword(password)
        await this.clickLogInButton()


    }
    async wrongEmail(email) {

        await this.accountHeaderHover()
        await this.clickLoginINButton()
        await this.enterEmailAddress(email)
        await this.clickLogInButton()

    }
    async emptyFiedls() {

        await this.accountHeaderHover()
        await this.clickLoginINButton()
        await this.clickLogInButton()

    }
}
