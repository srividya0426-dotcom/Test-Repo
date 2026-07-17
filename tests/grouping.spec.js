import { test, expect } from "@playwright/test";
import { SasDemoLogin } from "../page/SauceDemo/SasdemoLogin";

test.describe('Login test', ()=> {

    test('Standard login',async ({page})=> {
        await page.goto('https://www.saucedemo.com/', { timeout: 60000, waitUntil: 'domcontentloaded' });

  const login = new SasDemoLogin(page);
  await login.DataInput('standard_user','secret_sauce');
  await page.pause();

    })

  test('locked out user',async ({page})=> {
        await page.goto('https://www.saucedemo.com/', { timeout: 60000, waitUntil: 'domcontentloaded' });

  const login = new SasDemoLogin(page);
  await login.DataInput('locked_out_user','secret_sauce');
  await page.pause();

    })
  

 test('error user',async ({page})=> {
        await page.goto('https://www.saucedemo.com/', { timeout: 60000, waitUntil: 'domcontentloaded' });

  const login = new SasDemoLogin(page);
  await login.DataInput('error_user','secret_sauce');
  await page.pause();

    })
   



});