class CheckoutOverview{
    constructor(page){
        this.page = page
        this.finishBtn = 'button[data-test="finish"]'

    }
    async clickFinishBtn(){
        await this.page.click(this.finishBtn)
    }
}
module.exports = {CheckoutOverview}