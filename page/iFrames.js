export class IFrames{
    constructor(page){
        this.page=page;
        //this.frame1=page.frameLocator('[id="pact1"]').locator('[id="jex"]')
        this.snackstextbox= page.frameLocator('[id="pact"]').locator('[id="snacktime"]').locator('[id="tea"]')
        this.lunchboxtextbox=page.frameLocator('[id="pact"]').locator('[id="app2"]').locator('[id="pizza"]')
        this.
        
                                                    
                                                    
        this.frame2=page.frameLocator('iframe').frameLocator('[id="pact3"]').locator('[id="glaf"]')

    }

    async datainput(snack){
        await this.snackstextbox.fill(snack)
    }
}