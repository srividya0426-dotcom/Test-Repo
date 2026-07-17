
import {test,except, defineConfig}from "@playwright/test";
import { expect } from "@playwright/test";
import { Utils } from "../page/utils";  
import { Buttons } from "../page/demoqa/Buttons";
import { Checkbox } from "../page/demoqa/checkbox";
import { Textbox } from "../page/demoqa/textbox";
import { Login_page } from "../page/login_Page";
import { Radio } from "../page/demoqa/radio";
import { WebTabels } from "../page/demoqa/webTabels";
import { Uploaddownload } from "../page/uploaddownload";
import { Droppable } from "../page/droppable";
import { Porgressbar} from "../page/Progressbar";
export default defineConfig({                 //for retries
 retries:2 ,
 timeout:2*60*60*1000,       //2nd priority
})

test('@Smoke @Daily Launch Application Demoqa', async({page})=>{              //added tag to the test @daily @smoke
  //test.setTimeout(5000)   if we want a test to run within a specified time  1st priority
  //  await page.goto('https:\\demoqa.com/buttons')
    //await expect(page).toHaveTitle('Buttons')
    const utils = new Utils(page)
    const button = new Buttons(page)  
    const textbox = new Textbox(page)
    const checkbox = new Checkbox(page)
    const login_Page = new Login_page(page)
    const radio=new Radio(page)
    const WebTables= new WebTabels(page)
    const uploaddownload =new Uploaddownload(page)
    const drgadropfiles = new Droppable(page)
    const progressBar = new Porgressbar(page)
    
  //  await utils.launchurl("https://demoqa.com/buttons")
  //  await button.actions()
  //  await utils.launchurl("https://demoqa.com/text-box")
  //  await textbox.datainput('Srividya','srikann@gtail.com','Hornsby','Faddress')
  //  await textbox.dataclear()
   
  //  await utils.launchurl("https://demoqa.com/checkbox")
  //  await checkbox.selectCheckbox()
  //  await page.pause()
   
  //   await utils.launchurl('https://demoqa.com/login')
  //  await login_Page.datainput('testing login', 'testingpassword')
  //  await login_Page.logging()
  //  await page.pause()
  //  await except(this.state)

  //  await utils.launchurl("https://demoqa.com/radio-button")
  //  await radio.Radioaction()
  //  await page.pause()

      // await utils.launchurl("https://demoqa.com/webtables");
       //wait AddWebElementAction('Adi','kannan','12','5000','taxing')
       //await page.pause()

      //  await utils.launchurl("https://demoqa.com/upload-download")   
      //  await uploaddownload.upload('page/login_Page.js')
      //  await page.pause()
      //  await uploaddownload.downloadfiles()

      //  await utils.launchurl("https://demoqa.com/droppable")
      //  await page.pause()
      //  await drgadropfiles.drgaanddrop()
      //  await page.pause()

       await utils.launchurl("https://demoqa.com/progress-bar")
       await progressBar.progress()
       //await page.pause()



})