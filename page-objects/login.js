const { expect } = require("@playwright/test")

class Login{
constructor(page){
    this.page = page
    this.username = 'input[data-test="username"]'
    this.password = 'input[data-test="password"]'
    this.loginBtn = 'input[data-test="login-button"]'
    this.error = 'h3[data-test="error"]'

}

async inputUsername(user_name){
    await this.page.fill(this.username,user_name)
}
async inputPassword(password){
    await this.page.fill(this.username,password)
}
async clickLoginBtn(){
    await this.page.click(this.loginBtn)
}

async login(username, password){
    //setDefaultTimeout(50000)
    await this.page.fill(this.username,username)
    await this.page.fill(this.password,password)
    await this.page.click(this.loginBtn)
}

async verifyValidation(validation_text){
    const error= await this.page.locator(this.error)
    //console.log("error is", error)
    await expect(error).toContainText(validation_text)
}

}

module.exports = {Login}