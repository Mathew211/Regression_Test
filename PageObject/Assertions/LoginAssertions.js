
const { test, expect } = require('@playwright/test');
exports.LoginAssertions = class LoginAssertions {

    constructor(page) {
        this.page = page
    }

    async assertLoggingWhereIsCorrect() {

        const expectedUrl = 'https://www.mediaexpert.pl/profile';
        const checkWebsite = await this.page.url();
        expect(checkWebsite).toEqual(expectedUrl);

        const welcome = await this.page.locator('.headline.is-subsection').innerText()
        const expectedWelcome = 'Witaj Mateusz Oliszewski';
        expect(welcome).toContain(expectedWelcome);

    }

    async assertWhenEmailIsWrong() {

        const inCorrectEmail = await this.page.locator('.spark-form-errors .is-tiny').innerText()
        const inCorrectText = 'Podaj poprawny adres e-mail';
        expect(inCorrectEmail).toContain(inCorrectText);

    }

    async assertWhereFieldsAreEmpty() {
        const alertEmptyName = await this.page.locator('.field-email .is-tiny').innerText()
        const nameText = 'Podaj e-mail';
        expect(alertEmptyName).toContain(nameText);

        const alertEmptyPass = await this.page.locator('.form-password .is-tiny').innerText()
        const passText = 'Pole Hasło jest wymagane';
        expect(alertEmptyPass).toContain(passText);
    }


    async assertWhereFieldsAreEmpty() {
        const alertEmptyName = await this.page.locator('.field-email .is-tiny').innerText()
        const nameText = 'Podaj e-mail';
        expect(alertEmptyName).toContain(nameText);

        const alertEmptyPass = await this.page.locator('.form-password .is-tiny').innerText()
        const passText = 'Pole Hasło jest wymagane';
        expect(alertEmptyPass).toContain(passText);
    }


}

