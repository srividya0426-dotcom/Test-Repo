import { expect } from "@playwright/test";

export class Porgressbar{
    constructor(page) {
        this.page=page;
        this.startbutton=page.locator('[id="startStopButton"]')
        this.resetbutton=page.locator('[id="resetButton"]')
        this.progressbar1=page.locator('[id="progressBar"]')




    }

    async progress(){
        await this.startbutton.click()

        
        await expect.poll(async () => {
            const text=await this.progressbar1.textContent()
            return parseInt(text)

        }).toBeGreaterThanOrEqual(46)
        await this.startbutton.click()

        
    }
}



// await expect.poll(async () => {
//  const text = await progressBar.textContent();
// return parseInt(text || '0');
//  }).toBeGreaterThanOrEqual(20);