
const { expect } = require('@playwright/test');
exports.SearchAssertions = class SearchAssertions {

    constructor(page) {
        this.page = page
        this.productIDSelector = '.id'
        this.expectedIndexWchichRouteToProductCard = '465939'
        this.expectedIndexWchichRouteToListing = '111111'
        this.nameOfBrand = 'Samsung'
        this.nameOfFullProduct = 'Telewizor HISENSE 65U7HQ 65" ULED 4K VIDAA Dolby Atmos 120Hz Full Array HDMI 2.1'
        this.nameOfListingSelector = '.is-wrapper'
        this.nameOfProductSelector = '.name.is-title'
        this.messageWhenSearchinDoestFindAnythingSelector = '.is-section'
        this.messageWhenSearchinDoestFindAnything = 'Nie udało nam się znaleźć'
        this.sugesterHeaderSelector = '.search-list-header'
        this.titleOfSearchedProduct = 'Proponowane produkty'
        this.emptySugesterSelector = '.no-results'
        this.emptySugesterMessage = 'Brak wyników wyszukiwania dla podanej frazy'
    }
    async searchResultsByIDRouteToProduct() {

        const selectorOfProduct = await this.page.locator(this.productIDSelector).innerText();
        expect(selectorOfProduct).toContain(this.expectedIndexWchichRouteToProductCard)
    }
    async searchResultsCaseTwo() {

        const selectorofListingName = await this.page.locator(this.nameOfListingSelector).innerText();
        expect(selectorofListingName).toContain(this.expectedIndexWchichRouteToListing)
    }
    async searchResultsCaseThree() {

        const selectorofListingName = await this.page.locator(this.nameOfListingSelector).innerText();
        expect(selectorofListingName).toContain(this.nameOfBrand)
    }
    async searchResultsCaseFour() {

        const selectroProductName = await this.page.locator(this.nameOfProductSelector).innerText();
        expect(selectroProductName).toContain(this.nameOfFullProduct)
    }
    async searchResultsCaseFive() {

        const selectorOfIncorectSearch = await this.page.locator(this.messageWhenSearchinDoestFindAnythingSelector).innerText();
        expect(selectorOfIncorectSearch).toContain(this.messageWhenSearchinDoestFindAnything)

    }

    async searchlist() {

        const contaiinsearchlist = await this.page.locator(this.sugesterHeaderSelector).innerText()
        expect(contaiinsearchlist).toContain(this.titleOfSearchedProduct)

    }

    async searchlistWhenIsEmpty() {

        const contaiinsearchlist = await this.page.locator(this.emptySugesterSelector).innerText()
        expect(contaiinsearchlist).toBe(this.emptySugesterMessage)

    }
}