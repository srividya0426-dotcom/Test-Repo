import {test} from "@playwright/test"
export class Utils{
    constructor(page){
        this.page=page
    }
    async launchurl(url){
        console.log(this.page)
        await this.page.goto(url)

        }
    async browseractions(){
        await this.page.goBack()
        await this.page.goForward()
        await this.page.reload()
        await this.page.close()
        await this.page.bringToFront()
        
    }
}