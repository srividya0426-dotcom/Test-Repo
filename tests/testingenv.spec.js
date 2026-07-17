
import { test, expect } from "@playwright/test";
import { SasDemoLogin } from "../page/SauceDemo/SasdemoLogin";

test.only('Env testing', async ({ page }) => {

  await page.goto(process.env.BASE_URL, { timeout: 60000, waitUntil: 'domcontentloaded' });

  const login = new SasDemoLogin(page);
  console.log(process.env.USERNAME)
  await login.DataInput(process.env.USERNAME1,process.env.PASSWORD1);
 
  await page.pause();

  await expect(page.locator('[data-test="title"]')).toBeVisible(); //verifying if products is visible
  


   



});