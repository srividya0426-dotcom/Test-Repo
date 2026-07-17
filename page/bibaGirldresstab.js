
export class Girldress{    
    constructor(page){
        this.page=page
        this. productsize = page.locator('[class="btn size-selector-box  "]').nth(1)
        this. addtobag=page.locator('[class="add-to-cart-global btn btn-secondary"]').nth(0)
        this.totalbag=page.locator('[class="minicart-total hide-link-med"]').nth(0) //cart at the right side top that shows item added
        this.bagcount=page.locator('[class="minicart-total hide-link-med"]').nth(0)
    }

    async selectsize(){
        await this.productsize.click()
        

    }

    async addtocart(){
        await this.addtobag.click()
        
    }

        
        
    }


