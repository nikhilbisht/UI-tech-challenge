class Headers {
    constructor(page) {
        this.page = page
        this.cart = 'a.shopping_cart_link'
        this.menuBtn = 'button#react-burger-menu-btn'
        this.logoutLnk = 'a#logout_sidebar_link'
    }

    async clickOnCart() {
        await this.page.click(this.cart)
    }
    async clickMenuBtn() {
        await this.page.click(this.menuBtn)
    }

    async clickLogoutLnk(){
        await this.page.click(this.logoutLnk)
    }

}

module.exports = { Headers }