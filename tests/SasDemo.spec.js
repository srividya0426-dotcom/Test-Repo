
import { test, expect } from "@playwright/test";
import { SasDemoLogin } from "../page/SauceDemo/SasdemoLogin";

test('@Group Login to SauceDemo', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/', { timeout: 60000, waitUntil: 'domcontentloaded' });

  const login = new SasDemoLogin(page);
  await login.DataInput();
  await page.pause();

  await expect(page.locator('[data-test="title"]')).toBeVisible(); //verifying if products is visible
  


   



});


  
    

 //await page.waitForLoadState("domcontnetloaded")