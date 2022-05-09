const { test } = require('@playwright/test');
const { Login } = require('../page-objects/login');
const { Inventory } = require('../page-objects/inventory');
const {Item} = require('../page-objects/item')
const {Headers} = require('../page-objects/headers')
const {Cart} = require('../page-objects/cart')

test('basic test', async ({ page }) => {
    
    const loginPage = new Login(page)
    const productsPage = new Inventory(page)
    await page.goto('https://www.saucedemo.com');
    await loginPage.login("standard_user","secret_sauce")
    await page.selectOption('select[data-test="product_sort_container"]','za')
});
