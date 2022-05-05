const { test, expect } = require('@playwright/test');

test('basic test', async ({ page }) => {
   // page = await context.newPage();
    await page.goto('https://www.saucedemo.com');
    await page.fill('input[data-test="username"]', 'standard_user')
    await page.fill('input[data-test="password"]', 'secret_sauce')
    await page.click('input[data-test="login-button"]')
    // await expect(page.locator('a.shopping_cart_link')).toBeVisible()
    // await page.click('a.shopping_cart_link')
    // await page.locator('span.title').textContent()
    await page.locator('div.inventory_item_name:has-text("Sauce Labs Backpack")').click()
    await page.locator('button:has-text("Add to cart")').click()
    const title= await page.locator('div#inventory_item_container button')
    await expect(title).toHaveText('Remove')
    await page.click('a.shopping_cart_link')
    const qty = page.locator('div.cart_quantity')
    await expect(qty).toHaveText('1')
    const item_name = page.locator('div.inventory_item_name')
    await expect(item_name).toHaveText('Sauce Labs Backpack')
    const item_price = page.locator('div.inventory_item_price')
    await expect(item_price).toHaveText('$29.99')
    await page.click('button[data-test="checkout"]')
    await expect(page.locator('div.checkout_info')).toBeVisible()
    await page.fill('input[data-test="firstName"]','Nikhil')
    await page.fill('input[data-test="lastName"]','Bisht')
    await page.fill('input[data-test="postalCode"]','110096')
    await page.click('input[data-test="continue"]')
    await page.click('button[data-test="finish"]')
    await expect(page.locator('h2.complete-header')).toBeVisible()
    const header = await page.locator('h2.complete-header')
    // await expect(header).toBeVisible()
    await expect(header).toHaveText('THANK YOU FOR YOUR ORDER')
    // console.log("headeer is", header) 
 

    

});
