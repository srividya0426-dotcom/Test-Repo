// @ts-check
/** @typedef {import('@playwright/test').Page} Page */
import { test, expect } from '@playwright/test';
export class Radio{
    constructor(page){
    this.page=page        
        this.radio1=page.locator('[id="yesRadio"]')
        this.radio2=page.locator('[id="impressiveRadio"]')
        this.radio3=page.locator('[id="noRadio"]')
        
    }
}

