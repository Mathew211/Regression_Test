
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




}