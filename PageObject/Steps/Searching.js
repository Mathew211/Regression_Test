exports.Searching = class Searching {

    constructor(page) {
        this.page = page
        this.searchingInputSelector = '#section_header-desktop .input-inner';
        this.searchingButtonSelector = '#section_header-desktop .search-input-button'
    }

    async clickSearchingInput() {

        await this.page.locator(this.searchingInputSelector).click();
    }

    async fillSearchingInput(text) {

        await this.page.fill(this.searchingInputSelector, text);;
    }

    async pressSearchingButton() {
        await this.page.locator(this.searchingButtonSelector).click();
        await this.page.waitForLoadState('load');
    }

    async searchingCheck(text) {

        await this.clickSearchingInput()
        await this.fillSearchingInput(text)
        await this.pressSearchingButton()
    }

    async checkSuggestionsProductsByLetters(text) {
        await this.clicksEARCHINGiNPUT()
        await this.fillSearchingInput(text)
    }

    async whenSuggesterDosentFIndAnything(text) {
        await this.clicksEARCHINGiNPUT()
        await this.fillSearchingInput(text)
    }
}