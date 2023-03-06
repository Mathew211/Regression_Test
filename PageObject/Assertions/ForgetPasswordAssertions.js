const { test, expect } = require('@playwright/test');
exports.ForgetPasswordAssertions = class ForgetPasswordAssertions {

    constructor(page) {
        this.page = page
        this.expectedUrl = 'https://www.mediaexpert.pl/forgot-password';
        this.successTextMessage = 'Jeżeli podany adres e-mail jest wykorzystywany w aplikacji, wysłaliśmy na niego link niezbędny do resetu hasła.';
        this.successMessageSelector = '.successed .is-regular'
        this.alertTextMessage =  'Podaj poprawny adres e-mail';
        this.alertTextMessageSelector = '.spark-form-errors .is-tiny';
    }

    async remindIsCorrect() {
        const checkWebsite = await this.page.url();
        expect(checkWebsite).toEqual(this.expectedUrl);

        const chearupTextSelector = await this.page.locator( this.successMessageSelector).innerText();
        expect(chearupTextSelector).toContain( this.successTextMessage);

    }
 
    async wrongRemindEmail() {

        const chearupTextSelector = await this.page.locator( this.alertTextMessageSelector).innerText();
        expect(chearupTextSelector).toContain( this.alertTextMessage);

    }

}