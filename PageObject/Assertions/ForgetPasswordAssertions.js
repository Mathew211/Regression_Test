exports.ForgetPasswordAssertions = class ForgetPasswordAssertions {

    constructor(page) {
        this.page = page
    }

    async remindIsCorrect() {
        const fisrtSentence = 'Dziękujemy za rejestrację.';
        const firstSentenceHideNUTitle = await this.page.locator('.dialog-title .title:nth-of-type(1)').innerText();
        expect(firstSentenceHideNUTitle).toBe(fisrtSentence);

        const secondSentence = 'Zostałeś automatycznie zalogowany do Twojego konta.';
        const secondSentenceHideNUTitle = await this.page.locator('.dialog-title .title:nth-of-type(2)').innerText();
        expect(secondSentenceHideNUTitle).toBe(secondSentence);
    }
 


}