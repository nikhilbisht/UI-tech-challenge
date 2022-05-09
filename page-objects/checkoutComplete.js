const { expect } = require("@playwright/test")

class CheckoutComplete{
    constructor(page){
        this.page = page
        this.header = 'h2.complete-header'

    }
    async verifyHeaderText(){
        const actualText = await this.page.locator(this.header)
    // await expect(header).toBeVisible()
     await expect(actualText).toHaveText('THANK YOU FOR YOUR ORDER')
    }
}
module.exports = {CheckoutComplete}