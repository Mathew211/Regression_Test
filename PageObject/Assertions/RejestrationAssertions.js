
const { test, expect } = require('@playwright/test');


exports.RejestrationAssertions = class RejestrationAssertions {
    constructor(page) {
        this.page = page
    }


    async whereYouGetToRejestration() {

        const expectedUrl = 'https://www.mediaexpert.pl/registration';
        const checkWebsite = await this.page.url();
        expect(checkWebsite).toEqual(expectedUrl);

        const isButtonDisabled = await this.page.locator('.register-button:disabled')
        expect(isButtonDisabled).toBeTruthy();
    }

    async rejestrationResult() {
        const fisrtSentence = 'Dziękujemy za rejestrację.';
        const firstSentenceHideNUTitle = await this.page.locator('.dialog-title .title:nth-of-type(1)').innerText();
        expect(firstSentenceHideNUTitle).toBe(fisrtSentence);

        const secondSentence = 'Zostałeś automatycznie zalogowany do Twojego konta.';
        const secondSentenceHideNUTitle = await this.page.locator('.dialog-title .title:nth-of-type(2)').innerText();
        expect(secondSentenceHideNUTitle).toBe(secondSentence);
    }
    async validShortText() {
        const tooShortName = 'Imię musi się składać z co najmniej 2 znaków';
        const selectorTooShortName = await this.page.locator('.form .is-floating:nth-of-type(2) .is-tiny').innerText();
        expect(selectorTooShortName).toBe(tooShortName);

        const tooShortSurName = 'Nazwisko musi się składać z co najmniej 2 znaków';
        const selectorTooShortSurName = await this.page.locator('.form .is-floating:nth-of-type(3) .is-tiny').innerText();
        expect(selectorTooShortSurName).toBe(tooShortSurName);

        const wrongEmail = 'Podaj poprawny adres e-mail';
        const selectorWrongEmail = await this.page.locator('.field-email .is-tiny').innerText();
        expect(selectorWrongEmail).toBe(wrongEmail);

        const passwordNeed = 'Hasło musi zawierać: min. 8 znaków • mała litera • wielka litera • cyfra';
        const selectorpasswordNeed = await this.page.locator('.password-requirements').innerText();
        expect(selectorpasswordNeed).toBe(passwordNeed);

        const youHaveToConfirmText = 'Zaakceptuj, aby kontynuować';
        const selectoryouHaveToConfirmText = await this.page.locator('.untouched.validated .is-tiny').innerText();
        expect(selectoryouHaveToConfirmText).toBe(youHaveToConfirmText);
    }



}