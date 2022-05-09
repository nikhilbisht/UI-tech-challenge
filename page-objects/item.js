const { expect } = require("@playwright/test")

class Item{
    constructor(page){
        this.page = page
        this.item_name = 'div.inventory_item_name'
        this.item_price = 'div.inventory_item_price'
        this.button = 'div#inventory_item_container button'
    }

    async clickAddCartBtn(){
        await this.page.click('div#inventory_item_container button')
    }

    async verifyBtnText(text){
        const actualText = await this.page.locator(this.button)
        await expect(actualText).toHaveText(text)
    }

}

module.exports = {Item}