
const { expect } = require('@playwright/test');
exports.LoginAssertions = class LoginAssertions {

    constructor(page) {
        this.page = page
        this.expectedUrl = 'https://www.mediaexpert.pl/profile';
        this.expectionsWelcomeMessage = 'Witaj Mateusz Oliszewski';
        this.expectionsMessageSelector = '.headline.is-subsection';
        this.inCorrectTextMessage = 'Nieprawidłowa nazwa użytkownika lub hasło.';
        this.inCorrectTextMessageSelector = '.alert-content';
        this.emailFieldIsReqiueredMessage = 'Podaj e-mail';
        this.emailFieldIsReqiueredSelector = '.field-email .is-tiny';
        this.passwordFieldIsReqiueredMessage = 'Pole Hasło jest wymagane';
        this.passwordFieldIsReqiueredSelector = '.form-password .is-tiny';
        this.incorrectEmailMessage = 'Podaj poprawny adres e-mail';
        this.incorrectEmailSekector = '.dirty .is-tiny';

    }

    async assertLoggingWhereIsCorrect() {


        const checkWebsite = await this.page.url();
        expect(checkWebsite).toEqual(this.expectedUrl);

        const welcome = await this.page.locator(this.expectionsMessageSelector).innerText();
        expect(welcome).toBe(this.expectionsWelcomeMessage);

    }

    async assertWhenEmailIOrPasswordWrong() {

        const inCorrectEmail = await this.page.locator(this.inCorrectTextMessageSelector).innerText();
        expect(inCorrectEmail).toBe(this.inCorrectTextMessage);

        const borderColorStyle = await this.page.evaluate(() => {
            const element = document.querySelector('.is-closable.is-error.spark-alert');
            const style = window.getComputedStyle(element);
            return style.borderColor;
        });
        expect(borderColorStyle).toBe('rgb(208, 0, 0)');



    }

    async assertWhereFieldsAreEmpty() {
        const alertEmptyName = await this.page.locator(this.emailFieldIsReqiueredSelector).innerText();
        expect(alertEmptyName).toBe(this.emailFieldIsReqiueredMessage);

        const alertEmptyPass = await this.page.locator(this.passwordFieldIsReqiueredSelector).innerText();
        expect(alertEmptyPass).toBe(this.passwordFieldIsReqiueredMessage);
    }


    async assertWhenEmailIsNotCorrect() {
        const alertEmptyName = await this.page.locator(this.incorrectEmailSekector).innerText();
        expect(alertEmptyName).toBe(this.incorrectEmailMessage);

    }


}

