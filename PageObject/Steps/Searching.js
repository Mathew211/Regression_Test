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
        await this.page.waitForLoadState('networkidle')
    }


    async pressSearchingButton() {
        await this.page.locator(this.searchingButtonSelector).click();
        await this.page.waitForLoadState('networkidle')
    }
    async waitForLoad() {
        await this.page.waitForLoadState('networkidle')
    }

    async searchingCheck(text) {

        await this.clickSearchingInput();
        await this.fillSearchingInput(text);
        await this.pressSearchingButton();
    }

    async checkSuggester(text) {
        await this.clickSearchingInput();
        await this.fillSearchingInput(text);

    }

    async whenSuggesterDosentFIndAnything(text) {
        await this.clickSearchingInput();
        await this.fillSearchingInput(text);
        await this.waitForLoad()
    }
}