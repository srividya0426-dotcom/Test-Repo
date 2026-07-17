export class Multiplepage{
    constructor(page){
         this.page=page;
         this.product1=page.locator('[class="pIpigb"]')   //flipkart
         
        

    }

    async getproduct1(prodpostion){
        let newpagepromise=this.page.waitForEvent('popup'); //new page is called popup
        await this.product1.nth(0).click()
        let newpage= await newpagepromise
        return newpage

        

    }
}