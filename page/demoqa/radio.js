// @ts-check
/** @typedef {import('@playwright/test').Page} Page */
import { test, expect } from '@playwright/test';
export class Radio{
    constructor(page){
    this.page=page        
        this.yes =page.locator('[id="yesRadio"]')
        this.impressive =page.locator('[id="impressiveRadio"]')
        this.no =page.locator('[id="noRadio"]')
        
    }

    async Radioaction(){
        await this.yes.click()
        await this.impressive.click()
        await this.no.click()
    }
    

}

