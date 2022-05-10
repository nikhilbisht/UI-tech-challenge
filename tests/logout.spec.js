const { test } = require('@playwright/test');
const { Login } = require('../page-objects/login');
const { Inventory } = require('../page-objects/inventory');
const {Item} = require('../page-objects/item')
const {Headers} = require('../page-objects/headers')

test('Logout from the Application after adding the product', async ({ page }) => {
    const loginPage = new Login(page)
    const productsPage = new Inventory(page)
    const itemPage = new Item(page)
    const headersPage = new Headers(page)
    await page.goto('https://www.saucedemo.com');
    await loginPage.login("standard_user","secret_sauce")
    await productsPage.clickItem("Sauce Labs Backpack")
    await itemPage.verifyBtnText("Add to cart")
    await itemPage.clickAddCartBtn()
    await itemPage.verifyBtnText("Remove")
    await headersPage.clickMenuBtn()
    await headersPage.clickLogoutLnk()
});
