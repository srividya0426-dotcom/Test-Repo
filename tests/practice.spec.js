
import {test,except}from "@playwright/test";
import { Utils } from "../page/utils";  
import { Buttons } from "../page/demoqa/Buttons";
import { Checkbox } from "../page/demoqa/checkbox";
import { Textbox } from "../page/demoqa/textbox";
import { Login_page } from "../page/login_Page";

test('Launch Application Demoqa', async({page})=>{
  //  await page.goto('https:\\demoqa.com/buttons')
    //await expect(page).toHaveTitle('Buttons')
    const utils = new Utils(page)
    const button = new Buttons(page)  
    const textbox = new Textbox(page)
    const checkbox = new Checkbox(page)
    const login_Page = new Login_page(page)
    console.log(page)
   await utils.launchurl("https://demoqa.com/buttons")
   await button.actions()
   await utils.launchurl("https://demoqa.com/text-box")
   await textbox.datainput('Srividya','srikann@gtail.com','Hornsby','Faddress')
   await textbox.dataclear()
   await utils.launchurl("https://demoqa.com/checkbox")
   
   await checkbox.selectCheckbox()
       await page.pause()
       await utils.launchurl('https://demoqa.com/login')
          await login_Page.datainput('testing login', 'testingpassword')
          await login_Page.logging()
       await page.pause()

})   