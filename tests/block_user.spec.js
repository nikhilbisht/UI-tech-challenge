const { test } = require('@playwright/test');
const { Login } = require('../page-objects/login');


test("Login with the blocked user", async ({ page })=>{
    const loginPage = new Login(page)
    await page.goto('https://www.saucedemo.com');
    await loginPage.login("locked_out_user","secret_sauce")
    await loginPage.verifyValidation("Sorry, this user has been locked out.")
})