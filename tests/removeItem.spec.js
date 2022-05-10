const { test, expect } = require('@playwright/test');
const { Login } = require('../page-objects/login');
const { Inventory } = require('../page-objects/inventory');
const {Item} = require('../page-objects/item')
const {Headers} = require('../page-objects/headers')
const {Cart} = require('../page-objects/cart')

test('Remove item on checkout page', async ({ page }) => {
    const loginPage = new Login(page)
    const productsPage = new Inventory(page)
    const itemPage = new Item(page)
    const headersPage = new Headers(page)
    const cartPage = new Cart(page)
    await page.goto('https://www.saucedemo.com');
    await loginPage.login("standard_user","secret_sauce")
    await productsPage.clickItem("Sauce Labs Backpack")
    await itemPage.verifyBtnText("Add to cart")
    await itemPage.clickAddCartBtn()
    await itemPage.verifyBtnText("Remove")
    await headersPage.clickOnCart()
    await cartPage.verifyItemQty("1")
    await cartPage.verifyItemPrice("$29.99")
    await cartPage.verifyItemName("Sauce Labs Backpack")
    await cartPage.clickRemoveBtn()
    await expect(page.locator(cartPage.checkoutBtn)).toBeDisabled()
});
