
const { expect } = require('@playwright/test');


exports.RegestrationAssertions = class RegestrationAssertions {
    constructor(page) {
        this.page = page
        this.expectedUrl = 'https://www.mediaexpert.pl/registration';
        this.regestrationButtonIsDisabled = '.register-button:disabled';
        this.thankingMessageFirstPart = 'Dziękujemy za rejestrację.';
        this.thankingMessageFirstPartSelector = '.dialog-title .title:nth-of-type(1)';
        this.thankingMessageSecondPart = 'Zostałeś automatycznie zalogowany do Twojego konta.';
        this.thankingMessageSecondPartSelector = '.dialog-title .title:nth-of-type(2)';
        this.messageTooShortName = 'Imię musi się składać z co najmniej 2 znaków';
        this.messageTooShortNameSelector = '.form .is-floating:nth-of-type(2) .is-tiny';
        this.messageTooShortSurName = 'Nazwisko musi się składać z co najmniej 2 znaków';
        this.messageTooShortSurNameSelector = '.form .is-floating:nth-of-type(3) .is-tiny';
        this.messageTooShortEmail = 'Podaj poprawny adres e-mail';
        this.messageTooShortEmailSelector = '.field-email .is-tiny';
        this.messageTooShortPassword = 'Hasło musi zawierać: min. 8 znaków • mała litera • wielka litera • cyfra';
        this.messageTooShortPasswordSelector = '.password-requirements';
        this.messageFromTheCheckbox = 'Zaakceptuj, aby kontynuować';
        this.messageFromTheCheckboxSelector = '.untouched.validated .is-tiny'
        this.emailExistInDBMessage = 'Email mateuszoliszewskitest@op.pl jest zajęty'
        this.emailExistInDBMessageSelector = '.alert-content';

    }


    async whereYouGetToRegestration() {

        const checkWebsite = await this.page.url();
        expect(checkWebsite).toEqual(this.expectedUrl);

        const isButtonDisabled = await this.page.locator(this.regestrationButtonIsDisabled)
        expect(isButtonDisabled).toBeTruthy();
    }

    async regestraionDone() {

        const firstSentenceHideNUTitle = await this.page.locator(this.thankingMessageFirstPartSelector).innerText();
        expect(firstSentenceHideNUTitle).toBe(this.thankingMessageFirstPart);

        const secondSentenceHideNUTitle = await this.page.locator(this.thankingMessageSecondPartSelector).innerText();
        expect(secondSentenceHideNUTitle).toBe(this.thankingMessageSecondPart);
    }
    async validShortText() {

        const selectorTooShortName = await this.page.locator(this.messageTooShortNameSelector).innerText();
        expect(selectorTooShortName).toBe(this.messageTooShortName);


        const selectorTooShortSurName = await this.page.locator(this.messageTooShortSurNameSelector).innerText();
        expect(selectorTooShortSurName).toBe(this.messageTooShortSurName);


        const selectorWrongEmail = await this.page.locator(this.messageTooShortEmailSelector).innerText();
        expect(selectorWrongEmail).toBe(this.messageTooShortEmail);


        const selectorpasswordNeed = await this.page.locator(this.messageTooShortPasswordSelector).innerText();
        expect(selectorpasswordNeed).toBe(this.messageTooShortPassword);

        const selectoryouHaveToConfirmText = await this.page.locator(this.messageFromTheCheckboxSelector).innerText();
        expect(selectoryouHaveToConfirmText).toBe(this.messageFromTheCheckbox);
    }

    async emailExistInOurDB() {

        const selectoryouHaveToConfirmText = await this.page.locator(this.emailExistInDBMessageSelector).innerText();
        expect(selectoryouHaveToConfirmText).toBe(this.emailExistInDBMessage);
    }



}