
export class Login_page{
    constructor(page){
        this.page=page
        this.username=page.locator('[id="user-name"]')
        this.password=page.locator('[name="password"]')
        this.login=page.locator('[name="login-button"]')

    }

    async datainput(username,password){
        await this.username.fill(username)
        await this.password.fill(password)

    }

    async logging() {
        await this.username.click()
        await this.username.fill()
        await this.password.fill()
        await this.password.click()
        await this.login.click()

    }
}