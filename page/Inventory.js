
export class Inventory{
    constructor(page){
        this.page=page
        this.cartbutton=page.locator('[id="shopping_cart_container"]')
        this.addtocart=page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]')
    }
}