const { test, expect } = require('@playwright/test');
const { ShopppingCardAssertions } = require('../PageObject/Assertions/ShoppingCardAssertions');
const { Before } = require('../PageObject/Steps/Before');
const { ShoppingCard } = require('../PageObject/Steps/ShoppingCard');



test.describe('ShoppingCard  test ', () => {

    let shoppingcard;
    let id = '472357'

    test.beforeEach(async ({ page }) => {

        const homePage = new Before(page)
        await homePage.doBefore();

    });

    test('When shoppingcard is empty ', async ({ page }) => {

        shoppingcard = new ShoppingCard(page)
        await shoppingcard.emptyShoppiingCard()

        shoppingcard = new ShopppingCardAssertions(page)
        await shoppingcard.assertWhenShoppingCardIsEmpty();

    })
    test('When user add something to shopingcard ', async ({ page }) => {

        const id = '472357'
        shoppingcard = new ShoppingCard(page)
        await shoppingcard.addProductToShoppingCard(id)

        shoppingcard = new ShopppingCardAssertions(page)
        await shoppingcard.assertAddingToShoppingCard();

    })
    test('When user increase the ammount of produce out of limit ', async ({ page }) => {

        shoppingcard = new ShoppingCard(page)
        await shoppingcard.maxLimitForOneItem(id);

        shoppingcard = new ShopppingCardAssertions(page)
        await shoppingcard.assertWhenUserincreaseAmountProductOutOffLimit();

    })

    test('When user remove all products from shopping card ', async ({ page }) => {


        shoppingcard = new ShoppingCard(page)
        await shoppingcard.removeFromShoppingCart(id);

        shoppingcard = new ShopppingCardAssertions(page)
        await shoppingcard.assertWhenUserRemoveAllProductFromShoppingCard();

    })

    test('When user increase ammoutn of product ', async ({ page }) => {


        shoppingcard = new ShoppingCard(page)
        await shoppingcard.plsuOne(id);

        shoppingcard = new ShopppingCardAssertions(page)
        await shoppingcard.assertWhenUserincreaseAmountProduct();

    })

    test('When user dencrease ammoutn of product ', async ({ page }) => {


        shoppingcard = new ShoppingCard(page)
        await shoppingcard.minusOne(id);

        shoppingcard = new ShopppingCardAssertions(page)
        await shoppingcard.assertWhenUserdecreaseAmountProduct();

    })

})