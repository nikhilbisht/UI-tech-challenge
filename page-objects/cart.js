const { expect } = require("@playwright/test")

class Cart{
    constructor(page){
        this.page = page
        this.item_qty = 'div.cart_quantity'
        this.item_price = 'div.inventory_item_price'
        this.item_name = 'div.inventory_item_name'
        this.checkoutBtn = 'button[data-test="checkout"]'
        this.removeBtn = 'div.inventory_item_price+button'
    }

    async verifyItemQty(qty){
        const actual_qty = this.page.locator(this.item_qty)
        await expect(actual_qty).toHaveText(qty)    
    }
    async verifyItemPrice(price){
        const actual_price = this.page.locator(this.item_price)
        await expect(actual_price).toHaveText(price)    
    }
    async verifyItemName(name){
        const actual_name = this.page.locator(this.item_name)
        await expect(actual_name).toHaveText(name)    
    }

    async clickCheckoutBtn(){
        await this.page.click(this.checkoutBtn)
    }

    async clickRemoveBtn(){
        const text = this.page.locator(this.removeBtn)
        await expect(text).toHaveText("Remove")
        await this.page.click(this.removeBtn)
    }
    
    }
    
    module.exports = {Cart}