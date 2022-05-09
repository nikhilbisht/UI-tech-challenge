const { test, expect } = require('@playwright/test'); 'input[data-test="password"]'
const { Login } = require('../page-objects/login');
const { Inventory } = require('../page-objects/inventory');
const {Item} = require('../page-objects/item')
const {Headers} = require('../page-objects/headers')
const {Cart} = require('../page-objects/cart')
const {Checkout} = require('../page-objects/checkout')
const {CheckoutOverview} = require('../page-objects/checkoutOverview')
const {CheckoutComplete} = require('../page-objects/checkoutComplete')

test('basic test', async ({ page }) => {
    //page.setDefaultTimeout(50000)
    //test.setTimeout(120000)

    // const page = await browser.newPage()
    await page.goto('https://www.saucedemo.com');
    const loginPage = new Login(page)
    const productsPage = new Inventory(page)
    const itemPage = new Item(page)
    const headersPage = new Headers(page)
    const cartPage = new Cart(page)
    const checkoutPage = new Checkout(page)
    const checkoutOverviewPage = new CheckoutOverview(page)
    const checkoutCompletePage = new CheckoutComplete(page)
    await loginPage.login("standard_user","secret_sauce")
    await productsPage.clickItem("Sauce Labs Backpack")
    await itemPage.verifyBtnText("Add to cart")
    await itemPage.clickAddCartBtn()
    await itemPage.verifyBtnText("Remove")
    await headersPage.clickOnCart()
    await cartPage.verifyItemQty("1")
    await cartPage.verifyItemPrice("$29.99")
    await cartPage.verifyItemName("Sauce Labs Backpack")
    await cartPage.clickCheckoutBtn()
    await expect(page.locator(checkoutPage.checkoutInfo)).toBeVisible()
    await checkoutPage.enterFirstName("Nikhil")
    await checkoutPage.enterLastName("Bisht")
    await checkoutPage.enterZipCode("110096")
    await checkoutPage.clickContinueBtn()
    await checkoutOverviewPage.clickFinishBtn()
    await checkoutCompletePage.verifyHeaderText()
});
