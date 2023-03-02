exports.ForgetPasswordAssertions = class ForgetPasswordAssertions {

    constructor(page) {
        this.page = page
    }

    async remindIsCorrect() {
        const expectedUrl = 'https://www.mediaexpert.pl/forgot-password';
        const checkWebsite = await this.page.url();
        expect(checkWebsite).toEqual(expectedUrl);

        const chearupText = 'Nie martw się, każdy czasem o czymś zapomina';
        const chearupTextSelector = await this.page.locator('.is-medium').innerText();
        expect(chearupTextSelector).toBe(chearupText);

    }
 


}