// @ts-check
/** @typedef {import('@playwright/test').Page} Page */
import { test, expect } from '@playwright/test';
export class UItesting{
    constructor(page) {
        this.page=page;
       //this.cickme=page.getByText("Click me")
       this.linkbutton =page.getByText('Link Button')
       this.clickme=page.locator('[title="Click me"]') 

       //getByRole('link', { name: 'Home' })


    }
}