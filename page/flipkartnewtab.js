
export class Newtab{
    constructor(page){
this.page=page
this.productinnewtab=page.locator('[title="Cart"]')
this.productsize=page.locator('[class="btn size-selector-box  "]').nth(1)  //biba first product girl dress size selection

    }

    async cartclcik(){
        await this.productinnewtab.click()

    }
}