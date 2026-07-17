export class BibaDress{
    constructor(page){
        this.page=page;
       this.product1=page.locator('[class="link hidden-md-down"]')      //biba girls dress- first product
    }

    async getproduct(productcount){
        let newpagepromise= this.page.waitForEvent("popup");
        this.product1.nth(productcount).click()
        let newpage = await newpagepromise
        return newpage

    }
}




