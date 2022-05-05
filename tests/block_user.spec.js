const { test, expect } = require('@playwright/test');

test("Blocked user", async ({ page })=>{
    await page.goto('https://www.saucedemo.com');
    await page.fill('input[data-test="username"]', 'locked_out_user')
    await page.fill('input[data-test="password"]', 'secret_sauce')
    await page.click('input[data-test="login-button"]')
    const error= await page.locator('h3[data-test="error"]')
    //console.log("error is", error)
    await expect(error).toContainText("Sorry, this user has been locked out.")
})