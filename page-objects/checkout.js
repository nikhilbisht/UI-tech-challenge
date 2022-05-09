class Checkout{
    constructor(page){
        this.page = page
        this.checkoutInfo = 'div.checkout_info'
        this.firstName = 'input[data-test="firstName"]'
        this.lastName = 'input[data-test="lastName"]'
        this.zipCode = 'input[data-test="postalCode"]'
        this.continueBtn = 'input[data-test="continue"]'
    }

    async enterFirstName(first_name){
        await this.page.fill(this.firstName, first_name)
    }

    async enterLastName(last_name){
        await this.page.fill(this.lastName, last_name)
    }

    async enterZipCode(zip_code){
        await this.page.fill(this.zipCode, zip_code)
    }

    async clickContinueBtn(){
        await this.page.click(this.continueBtn)
    }
    
    }


 module.exports = {Checkout}