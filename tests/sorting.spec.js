const { test } = require('@playwright/test');
const { Login } = require('../page-objects/login');
const { Inventory } = require('../page-objects/inventory');

test('Change the sorting of the products', async ({ page }) => {
    
    const loginPage = new Login(page)
    const productsPage = new Inventory(page)
    await page.goto('https://www.saucedemo.com');
    await loginPage.login("standard_user","secret_sauce")
    await page.selectOption('select[data-test="product_sort_container"]','za')
});
