const { test, expect } = require('@playwright/test');
exports.ForgetPasswordAssertions = class ForgetPasswordAssertions {

    constructor(page) {
        this.page = page
    }

    async remindIsCorrect() {
        const expectedUrl = 'https://www.mediaexpert.pl/forgot-password';
        const checkWebsite = await this.page.url();
        expect(checkWebsite).toEqual(expectedUrl);

        const chearupText = 'Jeżeli podany adres e-mail jest wykorzystywany w aplikacji, wysłaliśmy na niego link niezbędny do resetu hasła.';
        const chearupTextSelector = await this.page.locator('.successed .is-regular').innerText();
        expect(chearupTextSelector).toContain(chearupText);

    }
 
    async wrongRemindEmail() {

        const chearupText = 'Podaj poprawny adres e-mail';
        const chearupTextSelector = await this.page.locator('.spark-form-errors .is-tiny').innerText();
        expect(chearupTextSelector).toContain(chearupText);

    }

}