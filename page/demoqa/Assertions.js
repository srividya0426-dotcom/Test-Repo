import class Assertions{
    constructor(page){
        this.page=page;
        this.username=page.locator('[id="userName"]')
              this.password=page.locator('[id="password"]')
                this.login=page.locator('[id="login"]')
    }

   async datainput(username,password){
        await this.username.fill(username)
        await this.password.fill(password)
        await this.login.click()
       

   }
}