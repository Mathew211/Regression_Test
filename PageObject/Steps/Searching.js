exports.Searching = class Searching {

    constructor(page) {
        this.page = page
        this.name = 'Search';
    }
    async searchAfterIndexWhenRouteISOnProducTCard() {
        const searchingInput = '#section_header-desktop .input-inner';
        await this.page.waitForLoadState("networkidle");
        await this.page.locator(searchingInput).click();
        await this.page.fill(searchingInput,'487662');
    }
    async searchAfterIndexWhenRouteIsOnListing() {
        const searchingInput = '#section_header-desktop .input-inner';
        await this.page.waitForLoadState("networkidle");
        await this.page.locator(searchingInput).click();
        await this.page.fill(searchingInput,'123421');
    }

    async pressSearchingButton() {
        const selectorButton = await this.page.locator('#section_header-desktop .search-input-button')
        await this.page.keyboard.press('Enter');
        await this.page.waitForLoadState('load');
    }
    async searchAfterName() {
        const searchingInput = '#section_header-desktop .input-inner';
        const productID = 'Samsung'
        await this.page.click(searchingInput);
        await this.page.type(searchingInput, productID.toString());
    }
    async searchAfterFullName() {
        const searchingInput = '#section_header-desktop .input-inner';
        const productID = 'Telewizor SAMSUNG QE55Q77B 55" QLED 4K 120HZ Tizen TV'
        await this.page.click(searchingInput);
        await this.page.type(searchingInput, productID.toString());
    }
    async wrongSearching() {
        const searchingInput = '#section_header-desktop .input-inner';
        const productID = 'qyxzaseq'
        await this.page.click(searchingInput);
        await this.page.type(searchingInput, productID.toString());
    }
}