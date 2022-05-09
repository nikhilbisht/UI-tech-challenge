class Inventory{
    constructor(page){
        this.page = page
        this.sorting = 'select[data-test="product_sort_container"]'
        this.item_name = 'div.inventory_item_name'
        this.item_price = 'div.inventory_item_price'
    }

    async clickItem(item){
        await this.page.locator(`${this.item_name}:has-text("${item}")`).click()
    }
}

module.exports = {Inventory}