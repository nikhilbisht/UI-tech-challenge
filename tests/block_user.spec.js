const { test } = require('@playwright/test');
const { Login } = require('../page-objects/login');
const { Inventory } = require('../page-objects/inventory');
const {Item} = require('../page-objects/item')
const {Headers} = require('../page-objects/headers')

test("Blocked user", async ({ page })=>{
    const loginPage = new Login(page)
    const productsPage = new Inventory(page)
    const itemPage = new Item(page)
    const headersPage = new Headers(page)
    await page.goto('https://www.saucedemo.com');
    await loginPage.login("locked_out_user","secret_sauce")
    await loginPage.verifyValidation("Sorry, this user has been locked out.")
})