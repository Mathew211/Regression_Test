const { expect } = require('@playwright/test');
const { Searching } = require("./Searching")

exports.Assertions = class Assertions {
    constructor(page) {
        this.page = page
    }
    async searchResultsCaseONe() {
        
        const selectorOfProduct = await this.page.locator('.id').innerText();
        expect(selectorOfProduct ).toContain('487662')
    }
    async searchResultsCaseTwo() {
        
        const selectorofListingName = await this.page.locator('.is-wrapper').innerText();
        expect(selectorofListingName ).toContain('123421')
    }
    async searchResultsCaseThree() {
        
        const selectorofListingName = await this.page.locator('.is-wrapper').innerText();
        expect(selectorofListingName ).toContain('Samsung')
    }
    async searchResultsCaseFour() {
        
        const selectroProductName = await this.page.locator('.name.is-title').innerText();
        expect(selectroProductName ).toContain('Telewizor SAMSUNG QE55Q77B 55" QLED 4K 120HZ Tizen TV')
    } 
     async searchResultsCaseFive() {
        
        const selectorOfIncorectSearch = await this.page.locator('.is-section').innerText();
        expect(selectorOfIncorectSearch ).toContain('Nie udało nam się znaleźć')
        
    }  
    async rejestrationResult() {
        
        // const firstsSentence = await this.page.locator('.dialog-title .title:nth-of-type(1)').innerText();
        // expect(firstsSentence ).toContain('Dziękujemy za rejestrację.')
        // const secondSentence = await this.page.locator('.dialog-title .title:nth-of-type(2)').innerText();
        // expect(secondSentence ).toContain('Zostałeś automatycznie zalogowany do Twojego konta.')
        const firstsSentence = await this.page.locator('.with-ellipsis')
        expect(firstsSentence ).toContain('Test')
       
   
    }  
}