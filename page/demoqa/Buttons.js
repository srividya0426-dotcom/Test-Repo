

import { test, expect } from '@playwright/test';

export class Buttons{
    constructor(page){
        this.page=page; 
        this.doubleclick=page.locator('[id="doubleClickBtn"]')
        this.rightclick=page.locator('[id="rightClickBtn"]')
        this.clickme=page.getByRole('button', { name: 'Click Me', exact: true })
        this.doubleclicktext=page.locator('[id="doubleClickMessage"]')
        this.rightclicktext=page.locator('[id="rightClickMessage"]')
        this.clickmetext=page.locator('[id="dynamicClickMessage"]')
    }

    async actions(){
        await this.page.pause()
        await this.clickme.click()
        await this.doubleclick.dblclick()
       // await this.doubleclick.click({count:2})
       await this.rightclick.click({button:"right"})
        await this.page.pause()
        await expect(this.doubleclicktext).toHaveText("You have done a double click");
        await expect.soft(this.rightclicktext).toHaveText("You have done a right click");
        await expect(this.clickmetext).toHaveText("You have done a dynamic click");
        
        
    }


}