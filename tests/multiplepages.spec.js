import {test,expect} from '@playwright/test'
import { Multiplepage } from '../page/flipkart'
import { Utils } from '../page/utils'
import { Newtab } from '../page/flipkartnewtab'



test('Handling multiple pages', async({page}) => {

    const utils = new Utils(page)
    const multiplepage =new Multiplepage(page)
    

    await utils.launchurl("https://www.flipkart.com/beauty-and-grooming/body-face-skin-care/body-and-face-care/pr?sid=g9b%2Cema%2C5la&p%5B%5D=facets.fulfilled_by%255B%255D%3DF-Assured&p%5B%5D=facets.brand%255B%255D%3DCetaphil&sort=recency_desc&param=876674537&BU=BGM")
    //await button.actions()
    const page2=await multiplepage.getproduct1(0)
    const newtab=new Newtab(page2)
    await newtab.cartclcik()
    const page3=await multiplepage.getproduct1(1)
    const newtab3=new Newtab(page3)
    await newtab.cartclcik()
})
