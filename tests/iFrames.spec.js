import {test,expect} from '@playwright/test'
import { IFrames } from '../page/iFrames'
import { Utils } from '../page/utils'

test('Testing iFrame', async({page}) => {

    const url = new Utils(page)
    
    await url.launchurl("https://selectorshub.com/shadow-dom-in-iframe/")

    await util

   //await page.goto("https://selectorshub.com/shadow-dom-in-iframe/")
    //await page.frameLocator('[id="pact1"]').locator('[id="jex"]').fill('ABC Testing')
    await page.pause()
    console.log('frame1')



})

