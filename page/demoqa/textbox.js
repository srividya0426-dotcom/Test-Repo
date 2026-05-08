export class Textbox{
    constructor(page){
        this.page=page
        this.fullname=page.locator('[id="userName"]')
        this.email=page.locator('[id="userEmail"]')
        this.curraddrs=page.locator('[id="currentAddress"]')
        this.fulladdress=page.locator('[id="permanentAddress"]')
        this.submit=page.locator('[id="submit"]')

    }
    async datainput (fn,email,curadd,fulladd){
        await this.fullname.fill(fn)
        await this.email.fill(email)
        await this.curraddrs.fill(curadd)
        await this.fulladdress.fill(fulladd)

    }
    async dataclear(){
        await this.fulladdress.clear()
        await this.curraddrs.click()
        await this.curraddrs.press('Control+A')
        await this.curraddrs.press('Control+C')
        await this.fulladdress.click()
        await this.fulladdress.press('Control+V')
        let value = await this.fulladdress.inputValue()
        console.log(value)
        await this.page.pause()
    }
}