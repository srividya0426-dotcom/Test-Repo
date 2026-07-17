export class SasDemoLogin{
    constructor(page){
        this.page=page;
        this.username=page.locator('[id="user-name"]')
        this.password=page.locator('[id="password"]')
        this.loginbutton=page.locator('[id="login-button"]')
        this.products=page.locator('[data-test="title"]')
    }

    async DataInput(username,password){
        await this.page.pause()
        await this.username.fill(username)
        await this.password.fill(password)
        await this.loginbutton.click();
        
    }
}