

exports.Regestration = class Regestration {


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
        this.regestrationButtonSelector = '.register-button';
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

    async fillNameInpuitRegestraion(name) {

        await this.page.locator(this.nameSelectorNoActive).click();
        await this.page.type(this.inputNameSelector, name);
    }
    async fillSurNameInpuitRegestraion(surname) {

        await this.page.locator(this.surnameSelectorNoActive).click();
        await this.page.type(this.inputSurNameSelector, surname);
    }
    async fillEmailInpuitRegestraionByPaste() {

        await this.page.locator(this.emailSelectorNoActive).click();
        await this.page.locator(this.inputEmailSelector).press('Control+V');
    }
    async fillEmailInpuitRegestraion(email) {

        await this.page.locator(this.emailSelectorNoActive).click();
        await this.page.type(this.inputEmailSelector, email);
    }

    async fillPasswordInpuitRegestraion(password) {

        await this.page.locator(this.passwordSelectorNoActive).click();
        await this.page.type(this.inputPasswordSelector, password);
    }
    async cheboxFormClick() {
        await this.page.locator(this.formCheckbox).click();
    }

    async clickRegestrationButton() {
        await this.page.waitForSelector(this.regestrationButtonSelector);
        await this.page.locator(this.regestrationButtonSelector).click();

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
    async correctRegestration(name, surname, password) {

        await this.tenMinutesEmail();
        await this.visitHome();
        await this.accountHeaderHover();
        await this.clickOnCreatAcount();
        await this.fillNameInpuitRegestraion(name);
        await this.fillSurNameInpuitRegestraion(surname);
        await this.fillEmailInpuitRegestraionByPaste();
        await this.fillPasswordInpuitRegestraion(password);
        await this.cheboxFormClick();
        await this.clickRegestrationButton();

    }

    async emailExistInOurService(name, surname, email, password) {
        await this.accountHeaderHover();
        await this.clickOnCreatAcount();
        await this.fillNameInpuitRegestraion(name);
        await this.fillSurNameInpuitRegestraion(surname);
        await this.fillEmailInpuitRegestraion(email);
        await this.fillPasswordInpuitRegestraion(password);
        await this.cheboxFormClick();
        await this.clickRegestrationButton();

    }

    async validTooShortText(name, surname, email, password) {
        await this.accountHeaderHover();
        await this.clickOnCreatAcount();
        await this.fillNameInpuitRegestraion(name);
        await this.fillSurNameInpuitRegestraion(surname);
        await this.fillEmailInpuitRegestraion(email);
        await this.fillPasswordInpuitRegestraion(password);
        await this.cheboxFormClick();
        await this.cheboxFormClick();
        await this.slowly();

    }


    async regestrationNeforeDoSomething() {
        await this.accountHeaderHover();
        await this.clickOnCreatAcount();

    }
}

