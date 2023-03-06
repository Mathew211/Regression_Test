
exports.ForgetPassword = class ForgetPassword {

    constructor(page) {
        this.page = page;
        this.accountHeader = '#section_header-desktop .account';
        this.remindButton = '.remind';
        this.emailInput = '.is-floating';
        this.resetButton = '.email-container .spark-button';
    }


    async accountHeaderHover(){
        await this.page.locator(this.accountHeader).hover({ force: true });
    }
    async clickLoginINButton(){
        await this.page.locator(this.accountHeader).click();
        await this.page.waitForLoadState('networkidle');
    }

    async clickRemindMePasswordButton(){
        await this.page.locator(this.remindButton).click()
        await this.page.waitForLoadState('networkidle')
    }

    async enterEmailAddress(email){
        await this.page.locator('.is-floating').click()
        await this.page.type(this.emailInput, email);
    }
    async clickkResetButton() {
      
        await this.page.locator(this.resetButton,).click()
        await this.page.waitForLoadState('networkidle')

    }
    
    async  remindProcessCorrect (email){
        await this.accountHeaderHover();
        await this.clickLoginINButton();
        await this.clickRemindMePasswordButton();
        await this.enterEmailAddress(email);
        await this.clickkResetButton();
    }

    async  remindProcessIsNotCorrect (){
        await this.accountHeaderHover();
        await this.clickLoginINButton();
        await this.clickRemindMePasswordButton();
        await this.enterEmailAddress('mateuszoliszewskitestop.pl');
        await this.clickkResetButton();
    }

}

