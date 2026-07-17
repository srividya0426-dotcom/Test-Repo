export class Uploaddownload{
    constructor(page){
        this.page=page;
        this.download=page.locator('[id="downloadButton"]')
        this.choosefile=page.locator('[id="uploadFile"]')
    }
    async upload(path){
        await this.choosefile.setInputFiles(path)
    }
    async downloadfiles(){
        const downloadpromise=this.page.waitForEvent('download') //is your listener
        await this.download.click() //button click
        const download=await downloadpromise
        await download.saveAs('downloads/sample.jpeg')
    }
}