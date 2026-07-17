export class Textbox{
    constructor(page){
        this.page=page;
        this.fullname=page.locator('[id="userName"]')
        this.email=page.locator('[id="userEmail"]')
        this.curraddrs=page.locator('[id="currentAddress"]')
        this.permanentaddress=page.locator('[id="permanentAddress"]')
        this.submit=page.locator('[id="submit"]')

    }
    async datainput (fn,email,curadd,fulladd){
        await this.fullname.fill(fn)
        await this.email.fill(email)
        await this.curraddrs.fill(curadd)
        await this.permanentaddress.fill(fulladd)

    }
    async dataclear(){
        await this.permanentaddress.clear()
        await this.curraddrs.click()
        await this.curraddrs.press('Control+A')
        await this.curraddrs.press('Control+C')
        await this.permanentaddress.click()
        await this.permanentaddress.press('Control+V')
        let value = await this.permanentaddress.inputValue()
        console.log(value)
        await this.page.pause()
    }
}