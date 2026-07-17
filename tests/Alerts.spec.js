import {test,expect} from '@playwright/test'
//import{expect} from '@playwright/test'
import { Utils } from '../page/utils'
import { Alert } from '../page/Alert'

test ('@Daily practcing Alerts', async({page}) =>{

   const utils = new Utils(page);
   const alert = new Alert(page);

   await utils.launchurl("https://demoqa.com/alerts")
   await alert.handlealerts('Hi Srividya');
   await page.pause();


})




