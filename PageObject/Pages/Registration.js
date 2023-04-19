
exports.Registration = class Registration {


    constructor(page) {

        this.page = page
        this.accountHoverSelector = '#section_header-desktop .account';
        this.linkCreatAccount = '.spark-button.is-link span';
        this.nameSelectorNoActive = '.form .is-floating:nth-of-type(2) .required';
        this.inputNameSelector = '.form .is-floating:nth-of-type(2) .input-inner';
        this.surnameSelectorNoActive = '.form .is-floating:nth-of-type(3) .required';
        this.inputSurNameSelector = '.form .is-floating:nth-of-type(3) .input-inner';
        this.emailSelectorNoActive = '.field-email .spark-input';
        this.inputEmailSelector = '.field-email .input-inner';
        this.passwordSelectorNoActive = '.is-password';
        this.inputPasswordSelector = '.is-password .input-inner';
        this.formCheckbox = '.is-required .spark-checkbox-body';
        this.registrationButtonSelector = '.register-button';
        this.generatorEmailWebsite = "https://10minutemail.net/";
        this.buttonToCopyEmail = 'button#copy-button';
        this.homePage = 'https://www.mediaexpert.pl'

    }

    //Steps

    async accountHeaderHover() {
        await this.page.locator(this.accountHoverSelector).hover({ force: true });
    }

    async clickOnCreatAcount() {

        await this.page.locator(this.linkCreatAccount).click();
        await this.page.waitForLoadState('networkidle');

    }

    async fillNameInpuitregistraion(name) {

        await this.page.locator(this.nameSelectorNoActive).click();
        await this.page.type(this.inputNameSelector, name);
    }
    async fillSurNameInpuitregistraion(surname) {

        await this.page.locator(this.surnameSelectorNoActive).click();
        await this.page.type(this.inputSurNameSelector, surname);
    }
    async fillEmailInpuitregistraionByPaste() {

        await this.page.locator(this.emailSelectorNoActive).click();
        await this.page.locator(this.inputEmailSelector).press('Control+V');
    }
    async fillEmailInpuitregistraion(email) {

        await this.page.locator(this.emailSelectorNoActive).click();
        await this.page.type(this.inputEmailSelector, email);
    }

    async fillPasswordInpuitregistraion(password) {

        await this.page.locator(this.passwordSelectorNoActive).click();
        await this.page.type(this.inputPasswordSelector, password);
    }
    async cheboxFormClick() {
        await this.page.locator(this.formCheckbox).click();
    }

    async clickRegistrationButton() {
        await this.page.waitForSelector(this.registrationButtonSelector);
        await this.page.locator(this.registrationButtonSelector).click();

    }
    async tenMinutesEmail() {
        await this.page.goto(this.generatorEmailWebsite);
        await this.page.locator(this.buttonToCopyEmail).click();
    }
    async visitHome() {
        await this.page.goto(this.homePage);

    }

    async slowly() {
        await this.page.waitForTimeout(8000);
    }



    //Case
    async correctRegistration(name, surname, password) {

        await this.tenMinutesEmail();
        await this.visitHome();
        await this.accountHeaderHover();
        await this.clickOnCreatAcount();
        await this.fillNameInpuitregistraion(name);
        await this.fillSurNameInpuitregistraion(surname);
        await this.fillEmailInpuitregistraionByPaste();
        await this.fillPasswordInpuitregistraion(password);
        await this.cheboxFormClick();
        await this.clickRegistrationButton();

    }

    async emailExistInOurService(name, surname, email, password) {
        await this.accountHeaderHover();
        await this.clickOnCreatAcount();
        await this.fillNameInpuitregistraion(name);
        await this.fillSurNameInpuitregistraion(surname);
        await this.fillEmailInpuitregistraion(email);
        await this.fillPasswordInpuitregistraion(password);
        await this.cheboxFormClick();
        await this.clickRegistrationButton();

    }

    async validTooShortText(name, surname, email, password) {
        await this.accountHeaderHover();
        await this.clickOnCreatAcount();
        await this.fillNameInpuitregistraion(name);
        await this.fillSurNameInpuitregistraion(surname);
        await this.fillEmailInpuitregistraion(email);
        await this.fillPasswordInpuitregistraion(password);
        await this.cheboxFormClick();
        await this.cheboxFormClick();
        await this.slowly();

    }

    async registrationBeforeDoSomething() {
        await this.accountHeaderHover();
        await this.clickOnCreatAcount();

    }
}

