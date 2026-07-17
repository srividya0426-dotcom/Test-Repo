export class Alert{
    constructor(page){
        this.page=page;
        this.clickme1=page.locator('[id="alertButton"]');  //only ok
        this.clickme3=page.locator('[id="confirmButton"]');
        this.clickme4=page.locator('[id="promtButton"]');
    }
    async  handlealerts(message){
        this.page.once('dialog',async dialog =>{  // listener page.on for handling alert n number of times)
            await dialog.accept()


        })
        await this.clickme1.click()
        await this.page.screenshot({path:'screenshots/PracticeScreenshots.png',fullPage:true})

        this.page.once('dialog',async dialog =>{
            await dialog.dismiss()
        } )

        await this.clickme3.click()

        this.page.once('dialog', async dialog =>{
            await dialog.accept(message)

        })

        await this.clickme4.click();

    }
}